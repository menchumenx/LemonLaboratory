# LAVORATORIO GIT - PRÁCTICA 1

### CREANDO UN REPOSITORIO LOCAL
  - Creación de carpeta en el escritorio de la maquina para alojar el repositorio.
  - En la terminal, una vez posicionada en la carpeta, inicializo el repositorio local con el comando:
    ```terminal
    git init
    ```
### DE LOCAL A LA NUBE
  - Una vez inicializado el repositorio, creo el repositorio remoto, con el mismo nosmbre que el repositorio local
  - Ahora que tengo los dos repositorios, el siguiente paso es unirlos. Para ello utilizo el siguiente comando que me proporciona github
    ```terminal
    git remote add origin https://github.com/menchumenx/LemonLaboratory.git
    ```
  - Tras confirmar que estan enlazados, creo dos archivos para realizar mi primera subida. En este caso un archivo .js con un console.log(), y un archivo git ignore, para evitar que se suba el archivo .DS_Store.
  - Creados los archivos, los añado al stage y confirmo que no se añade .DS_Store
  - Confirmo los cambios con:
    ```terminal
    git commit -m"primera subida"
    ```
  - Ya tengo los cambios preparado para subir, pero al ser la primera subida necesito haer uso de los dos siguiente comando para terminar de configurar el enlace de los dos repositorios.
    ```termianl
    git branch -M main
    git push -u origin main
    ```
    ***git branch -M main*** renombra la rama actual a "main". La opción -M indica que se debe realizar un cambio forzado si la rama "main" ya existe.
    ***git push -u origin main*** empuja los cambios locales al repositorio remoto en la rama "main". La opción -u establece la rama "main" como la rama de seguimiento predeterminada.

    <img src="./assets/creado_repo" alt="Creando repositorio en github">
    <img src="./assets/configurando" alt="configurando">


    
