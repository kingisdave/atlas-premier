import Link from "next/link";
import { Container } from "./_components/Container";
import { switchThemeDuration } from "./_constants";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="relative w-full xxe:w-screen min-h-[100vh] my-5 pb-10">
      <div className="w-full flex flex-col gap-5 my-4">
        <div className="flex flex-wrap justify-between">
          <div>
            <h1>Blogs</h1>
          </div>
          <div className="w-full flex gap-3">
            <div className="hover:border border-cyan-700 hover:bg-cyan-100 text-cyan-700 p-2 rounded-full">All Blogs</div>
            <div className="hover:border border-cyan-700 hover:bg-cyan-100 text-cyan-700 p-2 rounded-full">Trends</div>
            <div className="hover:border border-cyan-700 hover:bg-cyan-100 text-cyan-700 p-2 rounded-full">Research</div>
            <div className="hover:border border-cyan-700 hover:bg-cyan-100 text-cyan-700 p-2 rounded-full">In-house Knowledge</div>
          </div>
        </div>
        <div className="grid xxe:grid-cols-2 border-8 border-neutral-100 rounded-2xl mx-10 mb-12">
          <div className="relative w-full h-[50vh] rounded-l-2xl">
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
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex gap-1">
                  <Link href="/"
                    className="w-full h-full">
                    <Image src="/_assets/images/facebook.png" 
                      alt="instagram" 
                      width={50} height={50} 
                      className="h-20 w-20"
                    />
                  </Link>
                  <Link href="/"
                    className="w-full h-full">
                    <Image src="/_assets/images/linkedIn.png" 
                      alt="facebook" 
                      width={50} height={50} 
                      className="h-10 w-10"
                    />
                  </Link>
                  <Link href="/"
                    className="w-full h-full">
                    <Image src="/_assets/images/instagram.png" 
                      alt="instagram" 
                      width={50} height={50} 
                      className="h-10 w-10"
                    />
                  </Link>
                  <Link href="/"
                    className="w-full h-full">
                    <Image src="/_assets/images/behance.png" 
                      alt="behance" 
                      width={50} height={50} 
                      className="h-10 w-10"
                    />
                  </Link>
                  <Link href="/"
                    className="w-full h-full">
                    <Image src="/_assets/images/dribble.png" 
                      alt="dribble" 
                      width={50} height={50} 
                      className="h-10 w-10"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full grid gap-5 p-3 xxe:p-8">
            <div className="flex gap-3 items-center text-slate text-xs xxe:text-sm">
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1 mb-3">
          <div className="grid grid-cols-1 border-8 border-neutral-100 rounded-2xl mx-1 mb-12">
            <div className="w-full h-full rounded-t-2xl">
              <Image src="/_assets/images/computer.png" 
                alt="facebook" 
                width={300} height={300} 
                className="object-cover object-center w-full h-full rounded-t-2xl"
              />
            </div>
            <div className="w-full h-full grid gap-5 p-3 xxe:p-8">
              <div className="flex gap-3 items-center text-slate text-xs xxe:text-sm">
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
          <div className="grid grid-cols-1 border-8 border-neutral-100 rounded-2xl mx-1 mb-12">
            <div className="w-full h-full rounded-t-2xl">
              <Image src="/_assets/images/computer.png" 
                alt="facebook" 
                width={300} height={300} 
                className="object-cover object-center w-full h-full rounded-t-2xl"
              />
            </div>
            <div className="w-full h-full grid gap-5 p-3 xxe:p-8">
              <div className="flex gap-3 items-center text-slate text-xs xxe:text-sm">
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
          <div className="grid grid-cols-1 border-8 border-neutral-100 rounded-2xl mx-1 mb-12">
            <div className="w-full h-full rounded-t-2xl">
              <Image src="/_assets/images/computer.png" 
                alt="facebook" 
                width={300} height={300} 
                className="object-cover object-center w-full h-full rounded-t-2xl"
              />
            </div>
            <div className="w-full h-full grid gap-5 p-3 xxe:p-8">
              <div className="flex gap-3 items-center text-slate text-xs xxe:text-sm">
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
          <div className="grid grid-cols-1 border-8 border-neutral-100 rounded-2xl mx-1 mb-12">
            <div className="w-full h-full rounded-t-2xl">
              <Image src="/_assets/images/computer.png" 
                alt="facebook" 
                width={300} height={300} 
                className="object-cover object-center w-full h-full rounded-t-2xl"
              />
            </div>
            <div className="w-full h-full grid gap-5 p-3 xxe:p-8">
              <div className="flex gap-3 items-center text-slate text-xs xxe:text-sm">
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

        </div>
      </div>
    </Container>

  );
}
