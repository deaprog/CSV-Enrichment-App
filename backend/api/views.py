import pandas as pd
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import UploadedCSV
from .serializers import UploadedCSVSerializer
import os

class FileUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        serializer = UploadedCSVSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class FileListView(APIView):
    def get(self, request):
        files = UploadedCSV.objects.all().order_by('-uploaded_at')
        serializer = UploadedCSVSerializer(files, many=True)
        return Response(serializer.data)

class FilePreviewView(APIView):
    def get(self, request, file_id):
        try:
            file_obj = UploadedCSV.objects.get(id=file_id)
            file_path = file_obj.file.path
            df = pd.read_csv(file_path)
            return Response({
                "columns": df.columns.tolist(),
                "rows": df.head(50).to_dict(orient="records")
            })
        except Exception as e:
            return Response({"error": str(e)}, status=500)