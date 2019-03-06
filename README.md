# **NodeJS**

## **Conocimientos Previos**

### **Capas**

Es una de la tecnicas mas comunes que los diseñadores de software usan para romper en partes un sistema complejo.

En este esquema, la capa superior usa varios servicios definidos por la capa inferior, que no es consciente de la capa superior.Ademas cada capa generalmente oculta sus capas inferiores.

La parte mas dura de la arquitectura por capas es decidir que capas tener y que responsabilidad deberian tener cada una.

## **¿Qué es nodejs?**

Es javascript que se ejecuta en el servidor, usa el motor V8 de Google

## **¿Por qué es tan popular?**

- Entradas simultaneas que no realizan bloqueos al servidor(peticiones asincronas)
- Es sumamente rápido y fácil de configurar
- Más de 470 mil paquetes disponibles(el ecosistema con más librerías en el mundo)

## **¿Qué puedo hacer con Node?**

- Uso de socket para una comucación real Cliente-Servidor
- Manejo de archivos en FileSystem , cargas simultáneas
- Servidores locales y remotos con información en tiempo real
- Conexiones a bases de datos
- Creacion de servicios REST en segundos

## **¿Quienes lo usan?**

- Netflix
- Paypal
- Linkedin
- Walmart
- Uber
- Nasa

> Nodejs usa una conducción por eventos que no se bloquean en las entradas y salidas al conectarse con el servidor.

## **Ciclo de vida de un proceso**

1.- Pila de procesos (Request & Response)

2.- Pila de subprocesos (Async & Request)

3.- Cola de Callbacks (Async & Response)

![Imagen de JonMircha](https://github.com/jonmircha/edfullstackjs-2018/raw/master/assets/event-loop.png)

## **Blocking vs Non-Blocking I/O**

[Fuentes](https://github.com/jonmircha/edfullstackjs-2018/tree/master/Node)

**Modelo sincronico(Blocking) :**

```javascript
let { getUsuarios } = require("./usuarios/usuario");

console.log("Inicio de programa");

let usuario1 = getUsuariosSync(1);
console.log("Usuario1 : ", usuario1);

let usuario2 = getUsuariosSync(2);
console.log("Usuario2 : ", usuario2);

console.log("Hola mundo !!");
```

**_Output_**

```sh
    $ node sincronico
    > Inicio de programa
    > Usuario1 : {id: 1, nombre: 'Usuario1'}
    > Usuario2 : {id: 2, nombre: 'Usuario2'}
    > Hola mundo !!
```

**Modelo asincronico(Non-blocking) :**

```javascript
let { getUsuarios } = require("./usuarios/usuario");

console.log("Inicio de programa");

getUsuarios(1, usuario1 => {
  console.log(usuario1);
});

getUsuarios(2, usuario2 => {
  console.log(usuario2);
});

console.log("Hola mundo !!");
```

**_Output_**

```sh
    $ node asincronico
    > Inicio de programa
    > Hola mundo !!
    > Usuario1 : {id: 1, nombre: 'Usuario1'}
    > Usuario2 : {id: 2, nombre: 'Usuario2'}
```

## **Procesos dentro de NodeJS**

- Call stack
- Node Api's
- Cola de callbacks : almacena todos callbacks que ya terminaron su proceso en los nodeApi's y lo acumula en forma de cola , y espera que el callstack termine el proceso para comenzar a desencolar en forma de llegada desde el node api's

![Javascript](https://cdn-images-1.medium.com/max/748/1*-MMBHKy_ZxCrouecRqvsBg.png)
![Javascript](https://www.oreilly.com/library/view/learning-nodejs-development/9781788395540/assets/74fbf540-71b8-499a-a7cf-2da14ed034de.jpg)

## **Modelos de programación asíncrona**

El principal problema de la programación asíncrona es como dar continuidad a las operaciones no bloqueantes del algoritmo una vez que éstas han terminado su ejecución.

Para dar respuesta al tratamiento de continuidad al resultado de las operaciones no bloqueantes una vez que éstas han terminado , se han establecido modelos para tratarlos como programación sincrónica.

### **Modelo de paso de continuadores**

Este modelo es el mas recurrente en NodeJS. Cada función recibe información acerca de cómo debe tratar al resultado(de éxito o error) de cada operación.Requiere orden superior.

### **Modelo de eventos**

Se utiliza una arquitectura dirigida por eventos que permite a las operaciones no bloqueantes informar de su termianción mediante señales de éxito o fracaso. Requiere correlación para sincronizar.

### **Modelo de promesas**

Se razona con los valores de retorno de las operaciones no bloqueantes de manera independiente del momento del tiempo en que dichos valores se obtengan.

### **Modelo de generadores**

Se utilizan generadores para dvolver temporalmente el control al programa llamante y retornar en un momento posterior a la rutina restaurando el estado en el punto que se abandono su ejecucion.

[Mas sobre este tema](https://www.todojs.com/programacion-asincrona-paso-de-continuadores-eventos-promesas-y-generadores/)

## **Usuando nodemon**

```sh
    $npm install -g nodemon
```

> Nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en nodejs .

> Reiniciando automaticamente la aplicacion de node cuando se detectan cambios en el directorio

```javascript
// destructuración de objetos

let deadpool = {
  nombre: "Wade",
  apellido: "Wilson",
  poder: "regeneración"
};

// let {nombre,apellido,poder} = deadpool;
// console.log(nombre,apellido,poder);

let { nombre: nom, apellido: ape, poder: po } = deadpool;
console.log(nom, ape, po);
```

## **Event Loop**

> Javascript poseé un modelo de concurrencia basado en un 'loop de eventos' .Este <br>
> modelo es bastante diferente al modelo de otros lenguajes como c o java.

**Para usar fetch en Nodejs :**

```sh
    $npm install node-fetch -g
```

```sh
    $npm install node-fetch --save-dev
```

**Curiosidad :**

```javascript
class Ahorro {
    constructor(ahorro) {
        this.valor = ahorro;
    }
    getAhorro() {
        return this.valor;
    }
    transformar(callback) {
        return new Ahorro(callback(this.valor));
    }
}
let procentaje = new Ahorro(100)
    .transformar(ahorro => (12 * 100) / ahorro)
    .transformar(ahorro => `${ahorro}%`)
    .getAhorro();

console.log(procentaje);
```

**Con programacion Funcional :**

```javascript
    const obtenerProcentajeGastado = (gastado,ahorro)=>{
        return UnaCosa(ahorro)
                .map(ahorroBase=>10*100/ahorroBase)
                .map(porcentaje=>`${porcentaje}%`)
                .fold(data=>data)
    }
    const UnaCosa = (valor)=>{
        return{
            map(fn){
                return UnaCosa(fn(valor))
            },
            fold(fn){
                return fn(valor)
            },
            inspect(){
                return `UnaCosa(${valor})`
            }

        }
    }
    console.log(obtenerProcentajeGastado(10,100))
```

## **Async Await**

Esto es mucha utilidad para las promesas hell

```javascript
    // Al colocar la palabra async indirectamente retornamos una promesa
    const getName = async ()=>{
        return 'thom'
    }

    //este seria la promesa pero sin el async
    const myPromise = ()=>{
        return new Promise(resolve=>resolve('thom'))
    }
```

## **Cookies**

Pequeños documentos que almacenan las preferencias del usuario independiente de cada navegador.

Estan diseñadas para contener una cantidad generosa de datos específicos para un cliente y un sitio web, y se puede acceder a ellos mediante el servidor web o la computadora del cliente.La razón detrás de esto es permitir que el servidor entregue una página adaptada a un usuario particular, o la página en sí misma pueda contener algún script que conoce los datos en la cookie, y por lo tanto es capaz de transformar información de una visita al sitio web.

La cookie es una pequeña tabla de busquedas que contiene par de valores de datos claves.Una vez que la cookie ha sido leída por el código en el servidor o en la computandora del cliente, los datos se pueden recuperar y usar personalizar la página web de la página web de manera apropiada.

Las cookies son prácticamente una forma conveniente de llevar información de una sesión en un sitio web a otra, o entre sesiones en sitios web relacionados, sin tener que cargar una máquina de servidor con grandes cantidades de almacenamiento de datos.Si tuviéramos que almacenar datos en el servidor sin utilizar cookies, sería difícil recuperar la información de un usuario en particular sin requerir un inicio de sesión en cada visita al sitio web. Por lo tanto, una cookie se puede usar simplemente si hay una gran cantidad de información para almacenar. Además, se puede hacer que una cookie persista durante un período de tiempo arbitrario.

### **Diferencias con el localStorage**

Las cookies son principalmente para la lectura del ladon del servidor, mientras que el localStorage solo puede ser leído por el lado del cliente.Ademas de guardas datos , una gran diferencia es el tamaño de datos que puede almacenar . El local storage alamcena 5MB

## **¿Que caché en el navegador?**

Es una memoria que tiene el navedor donde guarda los assets (imagenes ,js ,css , etc) , permite cargar mas rápido guardando en la pc del cliente parte de la informacion que previamente se ha solicitado.

## **Problemas del caché del navegador**

Cuando se actualiza una página es decir subir los cambios , cuando se lanza a producción los cambios no se aplican ya que la cache del navegador guarda la informacion necesaria para no "comunicarse" otra ves con el servidor (aunque si lo hace) , lo que trato de decir es que el navegador crea un punto de tal manera que agiliza la experiencia guardando ciertos datos de la pagina , por eso si queremos ver los cambios tendriamos que borrar la cache de la navegación.Pero esto es muy molesto , por lo cual a las llamadas de los css o de los script se crea parametros para que la cache lo detecte como nuevo .


```html
    <!-- Códigos -->
    <script src="js/script.js?11022019"></script>
````

## **Proyecto**

```sh
    $ cd 6-to-do
    $ npm init
    $ npm install --save yargs colors
```

El comando `--save` significara que son dependencias obligatorias de la aplicación

**Significado :**

- yargs : es una libreria muy popular y usada dentro del mundo de javascript, con lo cual podemos parar parámetros de nuestra aplicación hecha en Node.js desde la terminal

## **HTTP**

Todas las peticiones web necesitaran de un protocolo . Pero que es un protocolo , un protocolo e un conjunto de reglas que se tiene que seguir para poder objtener un resultado .Intercambiar informacion entre un cliente un servidor web

```sh
    $ npm init -y
    $ npm i --save express express-session
```

## **Diferencia entre --save y --save-dev**

- `--save-dev` se usa para guardar el paquete para propósitos de desarrollo
    - Ejm : unit test , minificación , etc
- `--save` se usa para guardar el paquete requerido para que la aplicación se ejecute

## **Otros conceptos**

### **¿Que es un API?**

Para entender que es una API hay que enteneder que s una interface.
Se puede definir interface como un contrato entre dos partes , el cual una establece las condiciones de la relación, en este caso , la interfaz especifica que métodos , funciones , propiedades , recursos estaran disponibles para ser usados

### **Arquitectura REST**

Tambien conocido como Representational State Transfer ,es una forma de crear APIs.
Las aplicaciones que utilizan esta arquitectura estan basadas en recursos mas no en acciones , mayormente son las aplicaciones que estan basadas en Cliente - Servidor .

Esta arquitectura que propone principios que ayudan a que una aplicación web sea estándar .

```javascript
/**
 * 
 * Los verbos principales
 * 
 *  GET POST PUT PATCH DELETE
 * 
 * REST : 
 * 
 * ES UN SISTEMA DE REGLAS QUE NOS DICTAN CÓMO DISEÑAR APLCACIONES DISTRIBUIDAS DE FORMA QUE TENGAN CIERTAS CARACTERISTICAS DESEABLES
 * 
 * Tu servicio manipula RECURSOS
 * 
 * Los recursos son entregados a los clientes, y estos pueden decirle al servidor que quieren MODIFICARLOS, BORRARLOS ,REEMPLAZARLOS O AGREGAR NUEVOS RECURSOS
 * 
 * ¿CÓMO IDENTIFICAR UN RECURSO?
 * URL : lOCALIZACIÓN DE UN RECURSO EN UNA RED DE COMPUTADORAS
 * URI : SECUENCIA DE CARACTERES PARA IDENTIFICAR UN RECURSO
 * 
 * 
 * El verbo GET 
 * 
 * IDEMPOTENTE : NO IMPORTA CUANDO PEDIDOS DE ESTE VERBO SE HAGA NO PRODUCIRAN NINGUN CAMBIO EN EL SERVIDOR
 * 
 *      MISMA OPERACIÓN SIEMPRE OCURRE EN EL SERVIDOR
 *      NO HAY EFECTOS SECUNDARIOS EN EL SERVIDOR.ES UNA OPERACION READ-ONLY
 *      EL CUERSO DEL REQUEST NO LLEVA DATA
 * 
 * El verbo POST
 * 
 *      Comúnmente utilizado para CREAR recursos
 *      No es IDEMPOTENTE
 *      Produce efectos secundarios en el servidor
 *       El cuerpo del REQUEST si lleva data
 * 
 * 
 * El verbo PUT
 * 
 * COMÚNMENTE UTILIZADO PARA CREAR Y REEMPLAZAR RECURSOS
 * SI ES IDEMPOTENTE
 * EL CUERPO DEL REQUEST SI LLEVA DATA
 * 
 * El verbo DELETE
 * 
 * USADO PARA BORRAR RECURSOS
 * SI ES IDEMPOTENTE
 * LLMAR MÚLTIPLES VECES A DELETE SOBRE UN RECURSO TENDRÁ EL MISMO RESULTADO
 * EL CUERPO DEL REQUEST NO LLEVA DATA
 * 
 * 
 * El verbo PATCH
 * 
 *  VERBO CREADO RECIENTEMENTE.ESTÁ SIENDO ADOPTADO POR LA COMUNIDAD
 *  NO GARANTIZA SER IDENPOTENTE, PERO PUEDE SERLO
 *  SE UTILIZA PARA HACER MODIFICACION PARCIALES A RECURSOS
 *  PUT ES UN REEMPLAZO TOTAL DE UN OBJETO, cON PATCH CAMBIAMOS ALGUNOS ATRIBUTOS
 * 
 * El valor de la IDEMPOTENCIA
 * 
 * - EL CLIENTE SABE CÓMO REACCIONAR CUANDOI HAY FALLAS EN LA RED
 */
```

**PRINCIPIOS DE REST :**

- **Cliente-Servidor**
    - Esto se refiere para que REST exista deben haber dos actores, un cliente y un servidor que almacene o genere informacion.
- **Stateless**
    - El hecho de que no almacena estado se refiere a que el servidor no almacena información del cliente para servir a los propósitos de la aplicacion.Toda la aplicacion necesaria para hacer funcionar a la aplicación debe provenir del cliente.
    - Esto significa que los request deben ser autocontenidas, deben proveer la autenticación en caso de ser necesarias,deben contener el tipo de operación que se va a realizar o la información que se debe modificar
    - Cada mensaje HTTP contine toda la información necesaria para comprender la perición.
- **Interfaz Uniforme**
    - Los recursos se exponen a través de URIs , direcciones http como las que pones en la barra del navegador. Solo deben concentrarse en recursos.

**Prioriza el uso de hypermedia :**

(HATEOAS o hipermedia como motor del estado de la aplicación) restriccion de la arquitectura de la aplicación REST

> hypermedia : es un set de métodos o procedimientos para escribir , diseñar o componer componentes que integren soportes tales como : texto,imagen,video,audio,mapas. Entonces 

![REST](https://static.packt-cdn.com/products/9781783287963/graphics/7963OS_02_01.jpg)
### **Rutas**

- Las **rutas** ayudan a definir los accesos a nuestra aplicacion web
- Puede devolver un valor, generar una llamada a una vista o un controlador

### **Utilización del middleware**

> *Tambien conocida como lógica de intercambio de información entre aplicaciones, es un software que asiste a una aplicación para interactuar o comunicarse con otras aplicaciones*<br>
> Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.

Express es una infraestructura web de direccionamiento y middleware que tiene una funcionalidad mínima propia : una aplicacion Express es fundamentalmente una seria de llamadas a funciones de middlewar.

Estos son módulos **plug and play** que se puede apilar arbitrariamente en cualquier orden y proveen cierta funcionalidad

Middleware es un software que asiste a una aplicación para interacctuar o comunicarsae con otras aplicaciones, o paquetes de programas, redes,hardware y/o sistemas operativos . De esta forma, se provee una solución que mejora la calidad de servicio, así como la seguridad,el envío de mensajes , la actualizacion del directorio de servicio.

> REST son los principios de arquitectura del software mientras que RESTful son los servicios web que siguen esos principios

### **Generador de express**

>http://expressjs.com/en/starter/generator.html

Esto se utilizara para construir un esqueleto , platilla , o una capa abstracta para la creacion rapida de la aplicacion con express

```sh
    $ npm install express-generator -g
```

### **Usando NetCat**

Es usado para las conexiones de TCP y UDP

```sh
    $ man nc # Esto se usara para ver las opciones de netcat
    $ nc -v localhost 3000 # informacion/ a que maquina me quiero conectar/por medio de que puerto
    >>> found 0 associations
    >>> found 1 connections
    >>>         1:  flags = B2(CONNECTED,PREFERRED)
    >>>             outif lo0
    >>>             src ::1 port 58793
```

```sh
    $ GET / HTTP/1.1
    # OTRO
    $ GET /?nombre=daniel HTTP/1.1
```

### **Diferencia entre URL y URi**

URI son la siglas de Uniform Resource identifier(Identificador de recursos uniforme).
URI es el camino para identificar cualquiera de estos puntos de contenido, ya sea una página de texto , un video o un clip de sonido, una imagen fija o animada, o un programa.

Por tanto , una URI es una cadena de caracteres que se utilizan para identificar un nombre o un recurso en internet.

Una URI identifica un recurso , ya sea por ubicación o un nombre, o ambos,Un URI tiene dos especializaciones conocidas como URL y URN.

URL es un subconjunto de URI que especifica que un recurso identificado está disponible y el mecanismo para recuperarlo.La URL define cómo se puede obtener el recurso

Un Nombre de Recurso Uniforme (URN) es un identificador uniforme de recursos (URI) que utiliza el esquema de URN, y no implica la disponibilidad del recurso identificado. Tanto URN (nombres) como URL (localizadores) son los URI, y un URI particular puede ser a la vez un nombre y un localizador al mismo tiempo.

- Un URL es un URI que identifica un recurso y también proporciona los medio para localizar el recurso mediante la descripción de la forma de acceder a el
- Un  URL es un URI
- Un URL no es necesariamente un URI
- Puedes obtener una "cosa" a través de una URL , pero no se pude conseguir cualq cosa desde una URN

En conclusión, si el URL describe tanto la ubicación y el nombre de un recurso , el término a utilizar es URI.

[Fuente](https://medium.com/datadriveninvestor/cookies-vs-local-storage-2f3732c7d977)

[Fuente](https://stackoverflow.com/questions/3220660/local-storage-vs-cookies)

```python
    # Autor : Thom Maurick Roman Aguilar
    # Estudiante de la carrera Ingeniería de sistemas
    
    # Si no estas deacuerdo con algo que está escrito en este repositorio puedes madarme un pull request :3
```