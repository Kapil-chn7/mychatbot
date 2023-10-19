import { Router } from "express";

const router = Router();

router.get("/query", (req, res) => {
  if (!req.query) {
    res.send(400);
  } else {
    console.log(
      "this is the request data, what could change sssssss",
      req.query.query
    );
  }
});
export default router;
