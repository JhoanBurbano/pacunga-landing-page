import Divider from '@/components/atoms/Divider'
import Map from '@/components/atoms/Map'
import HoneyScheme from '@/components/molecules/HoneyScheme'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

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
        <article className="text-black text-center min-w-[250px] w-[50%] mx-auto flex flex-col gap-4 min-h-[600px] h-full justify-center">
          <span>
            <h2 className="text-xl sm:text-3xl font-bold text-amber-900">Miel de Abejas</h2>
            <h3 className="text-md sm:text-xl italic">100% Pura, Artesanal y Sostenible</h3>
          </span>
          <Image src="/honey.png" alt="Tarro de miel" width={200} height={200} className="mx-auto" />
          <p className="text-xs sm:text-sm">
            La Miel de Abejas es un producto puro, artesanal y único, cosechado directamente en la Finca
            Apícola Pacunga, ubicada en el corazón del Cauca. Esta miel es el resultado del trabajo armonioso
            de abejas africanizadas que recolectan néctar de flores silvestres, sin intervención química ni
            alimentaciones artificiales.
          </p>
        </article>
        <article className=" text-white text-center mx-auto flex flex-col gap-4 w-full bg-zinc-950 min-h-[800px] relative p-4 py-[126px] h-full justify-center">
          <Divider className="text-bone absolute top-0 left-0 h-[100px]" />
          <h2 className="text-3xl text-amber-500 font-bold">Propiedades de Nuestra Miel 🍯</h2>
          <h3 className="italic text-sm">
            Descubre los beneficios únicos de la Miel de Abejas, una fuente de energía y nutrición natural.
          </h3>
          <HoneyScheme />
          <p className="max-w-[750px] mx-auto text-bone">
            Nuestra miel es una fuente de energía inmediata y saludable, ideal para deportistas, niños, y para
            endulzar tus momentos especiales de forma natural. Al no tener grasas ni colesterol, es perfecta
            para una alimentación balanceada.
          </p>
          <p className="bg-amber-500 text-black font-bold py-4">Compra ahora y disfruta de sus beneficios</p>
        </article>
        <article className="min-w-[250px] gap-4 min-h-[600px] p-8 pt-[126px] relative">
          <Divider className="text-black absolute top-0 left-0 h-[100px] w-full" />
          <div className="text-black text-center  mx-auto flex flex-col h-full justify-center ">
            <span>
              <h2 className="text-xl sm:text-3xl font-bold text-amber-900">Contáctanos</h2>
              <h3 className="text-md sm:text-xl italic">Aquí está nuestra informacion de contacto</h3>
            </span>
            <main className="flex flex-col gap-4 md:flex-row">
              <Image
                src="/image-farm.png"
                alt="Tarro de miel"
                width={400}
                height={400}
                objectFit="contain"
                className="mx-auto"
              />
              <section className="grid grid-cols-1 gap-4 min-w-[300px] text-left  bg-black rounded-xl text-white p-4 w-[300px] mx-auto md:w-min  ">
                <article>
                  <h3 className="text-lg font-bold text-yellow-500">Dirección</h3>
                  <p className="text-xs text-orange-300">Finca La Pacunga, Sucre, Cauca, Colombia</p>
                </article>
                <article>
                  <h3 className="text-lg font-bold text-yellow-500">Teléfono</h3>
                  <p className="text-xs text-orange-300">+57 312 889 4825</p>
                </article>
                <article>
                  <h3 className="text-lg font-bold text-yellow-500">Correo Electrónico</h3>
                  <p className="text-xs text-orange-300">
                    <a href="mailto:zunigaleonairo@gmail.com">zunigaleonairo@gmail.com</a>
                  </p>
                </article>
                <article>
                  <h3 className="text-lg font-bold text-yellow-500">Redes Sociales</h3>
                  <p className="text-xs text-orange-300">@FincaLaPacunga</p>
                  <span className="flex gap-4 mt-2">
                    <a
                      href="https://www.facebook.com/FincaLaPaCunga"
                      target="_blank"
                      className="text-sky-500"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/FincaLaPaCunga"
                      target="_blank"
                      className="text-pink-600"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=573128894825&text=Hola%20%F0%9F%91%8B%2C%20quiero%20m%C3%A1s%20informacion.%20%F0%9F%90%9D%F0%9F%8D%AF"
                      target="_blank"
                      className="text-green-600"
                    >
                      <FaWhatsapp size={24} />
                    </a>
                  </span>
                </article>
              </section>
            </main>
            <p className="text-xl sm:text-2xl font-bold text-red-600">¿Como llegar?</p>
            <Map />
          </div>
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
          <span className="flex gap-4 mt-2 justify-center">
            <a href="https://www.facebook.com/FincaLaPaCunga" target="_blank">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/FincaLaPaCunga" target="_blank">
              <FaInstagram size={18} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=573128894825&text=Hola%20%F0%9F%91%8B%2C%20quiero%20m%C3%A1s%20informacion.%20%F0%9F%90%9D%F0%9F%8D%AF"
              target="_blank"
            >
              <FaWhatsapp size={18} />
            </a>
          </span>
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
