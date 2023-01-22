from django.conf import settings
import boto3




class S3Manager:
    AWS_ACCESS_KEY = settings.AWS_ACCESS_KEY
    AWS_SECRET_KEY = settings.AWS_SECRET_KEY

    def __init__(self):
        self.client = boto3.client("s3",
                                   aws_access_key_id=self.AWS_ACCESS_KEY,
                                   aws_secret_access_key=self.AWS_SECRET_KEY)

    def upload(self, file_obj, bucket, key):
        self.client.upload_fileobj(file_obj, bucket, key)

    def delete(self, Bucket, Key):
        self.client.delete_object(Bucket=Bucket,Key=Key)

    def download(self, Bucket, Key):
        self.client.download_file(Bucket=Bucket,Key=Key)


    def put_object(self, Bucket, Key):
        self.client.put_object(Bucket=Bucket,Key=Key)

    def upload_fileobj(self, file_obj, bucket, key, content_type):
        self.client.upload_fileobj(file_obj, bucket, key, ExtraArgs={'ContentType': content_type})

