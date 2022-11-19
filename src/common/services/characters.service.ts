import {
  URL_API_PUBLIC,
  ORDER_BY,
  KEY_PLUBLIC,
  HASH,
  //   LAST_LIMIT,
  LAST_LIMIT_CAROUSEL,
  IMAGE_NOT_AVAILABLE,
} from "@constants/global.constant";
import { Characters, CharactersItem } from "@interfaces/characters.interface";
import { Character, CharacterItem } from "@interfaces/charactersId.interface";
import axios from "axios";

// TODO: retorna todos los elementos
// * se valida que todas tengan imágenes
export const getCharacters = async () => {
  const { data } = await axios.get(
    `${URL_API_PUBLIC}/characters?${ORDER_BY}ts=1&apikey=${KEY_PLUBLIC}&hash=${HASH}`
  );

  const fillData = await data.data.results.filter(
    (character: CharactersItem) =>
      character.thumbnail.path.split("/").pop() !== IMAGE_NOT_AVAILABLE
  );

  return fillData;
};

// TODO: retorna el ultimo elemento
// export const getLastCharacters = async () => {
//   const { data } = await axios.get(
//     `${URL_API_PUBLIC}/characters?${ORDER_BY}${LAST_LIMIT}ts=1&apikey=${KEY_PLUBLIC}&hash=${HASH}`
//   );

//   const fillData = await data.data.results.filter(
//     (character: CharacterItem) =>
//       character.thumbnail.path.split("/").pop() !== IMAGE_NOT_AVAILABLE
//   );

//   return fillData;
// };

// TODO: retorna los 20 ultimos elementos que se mostraran en el carousel
// * se valida que todas tengan imágenes
export const getLastCarouselCharacters = async (): Promise<Characters[]> => {
  const { data } = await axios.get(
    `${URL_API_PUBLIC}/characters?${ORDER_BY}${LAST_LIMIT_CAROUSEL}ts=1&apikey=${KEY_PLUBLIC}&hash=${HASH}`
  );

  const fillData = await data.data.results
    .filter(
      (character: CharactersItem) =>
        character.thumbnail.path.split("/").pop() !== IMAGE_NOT_AVAILABLE
    )
    .map((item: CharactersItem) => {
      const character: Characters = {
        id: item.id,
        name: item.name,
        thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      };

      return character;
    });

  return fillData;
};

// TODO: retorna el elemento según su id
export const getCharacterById = async (id: number): Promise<Character[]> => {
  const { data } = await axios.get(
    `${URL_API_PUBLIC}/characters/${id}?ts=1&apikey=${KEY_PLUBLIC}&hash=${HASH}`
  );

  const fillData = await data.data.results.map((item: CharacterItem) => {
    const character: Character = {
      id: item.id,
      name: item.name,
      thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      description: item.description,
    };

    return character;
  });

  return fillData;
};
