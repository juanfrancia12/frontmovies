import { getCharacterById } from "@services/characters.service"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

const Details = (): JSX.Element => {
  const { id } = useParams()
  // TODO: no vuelve a recargar los datos
  const { data, error, isLoading } = useQuery(
    ["getCharacterById"],
    async () => await getCharacterById(Number(id)),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading) return <div>CARGANDO ...</div>
  if (!isLoading && Boolean(error)) return <div>ERROR ...</div>

  return <div className="mt-20">{JSON.stringify(data)}</div>
}

export default Details
