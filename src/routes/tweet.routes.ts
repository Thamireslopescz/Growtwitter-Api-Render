import { Router } from "express";
import { TweetController } from "../controllers/tweet.controller";
import validaTokenMiddleware from "../middlewares/validaToken.middleware";

export const TweetRoutes = () => {
  const router = Router();
  const tweetController = new TweetController();

  router.get("/", validaTokenMiddleware, tweetController.listAll);

  router.post("/", validaTokenMiddleware, tweetController.create);

  router.put("/", validaTokenMiddleware, tweetController.update);

  router.delete(
    "/:id_tweet/:id_usuario",
    validaTokenMiddleware,
    tweetController.delete
  );

  return router;
};
