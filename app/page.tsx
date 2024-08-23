import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return(
    <main className="relatice bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="mx-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  )
}
