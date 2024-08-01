import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    

<footer class=" bg-[#f5f3f3] mt-10 mb-0 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between text-black ">
            <a href="https://www.tridentindia.com/company" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse ">
                <img src="./Navbar/logo.png" class="h-17" alt="trident-logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6  font-medium gap-4 sm:mb-0 hil-footer ">
                <li>
                    <a target='_blank' href="https://www.tridentindia.com/privacy-policy" class="hover:underline">Privacy policy</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block  text-black sm:text-center ">©<a href="https://hil.in/" class="hover:underline"></a>2023 Trident Limited, India
        </span>
    </div>
</footer>


  )
}

export default Footer
