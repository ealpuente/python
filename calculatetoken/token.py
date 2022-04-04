from datetime import datetime
import hashlib
import base64 

CLAVE = "Estaeslaclave"

# timestamp = datetime.today().strftime('%Y%m%d%H%M%S')
timestamp = "20220404185600"

token_temp = timestamp + CLAVE

token_utf8 = bytes(token_temp, 'utf-8')
print(token_utf8.hex())

hashed_string = hashlib.sha256(token_utf8)
print(hashed_string.hexdigest())

b64 = base64.b64encode(hashed_string.hexdigest().encode())

print(type(b64))

#token = timestamp + hashed_string
#print (token)
