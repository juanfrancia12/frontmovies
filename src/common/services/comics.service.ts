import {
  URL_API_PUBLIC,
  ORDER_BY,
  KEY_PLUBLIC,
  HASH,
} from "@constants/global.constant";
import axios from "axios";

export const getComics = async () => {
  const { data } = await axios.get(
    `${URL_API_PUBLIC}/comics?${ORDER_BY}ts=1&apikey=${KEY_PLUBLIC}&hash=${HASH}`
  );

  return data.data.results;
};

export const getComic = async (id: number) => {
  const { data } = await axios.get(
    `${URL_API_PUBLIC}/comics/${id}?ts=1&apikey=${KEY_PLUBLIC}&hash=${HASH}`
  );

  return data.data.results;
};
