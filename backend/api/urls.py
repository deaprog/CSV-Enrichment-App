from django.urls import path
from .views import FileUploadView, FileListView, FilePreviewView

urlpatterns = [
    path('upload/', FileUploadView.as_view(), name='file-upload'),
    path('files/', FileListView.as_view(), name='file-list'),
    path('preview/<int:file_id>/', FilePreviewView.as_view(), name='file-preview'),
]