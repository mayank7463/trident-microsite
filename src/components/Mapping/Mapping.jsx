import React from 'react'
import ReadMoreButton from '../ReadMore/ReadMoreButton'
import { Link } from 'react-router-dom'

function Mapping() {
  return (
    <div className='marginal'>
        <div className='my-16'>
              <div className='flex space-x-8'>
                   <div className='w-[40%]'>
                       <img src="./Map/expansive.svg" alt="" />
                   </div>
                   <div className='flex flex-col justify-center text-xl '>
                       <p>Our world stretches beyond borders. We have built a network of connections in key markets across the globe. This expansive presence enables us to tap into a rich tapestry of cultures and preferences, inspiring us to create products that resonate with people everywhere</p>
                   </div>
              </div>
              <div className='my-8 flex justify-center'>
                    <img src="./Map/map.png" alt="" />
              </div>
              <div className='flex justify-center'>
              <div className='flex lg:flex-row flex-col'>
                   <div>
                       <img src="./Map/m-1.png" alt="" />
                   </div>
                   <div>
                        <img src="./Map/m-2.png" alt="" />
                   </div>
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
