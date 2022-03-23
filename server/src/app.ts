import express from 'express';
const cors = require("cors");
import routes from './routes';
var corsOptions = {
  origin: "*"
};

class App {
  
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors(corsOptions));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

