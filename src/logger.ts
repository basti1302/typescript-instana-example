import winston from "winston";
import { createLogger } from "winston";

export function initializeLogger() {
  const logger = createLogger({
    transports: [
      new winston.transports.Console({ level: process.env.NODE_ENV === "production" ? "error" : "info" }),
      new winston.transports.File({ filename: "app.log", level: "info" })
    ]
  });

  return logger;
}
