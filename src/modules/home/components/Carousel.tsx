import Carousel from "@components/templates/carousel";
import { Characters } from "@interfaces/characters.interface";
import { getLastCarouselCharacters } from "@services/characters.service";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

const CarouselHome = () => {
  const { data, error, isLoading, isFetching } = useQuery(
    ["getLastCarouselCharacters"],
    getLastCarouselCharacters
  );

  if (isLoading) return <div>CARGANDO ...</div>;

  return (
    <div className="flex flex-col gap-8 my-8">
      <Carousel title="Characters" href="/characters">
        {data?.map((character: Characters) => {
          return (
            <SwiperSlide key={character.id}>
              <Link to={`/characters/${character.id}`}>
                <article className="group cursor-pointer rounded-lg overflow-hidden">
                  <img
                    src={character.thumbnail}
                    alt={character.name}
                    className="h-72 relative ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
                  />
                  <div className="bg-black/80 absolute top-0 left-0 right-0 bottom-0 grid place-content-center text-center py-3 px-5 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-80">
                    <h3 className="text-xl text-white font-bold">
                      {character.name}
                    </h3>
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
