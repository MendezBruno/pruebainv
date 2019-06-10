# FavoGit


## Build and Run

requisito para build es tener instalado docker preferente en linux. En windows se deben configurar varios permisos.

sobre la rama master:

docker build -t imageprod .

docker run -it -d -p 5000:5000 imageprod

entrar a `http://localhost:5000/`



## Development server

git checkout develop, luego hacer instalar depencias de python y las de angular correr ambos servidores, entrar a `http://localhost:4200/`






