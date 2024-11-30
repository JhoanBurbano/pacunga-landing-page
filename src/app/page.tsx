import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex-1">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-tl from-zinc-900 to-[#3d3725] from-15% min-h-min max-w-[1280px] flex mx-auto">
        {/* <img src="/hero.jpg" alt="Tarro de miel" className="h-full w-full" /> */}
        <Image
          src="/hero.jpg"
          alt="Tarro de miel"
          className="h-full w-full"
          objectFit="cover"
          width={1366}
          height={768}
        />
      </section>
      <section className="bg-bone min-h-[700px] max-w-[1280px] flex mx-auto">
        <article className="text-black text-center min-w-[250px] max-w-[550] w-[50%] m-auto">
          <h1 className="text-5xl font-bold text-amber-900">100% {`\n`} NATURAL</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur voluptatum maiores
            ipsam laboriosam fuga deleniti suscipit accusamus saepe sapiente quaerat doloribus, odit rem sit?
            Eaque pariatur assumenda delectus omnis! Aut non minima quisquam tenetur, repudiandae nulla cumque
            atque culpa in, consequatur vero exercitationem, maxime ipsam assumenda sit ea. Totam nam id quis
            consectetur maiores ad eum illum possimus at.
          </p>
        </article>
      </section>
      <footer className="bg-gradient-to-tl from-zinc-900 to-[#3d3725] from-15% min-h-[200px] max-w-[1280px] flex mx-auto">
        <article className="text-black text-center min-w-[250px] max-w-[550] w-[50%] m-auto">
          <h1 className="text-5xl font-bold text-amber-900">100% {`\n`} NATURAL</h1>
          <Image src="/logo.webp" alt="Logo de la empresa" width={200} height={200} className="m-auto" />
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur voluptatum maiores
            ipsam laboriosam fuga deleniti suscipit accusamus saepe sapiente quaerat doloribus, odit rem sit?
            Eaque pariatur assumenda delectus omnis! Aut non minima quisquam tenetur, repudiandae nulla cumque
            atque culpa in, consequatur vero exercitationem, maxime ipsam assumenda sit ea. Totam nam id quis
            consectetur maiores ad eum illum possimus at.
          </p>
        </article>
      </footer>
    </div>
  )
}
