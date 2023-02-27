import Router from "express";
import { check } from "express-validator";

import authController from "../controller/authController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
// import authMiddleware from "../middleware/authMiddleware";

const authRouter = new Router();

authRouter.post(
  "/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 10 символов"
    ).isLength({ min: 4, max: 10 }),
  ],
  authController.registration
);
authRouter.post("/login", authController.login);

export default authRouter;
