const Servidor = require("./task");
const http = require("http");
const host = "localHost";
const port = 9000;

const mostrar = (req, res) => {
  res.setHeader("Content-type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(Servidor.Task));
};

const server = http.createServer(mostrar);
server.listen(port, host, () => {
  console.log(`El servidor esta corriendo en ${host} con la ruta ${port}`);
});
