import requests

url = "http://localhost:8000/upload-image/"
files = {"file": open("test.jpg", "rb")}
response = requests.post(url, files=files)
print(response.json())