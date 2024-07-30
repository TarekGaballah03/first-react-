import React from 'react'

export default function About() {
  return (
    <div>
      <div className="bg-[#1ABC9C]">
        <div className="container mx-auto text-white">
          <div className="flex flex-col justify-center items-center h-lvh">
            <h2 className='font-bold text-4xl text-center pt-6 uppercase'>about component</h2>
            <div className="flex justify-center items-center py-3">
              <div class="bg-white h-1 w-20"></div>
              <span class="mx-2 font-bold text-lg "><i className='fas fa-star'></i></span>
              <div class="bg-white  h-1 w-20"></div>
            </div>
            <div className="flex flex-wrap gap-x-4">
              <p className='w-full sm:w-full md:w-1/2 lg:w-1/2 '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p className='w-full sm:w-full md:w-1/2 lg:w-1/2 '>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
