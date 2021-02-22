import { RequestHandler } from 'express';
import { registerUseCase } from '../../use-cases/register.use-case';

export const registerHandler: RequestHandler = async (req, res) => {
  const { email, firstName, lastName, password, middleName } = req.body as any;

  await registerUseCase(
    {
      email,
      firstName,
      middleName,
      lastName,
      password,
    },
    { req, res },
  );

  res.send({ success: true });
};
