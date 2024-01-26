import Link from "next/link";
import { Container } from "./_components/Container";
import { switchThemeDuration } from "./_constants";

export default function Home() {
  return (
    <Container className={`flex justify-between w-full xxe:w-screen h-[65vh]`}>
      <div className="flex flex-col mt-28 xxe:mt-40 gap-5">
        {/* <h1
          className={`font-bold tracking-wide text-4xl xxe:text-5xl text-dark dark:text-slate-50 ${switchThemeDuration}`}
        >
          Hi, I'm David
          <span 
            role="img" aria-label="wave"
            className="ml-0 xxe:ml-6">
            👋
          </span>
        </h1>
         */}
      </div>
    </Container>

  );
}
