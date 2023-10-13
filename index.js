import Express from "express";
import { Worker } from "worker_threads";
import router from "./routes/Routes.js";
const app = Express();
const PORT = 4000;

app.use("/", router);

app.listen(PORT, (err, rep) => {
  if (err) {
    console.log("Server error", err);
  } else {
    console.log(`Success Server Running on Port :${PORT}`);
  }
});
