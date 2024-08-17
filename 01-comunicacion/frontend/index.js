const http =  require("http");
const app =  require("./app");

const server = http.createServer(app);

const port = +process.env.PORT || 19010    //se le puso el + para convertir el string a numero

server.listen(port, () => 
  console.log(`Ejecutando el frontend en el puerto ${port}`)
);