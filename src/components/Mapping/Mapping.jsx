import React from 'react'
import ReadMoreButton from '../ReadMore/ReadMoreButton'
import { Link } from 'react-router-dom'
import './Mapping.css'
import OurPresence from '../OurPresence/OurPresence'

function Mapping() {
  return (
    <div className='marginal'>
        <div className='my-16'>
              <div className='flex space-x-8'>
                   <div className='w-[40%]'>
                       <img src="../assets/expansive.svg" alt="" />
                   </div>
                   <div className='flex flex-col justify-center text-xl '>
                       <p>Our world stretches beyond borders. We have built a network of connections in key markets across the globe. This expansive presence enables us to tap into a rich tapestry of cultures and preferences, inspiring us to create products that resonate with people everywhere.</p>
                   </div>
              </div>
              <div className='p-4'>
                    <OurPresence/>
              </div>
              <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 bg-[#d6e7e6] p-8'>
                   <div className='point'>
                        <div className='w-4 h-4 rounded-full bg-[#febd2a]'></div>
                        <p className='text-[#33988a] font-bold'>National/International Presence</p>
                        <div className='w-14 h-1 bg-[#febd2a]'></div>
                        <ul className='py-4'>
                           <div className='grid lg:grid-cols-4 sm:grid-cols-1 px-8'>
                              
                                    <li>New York</li>
                                    <li>England</li>
                                    <li>Dubai</li>
                                    <li>New Delhi</li>
                                    <li>Mumbai</li>  
                                    <li>Gurugram</li>
                                    <li>Ludhiana</li>
                                    <li>Chandigarh</li>
                                    <li>Bhopal</li>
                              
                           </div>
                        </ul>
                   </div>
                   <div className='point'>
                        <div className='w-4 h-4 rounded-full bg-[#f38720]'></div>
                        <p className='text-[#33988a] font-bold'>Manufacturing Plants</p>
                        <div className='w-14 h-1 bg-[#febd2a]'></div>
                        <ul className='py-4'>
                           <div className='grid lg:grid-cols-2 sm:grid-cols-1 px-8'>
                                  <li>Sanghera, Punjab</li>
                                  <li>Dhaula, Punjab</li>
                                  <li>Budhni, Madhya Pradesh</li>
                           </div>
                        </ul>
                   </div>
              </div>
        
        </div>
        <div className='py-10'>
           <Link to='/expansive-footprint'><ReadMoreButton/></Link>
        </div>
    </div>
  )
}

export default Mapping
