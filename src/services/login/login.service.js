import { api } from "../../config/axios";

const postLogin = async (email, password) => {
  const body = { email: email, password: password };
  const { data, status } = await api.post("voluntario/login", body);
  return { data, status };
};

const postRegister = () => {};

export const LoginServices = {
  postLogin,
  postRegister,
};
