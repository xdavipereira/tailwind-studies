import type { NextPage } from "next";
import Head from "next/head";
import RecHeader from "../public/header-rec.svg";
import RecHeader1 from "../public/subheader-rec.svg";
import MainScreen from "../public/main-screen.png";
import Analytics from "../public/analytics.svg";
import Subtract from "../public/subtract.svg";
import Image from "next/future/image";

const Home: NextPage = () => {
  return (
    <div className="w-full flex justify-center relative text-gray-900 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <header className="flex  justify-center w-full bg-yellow-50 h-screen  ">
          <div className="w-full absolute top-0 overflow-hidden">
            <Image
              className="w-full h-full relative z-10"
              alt="background-rectangle1"
              src={RecHeader}
            />
            <Image
              className="w-full absolute  -bottom-[2%] z-0 "
              alt="background-rectangle2"
              src={RecHeader1}
            />
          <Image
            className="absolute top-[20%] -right-20  z-10 "
            alt="background-rectangle2"
            src={MainScreen}
          />
          </div>


          <nav className="container flex  items-center justify-between py-10 px-24 mx-auto z-100 absolute top-0 z-20 w-full">
            <div className="flex gap-3 justify-center ">
            <Image
            alt="logo1"
            src={Subtract}
          />
            <Image
            alt="logo2"
            src={Analytics}
          />
            </div>
            <ul className="flex items-center justify-between gap-8 ml-20">
              <li className="font-sans text-secondary text-base" >Product</li>
              <li className="font-sans text-secondary text-base">Pricing</li>
              <li className="font-sans text-secondary text-base">FAQ</li>
              <li className="font-sans text-secondary text-base">Blog</li>
              <li className="font-sans text-secondary text-base">About</li>
            </ul>
            <ul className="flex items-center justify-between gap-10 px-24 mt-2 ml-auto">
              <li className="text-secondary text-base">
                <a>Sign in</a>
              </li>
              <li className="text-secondary text-base">
                <a className="px-10 py-3 rounded-3xl border-solid border">
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
          <div className="z-20 flex flex-col ">
            <div className="w-[51%] mt-[19%]">
              <h1 className="text-6xl font-bold  text-white z-20">Monitor your business on real-time dashboard</h1>
              <p className="text-secondary text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </p>
              <button className="bg-red text-white mt-14 py-3 px-20 rounded-3xl">Try for free</button>
            </div>
          </div>
        </header>
        <main>

        </main>
        <footer>
        </footer>
        {/* <Image
        src={RecHeader}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      /> */}
    </div>
  );
}; /* Rectangle 5 */

export default Home;
