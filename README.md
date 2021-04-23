# api-products-express
express, typescript, mongoose, nodemailer, react js, bcrypt

Proyecto de Sistemas Distribuidos, en dicha actividad se realiza una implementacion de comunicacion cliente servidor a traves de sockets server.

Para dicha actividad implemente un Servidor tipo Api Rest, el cual esta a la escucha de cualquier peticion que se desee realizar de parte de
cualquier cliente (web, mobil, desktop). ademas esta a la escucha de cualquier cambio con exito que se realize en la base de datos. En dicho servidor
se definieron algunos parametros se seguridad como autenticacion y autorizacion.

Base de Datos: Mongo DB
Lenguaje de programacion: Javascript

##Las entidades de Base de Datos son:

Roles = {
  _id: string,
  name: string
}

Users = {
  _id: string,
  name: string,
  username: string,
  password: string,
  _role: string
}

Product = {
  _id: string,
  title: string,
  description: string,
  stock: number,
  price: number,
  img: string,
  _created_by: string
}

##Se desarrollo con:

2. Node
3. Express js
4. Bcryp
5. Mongoose
6. Nodemailer
7. jwt

##Se Implementaron:

1. Servicio de envio de correo  
2. Servicio Api Rest 
3. Servicio Socket io  
4. Auenticacion y Autorizacion (jwt)
5. Servicio de base de datos Mongo
6. Cliente Web Fue Realizado con React JS pero no se encuentra completo debido a falta de tiempo.

##Aplica:
 1. encryptacion de contraseña
 2. autenticacion a traves de tokens
 3. permisos de usuarios segun Rol y url de peticion

##Programado con las siguientes estructuras:
1. Patron repositorio
2. Patron servicio
3. Patron inyeccion de dependencias
4. ORM para manipulacion de base de datos
5. MVC (rutas, middlewares y controladores)


#Detalles de la programacion:

-> Un sistema de rutas se encarga de capturar las peticiones que los clientes realiza.
-> A traves de middlewares se validan credenciales del usuario y permisos para el recurso que solicita.
-> Manipular la peticion respondiendo con multiples codigos de respuesta, tales como:
  NOT FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  SUCCESS: 200,
  BAD REQUEST: 400,
  ERROR SERVER: 500
-> el manejar solicita a un servicio algunas acciones segun la peticion que realiza el usuario.
-> el repositorio se encarga de buscar, insertar, editar e incluso borrar segun parametros de la solicitud

Detalles de Api Rest:
Nota: Hay recursos privados y publicos

  --- Endpoints:

url                                 method
localhost:4000/api/auth/signup      :post   //agregar un usuario          :privado
localhost:4000/api/auth/signin      :post   //iniciar sesion              :publico

localhost:4000/api/role/create      :post   //crear un nuevo rol          :privado
localhost:4000/api/role/all         :get    //obtener todos los roles de usuario  :privado

localhost:4000/api/products/all     :get    //obtener los productos     :public
localhost:4000/api/products/create  :post   //crear un producto         :privado
localhost:4000/api/products/:id     :post   //actualizar un producto    :privado
localhost:4000/api/products/getMyProducts   :post //optener los productos que a insertado el usuario que inicio sesion  :privado


localhost:4000/api/shop/newShop   :post   //recibo de proforma de la compra realizada :privado    
