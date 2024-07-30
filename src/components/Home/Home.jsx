import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="bg-[#1ABC9C]">
        <div className="container mx-auto text-white">
          <div className="flex flex-col justify-center items-center h-lvh">
            <img src="images/avataaars.svg" alt="logo.png"className='w-64' />
            <h2 className='font-bold text-4xl text-center pt-6 uppercase'>start Framework</h2>
            <div className="flex justify-center items-center py-3">
              <div class="bg-white h-1 w-20"></div>
              <span class="mx-2 font-bold text-lg "><i className='fas fa-star'></i></span>
              <div class="bg-white  h-1 w-20"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>

      </div>
    </div>
  )
}
