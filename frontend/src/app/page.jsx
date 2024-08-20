
import React from 'react'

import Navbar from '@/components/Navbar/page';
import HeroSection from '@/components/HeroSection/page';
import Features from '@/components/Features/page';
import Footers from '@/components/Footers/page';
 const Home = () => {
  return(
    <div className='bg-cover h-screen p-2' style={{backgroundImage:`url('')`}}>
   
   <Navbar/>   
<HeroSection/>
<Features/>
<Footers/>
</div>
  )
 }
export default Home;