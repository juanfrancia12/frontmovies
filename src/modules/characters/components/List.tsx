import { Characters } from "@interfaces/characters.interface";
import { getCharacters } from "@services/characters.service";
import React from "react";
import { useQuery } from "react-query";

const List = () => {
  const { data, error, isLoading, isFetching } = useQuery(
    ["getCharacters"],
    getCharacters
  );

  if (isLoading) return <div>CARGANDO ...</div>;

  return (
    <div>
      {data.map((character: Characters) => {
        return <article>{character.name}</article>;
      })}
    </div>
  );
};

export default List;
