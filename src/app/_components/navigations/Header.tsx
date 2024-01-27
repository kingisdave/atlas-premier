// 📁 components/navigations/Header.tsx

import Link from "next/link"
import { Container } from "../Container"
import ColorPickerIcon from "../../../../public/_assets/icons/ColorPickerIcon"
import Image from "next/image"
import HomeIcon from "../../../../public/_assets/icons/HomeIcon"
import MenuIcon from "../../../../public/_assets/icons/MenuIcon"
import { url } from "inspector"

const Header = () => {
  return (
    <div className="relative mb-0 backdrop-blur-xl z-50 w-auto h-auto">
      <div className="absolute top-0 w-full h-full">
        <div className="absolute top-0 w-full rounded-l-2xl rotate-180">
          <Image src="/_assets/images/line.png" 
            alt="facebook" 
            width={300} height={300} 
            className="object-cover object-center w-full h-full rounded-l-2xl"
          />
        </div> 
        <div className="absolute bottom-0 w-full rounded-l-2xl">
          <Image src="/_assets/images/line.png" 
            alt="facebook" 
            width={300} height={300} 
            className="object-cover object-center w-full h-full rounded-l-2xl"
          />
        </div> 
      </div>
      <Container className="relative h-full my-3 flex flex-col gap-5 my-5">
        <div className="flex items-center justify-center pb-5">
          <ul className="flex items-center text-neutral-700 dark:text-white rounded-l-full rounded-r-full border-2 border-slate-300 shadow">
            <Link href="/" 
              className="flex items-center p-7 bg-slate-100 text-slate-700 hover:bg-slate-700 hover:text-slate-100 rounded-l-full">
              <span className="w-5 h-5">
                <HomeIcon />
              </span>
            </Link>
            <Link href="/" 
              className="flex items-center p-7 bg-slate-100 text-slate-700 hover:bg-slate-700 hover:text-slate-100 rounded-r-full">
              <span className="w-5 h-5">
                <MenuIcon />
              </span>
            </Link>
            
          </ul>

        </div>

        <div className="grid grid-cols-1 xxe:grid-cols-2 my-4 mx-10">
          <div className="font-bold text-xl text-4xl text-center xxe:text-start">
            <h1>Atlas Premier</h1>
            <h1>Knowledge Blogs:</h1>
          </div>
          <div className="font-normal text-xs sm:text-2xl px-10">
            <span className="text-center xxe:text-start">
              "Immerse yourself in the latest knowledge and research from our team of 
              software engineers and design professionals"
            </span>
          </div>
        </div>

        <div className="grid xxe:grid-cols-2 border-8 border-neutral-100 rounded-2xl mx-10 mb-12">
          <div className="w-full h-full rounded-l-2xl">
            <Image src="/_assets/images/computer.png" 
              alt="facebook" 
              width={300} height={300} 
              className="object-cover object-center w-full h-full rounded-l-2xl"
            />
          </div>
          <div className="w-full h-full grid gap-5 p-3 xxe:p-8">
            <div className="flex gap-3 flex-wrap items-center text-slate text-xs xxe:text-sm">
              <span className="uppercase">Freelancing 101</span>
              <span className="w-2 h-2 bg-slate-800"></span>
              <span className="capitalize">William George</span>
            </div>
            <div className="text-center xxe:text-start text-xl sm:text-2xl md:text-4xl pr-10 font-medium">
              <h1>07 Ways to get Consistent Clients from Social Media</h1>
            </div>
            <div className="flex gap-3 items-center text-slate text-xs xxe:text-sm mt-3">
              <span className="uppercase">15 Min Read</span>
              <span className="w-2 h-2 bg-slate-800"></span>
              <span className="capitalize">23 - 05 - 2023</span>
            </div>
          </div>
        </div>
        
      </Container>
    </div>
  )
}

export default Header;