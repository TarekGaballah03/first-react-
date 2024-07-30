import React from 'react'

export default function Footer() {
  return (
 <div>
  <footer >
    <div className="bg-[#2C3E50] p-14 " >
      <div className="container mx-auto text-white text-center">
        <div className="flex justify-center py-8">
          <div className="md:w-1/3 sm:w-full">
            <h1 className="text-3xl font-bold mb-3">LOCATION</h1>
            <p>2215 John Daniel Drive </p>
            <p className='pt-2'> Clark, MO 65243</p>
          </div>
          <div className="md:w-1/3 sm:w-full">
            <h1 className=" text-3xl font-bold mb-3">AROUND THE WEB</h1>
              <span className=' text-xl'>
                <i class="fa-brands fa-facebook p-2 m-2 border rounded-full"></i>
                <i class="fa-brands fa-twitter p-2 m-2 border rounded-full"></i>
                <i class="fa-brands fa-linkedin-in p-2 m-2 border rounded-full"></i>
                <i class="fa-solid fa-globe p-2 m-2 border rounded-full"></i>
              </span>  
          </div>
          <div className="md:w-1/3 sm:w-full">
            <h1 className=" text-3xl font-bold mb-3">ABOUT FREELANCER</h1>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-[#1A252F] text-white text-center p-5'>
      <h3>Copyright © Your Website 2021</h3>
    </div>
  </footer>   
</div>
  )
}
