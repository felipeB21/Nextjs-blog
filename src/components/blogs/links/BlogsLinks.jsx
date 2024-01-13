import Image from "next/image";
import Link from "next/link";
import programador from "../../../../public/programador.jpg";
import astroImg from "../../../../public/astro.jpg";
import styleX from "../../../../public/stylex.png";

export default function BlogsLinks() {
  const blogLinks = [
    {
      id: 1,
      name: "La programacion ya no es lo que era antes",
      desc: "Hablemos un poco sobre cómo ha cambiado la programación y cómo ha crecido la oferta de trabajo, llegando al punto en el que muchos programadores no pueden encontrar trabajo.",
      href: "/la-programacion-no-es-lo-que-era-antes",
      img: programador,
    },
    {
      id: 2,
      name: "¿Porque utilizar Astro para tus paginas webs?",
      desc: "Te daré ejemplos y razones para utilizar Astro en tus páginas web estáticas.",
      href: "/porque-astro",
      img: astroImg,
    },
    {
      id: 3,
      name: "¿StyleX sera una gran revolucion en la UI?",
      desc: "Descubre el potencial innovador de Stylex y su impacto transformador en la interfaz de usuario (UI). ¿Estamos ante una revolución en el diseño web?",
      href: "/stylex",
      img: styleX,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mt-3">
        {blogLinks.map((blogs) => (
          <div
            key={blogs.id}
            className="bg-neutral-700 p-5 rounded-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold">{blogs.name}</h3>
            </div>

            <div className="group relative mt-3 w-[450px] h-[400px] object-cover shadow-xl">
              <Image
                className="w-auto h-auto rounded-xl object-cover group-hover:opacity-40 duration-150"
                src={blogs.img}
                alt="Img"
                layout="fill"
              />
              <div className="absolute bottom-0 rounded-b-xl p-3 bg-neutral-950 w-full h-[18vh] bg-opacity-90">
                <p className="max-w-[300px] font-medium">{blogs.desc}</p>
              </div>
            </div>

            <div className="mt-4">
              <Link href={`blogs/${blogs.href}`}>
                <button className="bg-neutral-900 py-1 px-4 rounded-md hover:bg-neutral-950">
                  Ir al blog
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
