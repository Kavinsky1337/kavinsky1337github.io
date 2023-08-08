# import requests
import pyscript

# headers = {
#     'accept': 'application/json',
# }

# response = requests.get('http://185.182.110.81:9000/get_city', headers=headers)

# print(response.text)

import requests
from pyodide.http import pyfetch

pyodide_http.patch_all()
headers = {
    'accept': 'application/json',
}

response = requests.get('https://usefulwork.ru/get_category', headers=headers)

print(response.text)
display(f"{response.text}", target="request_status")