import React from 'react'
import ImageCarousel from '../ImageCoursel/ImageCarousel'
import ReadMoreButton from '../ReadMore/ReadMoreButton'
import { Link } from 'react-router-dom'

function Excellence() {
  return (
    <div className='marginal'>
      <div className='my-16'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div className=''>
                    <div className='w-[40%]'>
                        <img src="./Excellence/Excellence.svg" alt="" />
                    </div>
                    <div className='text-xl'>
                        <p>Trident Limited is the flagship company of the esteemed Trident Group, a powerful Indian conglomerate with a global reach. We are a vertically-integrated textile and paper company, transforming raw materials into exceptional home essentials and eco-friendly paper products.</p>
                        <div className='flex justify-start py-10'>
                           <Link to='/weaving-excellence'><ReadMoreButton/></Link>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <ImageCarousel/>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Excellence
