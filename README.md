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
    let {getUsuarios} = require('./usuarios/usuario')

    console.log('Inicio de programa')

    let usuario1 = getUsuariosSync(1)
    console.log('Usuario1 : ',usuario1)

    let usuario2 = getUsuariosSync(2)
    console.log('Usuario2 : ',usuario2)

    console.log('Hola mundo !!')
```

***Output***

```sh
    $ node sincronico
    > Inicio de programa
    > Usuario1 : {id: 1, nombre: 'Usuario1'}
    > Usuario2 : {id: 2, nombre: 'Usuario2'}
    > Hola mundo !!
```

**Modelo asincronico(Non-blocking) :**

```javascript
    let {getUsuarios} = require('./usuarios/usuario')

    console.log('Inicio de programa')

    getUsuarios(1,(usuario1)=>{
        console.log(usuario1)
    })

    getUsuarios(2,(usuario2)=>{
        console.log(usuario2)
    })

    console.log('Hola mundo !!')
```

***Output***

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

> Nodemon es una herramienta  que ayuda a desarrollar aplicaciones basadas en nodejs .

> Reiniciando automaticamente la aplicacion de node cuando se detectan cambios en el directorio

```javascript
    // destructuración de objetos

    let deadpool = {
        nombre : 'Wade',
        apellido : 'Wilson',
        poder : 'regeneración'
    }

    // let {nombre,apellido,poder} = deadpool;
    // console.log(nombre,apellido,poder);

    let {nombre: nom,apellido : ape,poder : po} = deadpool;
    console.log(nom,ape,po);
```

## **Event Loop**

> Javascript poseé un modelo de concurrencia basado en un 'loop de eventos' .Este <br>
> modelo es bastante diferente al modelo de otros lenguajes como c o java.