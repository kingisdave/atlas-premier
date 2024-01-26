// 📁 components/navigations/Header.tsx

import Link from "next/link"
import { Container } from "../Container"
import ColorPickerIcon from "../../../../public/_assets/icons/ColorPickerIcon"
import Image from "next/image"
import HomeIcon from "../../../../public/_assets/icons/HomeIcon"
import MenuIcon from "../../../../public/_assets/icons/MenuIcon"

const Header = () => {
  return (
    <div className="sticky top-0 backdrop-blur-xl z-50 w-auto h-auto">
      <Container className="flex h-full items-center justify-center my-3">
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
        
      </Container>
    </div>
  )
}

export default Header;