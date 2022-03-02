from distutils.core import setup 
import py2exe 
 
setup(name="Transformar terceros", 
 version="1.0", 
 description="Transforma terceros para la carga en sediVal", 
 author="Elias Alpuente", 
 author_email="elias.alpuente@dival.es", 
 url="", 
 license="", 
 scripts=["transformarter.py"], 
 console=["transformarter.py"], 
 options={"py2exe": {"bundle_files": 1}}, 
 zipfile=None,
)