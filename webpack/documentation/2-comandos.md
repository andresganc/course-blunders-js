

## COMANDOS BASICOS

    - npx webpack: Ejecuta y compila webpack en modo production

        $ npx webpack           

    
    - npx webpack --mode development: compila webpack en modo desarrollo. Resultando archivos legibles 
        para cualquier humano

        $ npx webpack --mode development

    
    - npx webpack --mode production: Compila webpack en modo produccion. Resultando archivos optimizados 
        y minimizados (Muy beneficiosos para produccion) pero poco legibles para el desarrollador



### Comando para configuracion de archivo webpack.config.js

    - Con este comando ejecutamos la configuracion del archivo webpack.config.js cuando lo hagamos
        este comando es recomendable meterlo en un script dentro package.json

        - comando en consola
        $ npx webpack --mode production --config webpack.config.js

        - Comando en el script de package.json
        "build": "webpack --mode production"