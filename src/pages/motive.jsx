import React from 'react'
import Image from "next/image";

const Motive = (props) => {
  return (
    
    <div className="bg-primary-200 md:w-1/3 mt-7 p-4 h-1/6 md:p-4 rounded-3xl md:h-max">
 {(props.imsize && props.imsize==="l") ?<Image
          width={200}
          height={200}
          src={`/assets/${props.im}.png`}
          alt="PlaceXP"
        />:  <Image
          width={70}
          height={80}
          src={`/assets/${props.im}.png`}
          alt="PlaceXP"
        />}
      <h2 className='md:text-2xl  text-primary-600 font-extrabold md:mb-9 '>{props.name}</h2>
     {props.des?<p>{props.des}</p> : <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis blanditiis molestias tenetur aspernatur maxime necessitatibus soluta unde rem minus minima, consectetur debitis delectus suscipit alias, libero quos molestiae autem fuga.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus aliquid tempore eum tempora veritatis repellendus iste ab reprehenderit molestias, quam error deserunt quia omnis accusantium, facilis possimus est et. </p>}
    </div>
 
  )
}

export default Motive
