DESCRIPCION
Este trabajo práctico tiene como objetivo aplicar conceptos básicos de Node.js, especialmente el uso de módulos, funciones, promesas, async/await y manejo de errores.
El proyecto utiliza el módulo fs de Node.js para realizar operaciones de lectura de archivos de manera asíncrona y picocolors para mostrar información en la consola con diferentes colores.
La aplicación está organizada en diferentes módulos, donde cada uno tiene una responsabilidad determinada. Esto permite mantener el código ordenado, reutilizable y más fácil de mantener.

INSTALACION
Para utilizar el proyecto es necesario tener instalado Node.js.

Primero se debe clonar o descargar el proyecto y luego abrir una terminal dentro de la carpeta principal.
Para instalar las dependencias indicadas en package.json, se ejecuta:

npm install

Este comando descarga las dependencias necesarias y crea la carpeta node_modules.
También utiliza el archivo package-lock.json para instalar las versiones exactas de los paquetes que fueron registradas en el proyecto.

EJECUCION
Una vez instaladas las dependencias, el programa puede ejecutarse mediante:

node index.js

Si el proyecto tiene configurado un script de ejecución dentro de package.json, también puede utilizarse:

npm start

El programa ejecuta la función principal y realiza las operaciones definidas en los diferentes módulos.

ESTRUCTURA DEL PROYECTO

Una posible estructura del proyecto es:

Trabajo-Practico-02/
│
├── index.js
├── package.json
├── package-lock.json
├── node_modules/
│
├── src/
│   ├── main.js
│   ├── funciones.js
│   └── archivo.txt
│
└── README.md

RESPONSABILIDAD DE CADA MODULO

index.js
Es el punto de entrada del programa. Desde este archivo se inicia la ejecución de la aplicación y se llama al módulo correspondiente.

archivo.txt
Es el archivo que se utiliza como fuente de datos para realizar la lectura mediante fs.readFile.

package.json
Contiene información del proyecto, como su nombre, versión, scripts y las dependencias que necesita para funcionar.

package-lock.json
Registra las versiones exactas de las dependencias instaladas y de sus dependencias internas.

node_modules
Es la carpeta donde npm instala físicamente los paquetes necesarios para ejecutar el proyecto.

Flujo asíncrono

El programa utiliza operaciones asíncronas para evitar que la ejecución de Node.js quede bloqueada mientras se realiza la lectura de un archivo.
El flujo general puede representarse de la siguiente manera:

Inicio
  │
  ▼
index.js
  │
  ▼
main()
  │
  ▼
Función asíncrona
  │
  ▼
fs.readFile()
  │
  ▼
Promise
  │
  ▼
await
  │
  ▼
Lectura del archivo
  │
  ▼
Procesamiento del resultado
  │
  ▼
Finalización

Dependencias
picocolors

El proyecto utiliza la dependencia:
npm install picocolors
picocolors permite agregar colores y estilos al texto mostrado en la terminal. Por ejemplo, se puede utilizar para diferenciar mensajes informativos, resultados exitosos o mensajes de error.
Se encuentra dentro de dependencies porque el programa necesita esta biblioteca para funcionar correctamente durante su ejecución.


Comandos utilizados

Instalar las dependencias:
npm install

Instala los paquetes especificados en package.json y genera o actualiza package-lock.json.

Instalar picocolors:
npm install picocolors

Agrega picocolors como dependencia del proyecto.

Ejecutar el programa:
node index.js

Ejecuta el archivo principal utilizando Node.js.
Ejecutar mediante npm:
npm start

Ejecuta el comando definido en el script start del archivo package.json.

Preguntas y respuestas

1. ¿Qué responsabilidad tiene cada módulo?
Cada módulo tiene una tarea específica dentro del programa. El archivo de entrada inicia la aplicación, el módulo principal coordina el flujo de ejecución y los módulos de funciones contienen tareas que pueden reutilizarse.
Separar las responsabilidades permite evitar que todo el código se encuentre en un único archivo y facilita su lectura, mantenimiento y reutilización.

2. ¿Qué diferencia existe entre exportar una función y ejecutarla?
Exportar una función significa hacerla disponible para que otro módulo pueda utilizarla.
En cambio, ejecutar una función significa llamarla para que se realice la tarea que contiene:

3. ¿Qué representa la promesa devuelta por fs.readFile?
La promesa representa una operación de lectura que todavía puede estar en proceso.
Cuando fs.readFile se utiliza mediante su versión basada en promesas, no devuelve inmediatamente el contenido del archivo.


4. ¿Por qué await se utiliza dentro de una función async?
await se utiliza para esperar el resultado de una Promise utilizando una sintaxis más sencilla y parecida a una ejecución secuencial.
La palabra async indica que la función trabaja de forma asíncrona y que devuelve una promesa.

5. ¿Qué errores pueden llegar al catch de main?
Al catch pueden llegar los errores producidos durante las operaciones que se encuentran dentro del try.

6. ¿Por qué se publican package.json y package-lock.json, pero no node_modules?
package.json y package-lock.json deben formar parte del proyecto porque permiten conocer qué dependencias necesita y qué versiones exactas fueron utilizadas.


7. ¿Para qué se utiliza picocolors y por qué figura en dependencies?
picocolors se utiliza para darle formato y color a los mensajes que aparecen en la terminal.
Figura en dependencies porque es una biblioteca que el programa utiliza directamente durante su ejecución. Por lo tanto, cualquier persona que instale el proyecto necesita disponer de este paquete para que el programa funcione correctamente.
