import { Request, Response, NextFunction, RequestHandler } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

import { IRegisterUser } from "./auth.interface";
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.service";

const registerUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userName, password, email }: IRegisterUser = req.body;
    const result = await AuthService.registerUser({
      userName,
      password,
      email,
    });

    sendResponse<IRegisterUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student created successfully!",
      data: result,
    });
  }
);

export const AuthController = {
  registerUser,
};
