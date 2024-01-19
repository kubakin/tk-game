import { AuthResponse } from "./auth.result";
import { authApiInstance } from "./auth.base";

export const login = async (data: { phone: string }): Promise<AuthResponse> => {
  const rs = await authApiInstance.post<AuthResponse>("login", data);
  return rs.data;
};

export const register = async (data: {
  phone: string;
  name: string;
}): Promise<AuthResponse> => {
  const rs = await authApiInstance.post<AuthResponse>("register", data);
  return rs.data;
};
