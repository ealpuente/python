from datetime import datetime
import hashlib
import base64 


# timestamp = datetime.today().strftime('%Y%m%d%H%M%S')
timestampString = "20220405074500"
ClearPassword = "n0nxzZ1UOrXKPEKCFEcLrkU7h"
hashInputString = timestampString + ClearPassword

# Codificamos en UTF-8
hashInputBytes = bytes(hashInputString, 'utf-8')
print(hashInputBytes.hex())

# Calculamos el hash sha256
hashBytes = hashlib.sha256(hashInputBytes)
print(hashBytes.hexdigest())

hashBase64 = base64.b64encode(bytes(hashBytes.digest()))
print(hashBase64)

token = timestampString + hashBase64.decode("utf-8") 
print (token)

