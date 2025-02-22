import React from 'react'
import Image from "next/image";

const Motive = (props) => {
  return (
    
    <div className="group my-2 w-full animate-fade-in-down sm:w-96 px-6 py-5 flex flex-col justify-between items-center rounded-lg shadow-md border-2 border-primary-200 hover:border-transparent duration-300 hover:rounded-xl hover:shadow-primary-600">
 {(props.imsize && props.imsize==="l") ?<Image
          width={200}
          height={200}
          src={`/assets/members/${props.im}.png`}
          alt="PlaceXP"
          placeholder='blur'
          blurDataURL='https://htmlcolorcodes.com/assets/images/colors/light-purple-color-solid-background-1920x1080.png'
        />:  <Image
          width={70}
          height={80}
          placeholder='blur'
          src={`/assets/${props.im}.png`}
          alt="PlaceXP"
         
          blurDataURL='https://htmlcolorcodes.com/assets/images/colors/light-purple-color-solid-background-1920x1080.png'
        />}
      <h2 className='md:text-2xl  text-primary-600 font-extrabold md:mb-9 '>{props.name}</h2>
     {props.des?<p>{props.des}</p> : <p> </p>}
    </div>
 
  )
}

export default Motive
