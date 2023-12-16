import Features from "./(home)/Features";
import Hero from "./(home)/Hero";
import Offers from "./(home)/Offers";
import Work from "./(home)/Work";
import Background from "./about/Background";
import Intro from "./about/Intro";
import Outtro from "./about/Outtro";
import Plans from "./pricing/Plans";

export default function Home() {
  return (
    <>
      {/* 
      <Hero />
      <Work />
      <Features />
      <Offers /> 
      */}

      {/* <Plans /> */}

      <Intro />
      <Background />
      <Outtro />
    </>
  );
}
