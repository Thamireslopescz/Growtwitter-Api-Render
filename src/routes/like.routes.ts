import express from "express";
import { LikeController } from "../controllers/like.controller"; 

export const LikeRoutes = () => {
  const router = express.Router();
  const likeController = new LikeController();

  
  router.get("/", likeController.listAll);

  router.post("/", likeController.create);

  router.delete("/:id_like/:id_usuario", likeController.delete);

  return router;
};
