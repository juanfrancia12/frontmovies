import {
  URL_API_PUBLIC,
  ORDER_BY,
  KEY_PLUBLIC,
  HASH,
} from "@constants/global.constant"
import axios from "axios"

export const getComics = async (): Promise<unknown> => {
  const { data } = await axios.get(
    `${URL_API_PUBLIC as string}/comics?${ORDER_BY as string}ts=1&apikey=${
      KEY_PLUBLIC as string
    }&hash=${HASH as string}`
  )

  return data.data.results
}

export const getComic = async (id: number): Promise<unknown> => {
  const { data } = await axios.get(
    `${URL_API_PUBLIC as string}/comics/${id}?ts=1&apikey=${
      KEY_PLUBLIC as string
    }&hash=${HASH as string}`
  )

  return data.data.results
}
