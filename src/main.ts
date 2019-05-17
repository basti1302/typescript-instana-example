import instana from "@instana/collector";

// Initialize instana by calling the init function (the default export of
// "@instana/collector") right away, before requiring other modules.
instana();

// Now, other modules can be imported.

// The file "./logger.ts" has its own set of import (Winston, among others),
// so it needs to be imported after Instana has been initalized.
import { initializeLogger } from "./logger";

import express from "express";

const logger = initializeLogger();

// Optional: You can tell @instana/collector to use your application's logger.
// Otherwise, the default Bunyan logger will be used.
instana.setLogger(logger);

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  logger.warn("This will appear in the logs tab.");
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log("  App is running at http://localhost:%d in %s mode", port, app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

export default server;
