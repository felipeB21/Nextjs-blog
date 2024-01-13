import Link from "next/link";

export default function BlogsLinks() {
  const blogLinks = [
    {
      id: 1,
      name: "La programacion ya no es lo que era antes",
      desc: "Hablemos un poco sobre cómo ha cambiado la programación y cómo ha crecido la oferta de trabajo, llegando al punto en el que muchos programadores no pueden encontrar trabajo.",
      href: "/la-programacion-no-es-lo-que-era-antes",
    },
    {
      id: 2,
      name: "¿Porque Astro?",
      desc: "Te daré ejemplos y razones para utilizar Astro en tus páginas web estáticas.",
      href: "/porque-astro",
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
            <div className="py-2">
              <p>{blogs.desc}</p>
            </div>
            <div className="py-1">
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
