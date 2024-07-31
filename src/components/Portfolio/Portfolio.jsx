import React from 'react'

export default function Portfolio() {
  return (
    <div>
       <div className=" h-lvh  container mx-auto pt-24">
       <header>
          <h2 className='font-bold text-4xl text-center pt-6 uppercase'>Portfolio component</h2>
            <div className="flex justify-center items-center py-3">
              <div class="bg-black h-1 w-20"></div>
              <span class="mx-2 font-bold text-lg "><i className='fas fa-star'></i></span>
              <div class="bg-black  h-1 w-20"></div>
            </div>
          </header>
       </div>
    </div>
  )
}
