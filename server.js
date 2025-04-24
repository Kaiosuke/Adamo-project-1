import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("", router);
server.listen(process.env.VITE_APP_PORT || 3001, () => {
  console.log("JSON Server is running");
});
