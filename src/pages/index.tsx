import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-screen h-screen bound flex items-center justify-center ${inter.className}`}
    >
      <button className='button-md button-contain-primary'>
        This Is Primary Contain Button
      </button>
    </main>
  );
}
