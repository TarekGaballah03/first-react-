import React from 'react'

export default function About() {
  return (
    <div>
      <section className="bg-[#1ABC9C]">
        <div className="container mx-auto text-white">
          <div className="flex flex-col justify-center items-center h-lvh">
          <header>
          <h2 className='font-bold text-4xl text-center pt-6 uppercase'>about component</h2>
            <div className="flex justify-center items-center py-3">
              <div className="bg-white h-1 w-20"></div>
              <span className="mx-2 font-bold text-lg "><i className='fas fa-star'></i></span>
              <div className="bg-white  h-1 w-20"></div>
            </div>
          </header>
           <main>
           <div className="grid grid-cols-1 md:grid-cols-2 ">
              <p className='sm:mb-2 '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
           </main>
          </div>
        </div>

      </section>

    </div>
  )
}
