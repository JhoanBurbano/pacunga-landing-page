import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex-1 flex flex-col max-w-[1280px] mx-auto">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-tl from-zinc-900 to-[#3d3725] from-15% min-h-max">
        <Image
          src="/hero.jpg"
          alt="Tarro de miel"
          className="h-full w-full"
          width={1366}
          height={768}
          layout="responsive"
          priority
        />
      </section>
      <section className="bg-bone min-h-[700px] flex flex-1 flex-col">
        <article className="text-black text-center min-w-[250px] max-w-[550] w-[50%] mx-auto flex flex-col gap-4">
          <span>
            <h2 className="text-3xl font-bold text-amber-900">Miel de Abejas</h2>
            <h3 className="text-xl italic">100% Pura, Artesanal y Sostenible</h3>
          </span>
          <Image src="/honey.png" alt="Tarro de miel" width={200} height={200} className="m-auto" />
          <p className="text-sm">
            La Miel de Abejas es un producto puro, artesanal y único, cosechado directamente en la Finca
            Apícola Pacunga, ubicada en el corazón del Cauca, Colombia. Esta miel es el resultado del trabajo
            armonioso de abejas africanizadas que recolectan néctar de flores silvestres, sin intervención
            química ni alimentaciones artificiales.
          </p>
        </article>
      </section>
      <footer className="bg-zinc-950 min-h-[200px] w-full flex p-4 text-white">
        <article className="text-center min-w-[250px] max-w-[550] w-[50%] m-auto">
          <Image src="/logo.webp" alt="Logo de la empresa" width={100} height={100} className="m-auto" />
          <h1 className="text-xl font-bold text-amber-900">FINCA LA PACUNGA</h1>
          <p className="text-xs">
            {/* Copyright */}
            All rights reserved. Finca La Pacunga 2025. &copy;
          </p>
        </article>
      </footer>
      <a
        className="bg-green-500 text-white fixed bottom-10 right-10 p-2 rounded-full animate-bounce"
        href="https://api.whatsapp.com/send?phone=573128894825&text=Hola%20%F0%9F%91%8B%2C%20quiero%20m%C3%A1s%20informacion.%20%F0%9F%90%9D%F0%9F%8D%AF"
        target="_blank"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  )
}
