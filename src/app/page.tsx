import Divider from '@/components/atoms/Divider'
import HoneyScheme from '@/components/molecules/HoneyScheme'
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
            <h2 className="text-xl sm:text-3xl font-bold text-amber-900">Miel de Abejas</h2>
            <h3 className="text-md sm:text-xl italic">100% Pura, Artesanal y Sostenible</h3>
          </span>
          <Image src="/honey.png" alt="Tarro de miel" width={200} height={200} className="m-auto" />
          <p className="text-xs sm:text-sm">
            La Miel de Abejas es un producto puro, artesanal y único, cosechado directamente en la Finca
            Apícola Pacunga, ubicada en el corazón del Cauca. Esta miel es el resultado del trabajo armonioso
            de abejas africanizadas que recolectan néctar de flores silvestres, sin intervención química ni
            alimentaciones artificiales.
          </p>
        </article>
        <article className="flex-1 text-white text-center mx-auto flex flex-col gap-4 w-full bg-zinc-950 min-h-[400px] relative p-4 pt-[116px]">
          <Divider className="text-bone absolute top-0 left-0 h-[100px]" />
          <h2 className="text-3xl text-amber-500 font-bold">Propiedades de Nuestra Miel 🍯</h2>
          <h3 className="italic text-sm">
            Descubre los beneficios únicos de la Miel de Abejas, una fuente de energía y nutrición natural.
          </h3>
          <HoneyScheme />
          <p className="max-w-[750px] mx-auto text-bone">
            Nuestra miel es una fuente de energía inmediata y saludable, ideal para deportistas, niños, y para
            endulzar tus momentos especiales de forma natural. Al no tener grasas ni colesterol, es perfecta
            para una alimentación balanceada. Call to Action: Añade un botón bajo
          </p>
          <p className="text-amber-500">Compra ahora y disfruta de sus beneficios</p>
        </article>
      </section>
      <footer className="bg-zinc-950 min-h-[200px] w-full flex p-4 text-white">
        <article className="text-center min-w-[250px] max-w-[550] w-[50%] m-auto">
          <Image src="/logo.webp" alt="Logo de la empresa" width={120} height={120} className="m-auto" />
          <h1 className="text-lg sm:text-xl font-bold">FINCA LA PACUNGA</h1>
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
