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

## **¿Que caché de un procesador?**

## **¿Que caché en el navegador?**

Es una memoria que tiene el navedor donde guarda los assets (imagenes ,js ,css , etc)

## **Problemas del caché del navegador**


[Fuente](https://medium.com/datadriveninvestor/cookies-vs-local-storage-2f3732c7d977)

[Fuente](https://stackoverflow.com/questions/3220660/local-storage-vs-cookies)