import { Router } from "express";
import validaTokenMiddleware from "../middlewares/validaToken.middleware";
import { RetweetController } from "../controllers/retweet.controller";

export const RetweetRoutes = () => {
  const router = Router();
  const retweetController = new RetweetController();

  
  router.get("/", validaTokenMiddleware, retweetController.listAll);

  router.post("/", validaTokenMiddleware, retweetController.create);

  router.put("/", validaTokenMiddleware, retweetController.update);

  router.delete(
    "/:id_retweet/:id_usuario",
    validaTokenMiddleware,
    retweetController.delete
  );

  return router;
};
