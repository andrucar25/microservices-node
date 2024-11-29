import dotenv from "dotenv";

import app from "./app";
import ServerBootstrap from "./bootstrap/server";
import logger from "./core/utils/logger";
import RabbitMQBootstrap from './bootstrap/rabbitmq';

dotenv.config();

const server = new ServerBootstrap(app);
const rabbitmq = new RabbitMQBootstrap();

(async () => {
  try {
    const listPromises = [
      server.initialize(),
      rabbitmq.initialize()
    ];

    await Promise.all(listPromises);
  } catch (error) {
    logger.error(error);
    server.close();
  }
})();