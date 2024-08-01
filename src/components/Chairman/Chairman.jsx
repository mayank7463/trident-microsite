import React from 'react'
import ReadMoreButton from '../ReadMore/ReadMoreButton'
import { Link } from 'react-router-dom'

function Chairman() {
  return (
    <div className='marginal'>
        <div className='my-8'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
              <div>
                  <img src="./Chairman/chair-1.png" alt="" />
              </div>
              <div>
                   <div className='w-[40%]'>
                        <img src="./Chairman/messgae.svg" alt="" />
                   </div>
                   <div>
                         <p className='text-xl'>I sincerely wish good health and overall wellbeing to all of you and your family members. During the era of India’s momentous economic liberalization, a visionary first-generation entrepreneur, started a journey in the early 1990s with few bundles of raw cotton and a dream. Padma Shri Rajinder Gupta laid the foundation of a pioneering enterprise, today popularly known as Trident Limited. Since inception this powerhouse has consistently carved its success path through innovation, integrity, and a relentless pursuit of excellence.</p>
                         <div className='py-8'>
                            <p className='text-[#febd2a] font-bold'>Anthony Desa</p>
                            <p className='font-bold'>Chairman</p>
                            <div className='flex justify-start py-10'>
                              <Link to='/chair-message'><ReadMoreButton/></Link>
                            </div>
                         </div>

                   </div>
              </div>
              
        </div>
        </div>
    </div>
  )
}

export default Chairman
