export default function Home() {
  return (
    <div className="flex-1">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-tl from-zinc-900 to-[#3d3725] from-15% min-h-[480px] flex">
        <img
          src="https://www.lacostena.com.mx/media/uploads/Products/miel-abeja-360g_v2.png"
          alt="Tarro de miel"
          className="w-auto h-[400px]"
        />
        <article className="text-white text-center min-w-[250px] max-w-[550] w-[50%] m-auto">
          <h1 className="text-5xl font-bold text-amber-300">Honey</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur voluptatum maiores
            ipsam laboriosam fuga deleniti suscipit accusamus saepe sapiente quaerat doloribus, odit rem sit?
            Eaque pariatur assumenda delectus omnis! Aut non minima quisquam tenetur, repudiandae nulla cumque
            atque culpa in, consequatur vero exercitationem, maxime ipsam assumenda sit ea. Totam nam id quis
            consectetur maiores ad eum illum possimus at.
          </p>
        </article>
        <img
          src="https://www.lacostena.com.mx/media/uploads/Products/miel-abeja-360g_v2.png"
          alt="Tarro de miel"
          className="w-auto h-[400px]"
        />
      </section>
    </div>
  )
}
