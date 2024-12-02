import React from 'react'

const Map = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-black relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4906.267763873977!2d-76.92123605827447!3d2.029332186980312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMDEnNDUuNiJOIDc2wrA1NScxMC45Ilc!5e1!3m2!1ses!2sco!4v1733114426474!5m2!1ses!2sco"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <section className="absolute top-0 left-0 p-4">
        <article className="bg-white w-max min-w-[200px]">
          <p className="font-bold text-lg">Finca La Pacunga</p>
          <p className="text-xs">Sucre, Cauca, Colombia</p>
        </article>
      </section>
    </div>
  )
}

export default Map

/**<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4906.267763873977!2d-76.92123605827447!3d2.029332186980312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMDEnNDUuNiJOIDc2wrA1NScxMC45Ilc!5e1!3m2!1ses!2sco!4v1733114426474!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
