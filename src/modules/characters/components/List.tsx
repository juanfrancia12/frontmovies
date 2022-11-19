import { Characters } from "@interfaces/characters.interface"
import { getCharacters } from "@services/characters.service"
import React from "react"
import { useQuery } from "react-query"

const List = (): JSX.Element => {
  const { data, error, isLoading } = useQuery(["getCharacters"], getCharacters)

  if (isLoading) return <div>CARGANDO ...</div>
  if (!isLoading && Boolean(error)) return <div>ERROR ...</div>

  return (
    <div>
      {data.map((character: Characters) => {
        return <article key={character.id}>{character.name}</article>
      })}
    </div>
  )
}

export default List
