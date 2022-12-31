import React from 'react'
import PageLayout from "../common/layout/PageLayout";
import Motive from './motive';

const Aboutus = () => {
  return (
    <PageLayout>
      <div>
        <div className='text-center text-4xl text-primary-900 font-bold'>About us</div>

        <div className='md:flex text-center md:space-x-8 md:mt-20 ' >
        <Motive
          name="OUR MOTIVE"
          im="Motive"
        
        />
        <Motive
          name="ABOUT PLACE XP"
          im="Group"
        />
        <Motive
          name="UPCOMING PROGRAM"
          im="graph"
        />
         </div>

</div>
<div>
        <div className='text-center text-4xl text-primary-900 font-bold'>Who are we ? </div>
        <br/> 
        <div className='text-center text-2xl text-primary-900 font-bold'>Advisory Members </div>

        <div className='md:flex md:flex-wrap md:justify-center text-center md:space-x-8 md:mt-20 ' >
        <Motive
          name="Pooja Sreekumar"
          im="null"
          des="Former Club President"
          imsize="l"
        
        />
         <Motive
          name="Jennifer Clemens"
          im="null"
          des="Former Club Vice-President"
          imsize="l"
        />
          <Motive
          name="Akhil Rudrawar "
          im="null"
          des="Former Club Vice-President"
          imsize="l"
        />
             <Motive
          name="Shivansh Atre"
          im="null"
          des="Former Club lead"
          imsize="l"
        />
             <Motive
          name="Sruthi Nayagi "
          im="null"
          des="Former Club lead"
          imsize="l"
        />
          <Motive
          name="Disha Raina "
          im="null"
          des="Former Club lead"
          imsize="l"
        />
         </div>
         <br/> 
        <div className='text-center text-2xl text-primary-900 font-bold'>Board Members </div>

        <div className='md:flex md:flex-wrap md:justify-center text-center md:space-x-8 md:mt-20 ' >
        <Motive
          name="Akshaya Ramachandran"
          im="null"
          des="Club President"
          imsize="l"
        />
         <Motive
          name="Maharnav"
          im="null"
          des="Club Vice-President"
          imsize="l"
        />
          <Motive
          name="Avisi Sachan "
          im="null"
          des="Club Vice-President"
          imsize="l"
        />
             <Motive
          name="Gowtham N"
          im="null"
          des="Managing Director"
          imsize="l"
        />
          
         </div>

         <br/> 
        <div className='text-center text-2xl text-primary-900 font-bold'>The Leads </div>

        <div className='md:flex md:flex-wrap md:justify-center text-center md:space-x-8 md:mt-20 ' >
        <Motive
          name="Sabari Ganesh K"
          im="null"
          des="Lead WebDev"
          imsize="l"
        />
         <Motive
          name="Raghav"
          im="null"
          des="Outreach and Sponsorship Lead"
          imsize="l"
        />
          <Motive
          name="Jamal "
          im="null"
          des="Outreach and Sponsorship Lead"
          imsize="l"
        />
             <Motive
          name="Kashish"
          im="null"
          des="Design Lead"
          imsize="l"
        />
          <Motive
          name="Ibrahim"
          im="null"
          des="Creative Lead"
          imsize="l"
        />
         <Motive
          name="Shriram Jorvekar"
          im="null"
          des="HR and Management Lead"
          imsize="l"
        />
          
         </div>

</div>
    </PageLayout>
    )
}

export default Aboutus
