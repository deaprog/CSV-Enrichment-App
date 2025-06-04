from django.test import TestCase, Client
from django.urls import reverse

class FileUploadTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_file_list_endpoint_returns_200(self):
        response = self.client.get(reverse('file-list'))
        self.assertEqual(response.status_code, 200)
