# Trabajo práctico 02

## Descripción

Sistema que permite leer un archivo json con juegos, permite además crear un txt formateado con el catálogo de juegos a partir del archivo json.

## Instalación

Introducir el comando desde la consola

npm install

con este comando se instalará los módulos.

## Ejecución

En la terminal de comandos se debe escribir en el directorio raíz

npm start

## Estructura del proyecto

dentro de la carpeta datos se encuentra el archivo json
en src se encuentran los archivos de javascript
en la carpeta salida se debe crear el archivo txt

## Flujo asíncrono


1. Se obtiene la ruta del archivo 'desti


El flujo principal es el siguiente:

1. La función leerJson() permite leer el archivo con fs.readFile()
2. Con JSON.parse() se convierte el contenido a un array de javascript
3. Con crearReporte() se formatea el catálogo con el array obtenido
4. Con el texto formateado se crea el archivo txt con escribirTexto()

Además se usan try y catch para el manejo de errores.

## Dependencias

picocolors versión 1.1.1

## Preguntas

1. ¿Qué responsabilidad tiene cada módulo?

archivos.js
Es el módulo de ejecución general

archivos.js
Es el módulo que lee los archivos

juegos.js
Éste módulo formatea la información de los juegos y crea el archivo catálogo_juegos.txt

2. ¿Qué diferencia existe entre exportar una función y ejecutarla?

Exportar lo que hace es proveer la función al programa que lo necesite, ejecutarla lo que hace es pone en funcionamiento a la función.

3. ¿Qué representa la promesa devuelta por fs.readFile ?

La promesa que devuelve es una operación de lectura, puede devolver el proceso de lectura o bien el error si no puede leerlo.

4. ¿Por qué await se utiliza dentro de una función async ?

await le indica a la función que debe esperar una promesa. Una función async es asíncrona.

5. ¿Qué errores pueden llegar al catch de main ?

Podrían darse errores de lectura o escritura de archivos.

O bien si el contenido del archivo json no está bien, que falte algún corchete o llave daría error.

6. ¿Por qué se publican package.json y package-lock.json , pero no node_modules ?

Node modules tiene los módulos descargados, éstos pueden ocupar mucho espacio, en cambio package.json y package-lock.json tienen la descripción de los módulos, de los cuales se pueden instalar con npm install

7. ¿Para qué se utiliza picocolors y por qué figura en dependencies ?

La función es dar color al texto desde la consola.
Figura en dependencias porque es un módulo, necesita instalarse para funcionar.


