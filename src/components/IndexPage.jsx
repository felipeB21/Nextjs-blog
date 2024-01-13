import LastBlogsShow from "./LastBlogsShow";
import Weather from "./Weather";

export default function IndexPage() {
  return (
    <>
      <main className="mt-10 grid grid-cols-[620px_minmax(360px,_1fr)_100px] gap-5">
        <div className="bg-neutral-700 p-10 rounded-xl">
          <h1 className="text-4xl font-bold">¡Bienvenidos a mi Blog!</h1>
          <p className="text-lg max-w-[620px] mt-2 text-gray-200">
            ¡Hola! Soy un programador Full Stack apasionado que se dedica a
            explorar y aprender nuevas tecnologías e información cada día.
          </p>
        </div>
        <div>
          <Weather />
        </div>
      </main>
      <LastBlogsShow />
    </>
  );
}
