import { token } from "@constants/global.constant"

export const getHeaders = (): {} => {
  const myHeaders = {
    "Content-Type": "application/json",
    Authorization: "",
    // image: "",
  }
  myHeaders.Authorization = `Bearer ${token as string}`
  return myHeaders
}
