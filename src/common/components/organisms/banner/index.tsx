const Banner = () => {
  return (
    <div className="pt-20 lg:min-h-screen header--banner bg-no-repeat bg-cover bg-center bg-fixed text-white flex items-end">
      <div className="container mx-auto 2xl:px-40 px-2 py-4">
        <div className="text-center lg:text-start lg:w-3/5 flex flex-col gap-12 py-10 md:py-20">
          <h1 className="text-6xl font-bold text-gray-300">APP DE PELICULAS</h1>
          <span className="text-xl sm:w-3/5 lg:w-full mx-auto text-gray-400 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus
            incidunt, quibusdam quidem placeat natus, eveniet similique possimus
            deleniti sed voluptates voluptatem. At voluptatum mollitia ad
            eveniet, dolore fuga nisi?
          </span>
          <div className="flex gap-8 justify-center lg:justify-start items-center">
            <button className="min-w-[10rem] bg-red-600/80 text-white py-3 px-5 rounded-md border border-red-600 hover:bg-red-600 active:bg-red-500">
              Ver todo
            </button>
            <button className="min-w-[10rem] bg-gray-700/80 text-white py-3 px-5 rounded-md border border-white/80 hover:bg-gray-700 active:bg-gray-600">
              Recomiendame
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
