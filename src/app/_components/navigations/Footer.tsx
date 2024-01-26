// 📁 components/navigations/Footer.tsx

import Link from "next/link"
import ColorPickerIcon from "../../../../public/_assets/icons/ColorPickerIcon"
import { ThemeSwitcher } from "..";
import { Container } from "../Container";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  let showColor: boolean = false;

  return (
    <footer className="sticky bottom-0 px-1 sm:px-5 py-8 dark:bg-gray-900 w-full">
      <Container className="flex justify-center my-3 px-3 pt-3 bg-white rounded-2xl">
        <div className="w-full h-full flex justify-between">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">Say Hello!</h4>
                <h4 className="">Atlaspremier@gmail.com</h4>
              </div>
              <div className="flex gap-1">
                <Link href="/"
                  className="text-lg sl:text-2xl ml:text-3xl mt-2 xxe:mt-4 font-sans font-medium italic">
                  <Image src="/_assets/images/insta.png" 
                    alt="instagram" 
                    width={50} height={50} 
                    className="h-10 w-10"
                  />
                </Link>
                <Link href="/"
                  className="text-lg sl:text-2xl ml:text-3xl mt-2 xxe:mt-4 font-sans font-medium italic">
                  <Image src="/_assets/images/facebk.png" 
                    alt="facebook" 
                    width={50} height={50} 
                    className="h-10 w-10"
                  />
                </Link>
                <Link href="/"
                  className="text-lg sl:text-2xl ml:text-3xl mt-2 xxe:mt-4 font-sans font-medium italic">
                  <Image src="/_assets/images/twit.png" 
                    alt="twitter" 
                    width={50} height={50} 
                    className="h-10 w-10"
                  />
                </Link>
                <Link href="/"
                  className="text-lg sl:text-2xl ml:text-3xl mt-2 xxe:mt-4 font-sans font-medium italic">
                  <Image src="/_assets/images/linked.png" 
                    alt="linkedin" 
                    width={50} height={50} 
                    className="h-10 w-10"
                  />
                </Link>
              </div>
            </div>
            <div className="flex justify-between">
              
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <span>New York, US</span>
            <span>AtlasPremier. All Rights Reserved</span>
          </div>
           
        </div>
        {/* <div className="flex flex-wrap justify-center mx-auto">
          <div className="grid gap-y-5">
            <div className="flex justify-center">
              
            </div>

            <Link href="/" className="flex items-center justify-center">
              <span className="self-center text-gray-600 text-xl xxe:text-sm font-medium whitespace-nowrap dark:text-white">
                &copy; atlas-premier {currentYear}
              </span>
            </Link>
          </div>

        </div>
        <div className="absolute top-10 right-5 xxe:right-10 text-slate-300 dark:text-slate-700">
          <div 
            className="px-2 mt-3 font-semibold transition-colors rounded-2xl duration-600"
          >
            <ThemeSwitcher />
          </div>
        </div> */}
      </Container>
    </footer>
  )
}

export default Footer;