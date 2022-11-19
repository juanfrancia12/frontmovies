import { getCharacterById } from "@services/characters.service";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  // TODO: no vuelve a recargar los datos
  const { data, error, isLoading, isFetching } = useQuery(
    ["getCharacterById"],
    () => getCharacterById(Number(id)),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <div>CARGANDO ...</div>;

  console.log(data);

  return <div className="mt-20">Details</div>;
};

export default Details;
