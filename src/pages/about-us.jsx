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
          des="At PlaceXP, we are committed to building a platform that supports learning, self-growth, and skill development by fostering a culture that enables people to do their best work. We firmly believe in uniting as a community to support one another in evolving into better versions of ourselves.
          "
        
        />
        <Motive
          name="ABOUT PLACE XP"
          im="Group"
          des="One of VIT Chennai's first-ever significant and influential technical club that caters to students needs. From academics, classroom to career, from internships to placements, and much more!!
          "
        />
        <Motive
          name="UPCOMING PROGRAM"
          im="graph"
          des="Interactions with Alumni, Workshops, Open Mic events to exhibit your talents, guidance from seniors to cover all the aspects of college life and placements.We hope to surprise you with much more interesting and amazing sessions :)
          We have more in our store !!"
        />
         </div>

</div>
<br/><br/>
<div>
        <div className='text-center text-4xl text-primary-900 font-bold'>Who are we ? </div>
     
         <br/> 
        <div className='text-center text-2xl text-primary-900 font-bold'>Board Members </div>

        <div className='md:flex md:flex-wrap md:justify-center text-center md:space-x-8 md:mt-20 ' >
     
         <Motive
          name="Maharnav"
          im="maharnav"
          des="Club Vice-President"
          imsize="l"
        />
           <Motive
          name="Akshaya Ramachandran"
          im="akshaya"
          des="Club President"
          imsize="l"
        />
          <Motive
          name="Avisi Sachan "
          im="avisi"
          des="Club Vice-President"
          imsize="l"
        />
             <Motive
          name="Gowtham N"
          im="gowtham"
          des="Managing Director"
          imsize="l"
        />
          
         </div>

         <br/> 
        <div className='text-center text-2xl text-primary-900 font-bold'>The Leads </div>

        <div className='md:flex md:flex-wrap md:justify-center text-center md:space-x-8 md:mt-20 ' >
        <Motive
          name="Sabari Ganesh K"
          im="sabari"
          des="Lead WebDev"
          imsize="l"
        />
         <Motive
          name="Raghav"
          im="raghav"
          des="Outreach and Sponsorship Lead"
          imsize="l"
        />
          <Motive
          name="Jamal "
          im="jamal"
          des="Outreach and Sponsorship Lead"
          imsize="l"
        />
             <Motive
          name="Kashish"
          im="kashish"
          des="Design Lead"
          imsize="l"
        />
          <Motive
          name="Ibrahim"
          im="ibrahim"
          des="Creative Lead"
          imsize="l"
        />
         <Motive
          name="Shriram Jorvekar"
          im="shriram"
          des="HR and Management Lead"
          imsize="l"
        />
          
         </div>

         <br/> 
        <div className='text-center text-2xl text-primary-900 font-bold'>Advisory Members </div>

        <div className='md:flex md:flex-wrap md:justify-center text-center md:space-x-8 md:mt-20 ' >
       
         <Motive
          name="Jennifer Clemens"
          im="jeniffer"
          des="Former Club Vice-President"
          imsize="l"
        />
         <Motive
          name="Pooja Sreekumar"
          im="pooja"
          des="Former Club President"
          imsize="l"
        
        />
          <Motive
          name="Akhil Rudrawar "
          im="akhil"
          des="Former Club Vice-President"
          imsize="l"
        />
             <Motive
          name="Shivansh Atre"
          im="shivansh"
          des="Former Club lead"
          imsize="l"
        />
             <Motive
          name="Sruthi Nayagi "
          im="sruthi"
          des="Former Club lead"
          imsize="l"
        />
          <Motive
          name="Disha Raina "
          im="disha"
          des="Former Club lead"
          imsize="l"
        />
         </div>

</div>
    </PageLayout>
    )
}

export default Aboutus
