// export const getToken = "token" || false;
export const getToken: string | null =
  window.localStorage.getItem("visionaryAPP")
export const setToken = (token: string): void =>
  localStorage.setItem("visionaryAPP", token)
export const removeToken = (): void => localStorage.removeItem("visionaryAPP")
