from datetime import datetime
import hashlib
import base64 
import sys

def calculateToken(clearPassword):

	#clearPassword = "n0nxzZ1UOrXKPEKCFEcLrkU7h"

	timestampString = datetime.utcnow().strftime('%Y%m%d%H%M00')
	hashInputString = timestampString + clearPassword
	
	# Codificamos en UTF-8
	hashInputBytes = bytes(hashInputString.encode('utf-8'))

	# Calculamos el hash sha256 y pasamos a base 64
	hashBytes = hashlib.sha256(hashInputBytes)
	hashBase64 = base64.b64encode(bytes(hashBytes.digest()))

	token = timestampString + hashBase64.decode("utf-8") 
	return token

if __name__ == "__main__":
	if len(sys.argv) < 2:
		print("Uso: calculateToken [password]")
	else:
		token = calculateToken(sys.argv[1])
		print(token)



