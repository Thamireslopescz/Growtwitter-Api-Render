import { Request, Response } from "express";
import { ResponseDto } from "../dtos/response.dto";
import { v4 as tokenGenerate } from "uuid";
import usuarioService from "../services/usuario.service";

class AuthController {
  public async create(req: Request, res: Response) {
    const { username, senha } = req.body;

    const usuario = await usuarioService.TrazNomeSenha(username, senha);

    if (!usuario) {
      return res.status(401).send({ message: "usuario ou senha incorretos" });
    }

    const token = tokenGenerate();
    const update = await usuarioService.update({ ...usuario, token: token });

    const response: ResponseDto = {
      code: 200,
      message: "Login realizado com Sucesso!",
      data: { token: token },
    };

    if (update.code === 200) {
      return res.status(response.code).send(response);
    }
  }

  public async delete(req: Request, res: Response) {
    const { token } = req.headers;

    const usuario = await usuarioService.TrazToken(token as string);

    if (usuario) {
      const response: ResponseDto = {
        code: 200,
        message: "Logout realizado com sucesso!",
      };

      await usuarioService.update({ ...usuario, token: null });

      return res.status(response.code).send(response);
    }

    const response: ResponseDto = {
      code: 404,
      message:
        "Logout não Realizado! (Token não informado ou invalido no header!)",
    };

    return res.status(response.code).send(response);
  }
}

export default AuthController;