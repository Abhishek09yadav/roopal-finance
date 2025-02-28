import FooterOne from "@/layouts/footers/FooterOne";
import About from "./About";
import Blog from "./Blog";
import Counter from "../../common/Counter";
import Hero from "./Hero";
import Project from "./Project";
import Service from "./Service";
import Team from "./Team";

import HeaderOne from "@/layouts/headers/HeaderOne";
import Faq from "@/components/common/Faq";
import FaqArea from "@/components/inner-pages/faq/FaqArea";
import About3 from "../home-two/About3";
import About2 from "../home-three/About2";
import MarqueSection from "../home-two/MarqueSection";
import Certificate from "./Certificate";

import Image from "next/image";
import img from "@/assets/img/BlueModernFuturisticBusinessRoadmap3.png";
import clients from "@/assets/img/clients.png";
import Testimonial from "../home-three/Testimonial";
const HomeOne = () => {
  return (
    <>
      <HeaderOne headerTop={true} />
      <main>
        <Hero />
        <About2 />
        <MarqueSection />
        <Service />
<About3/>
         {/*<Project />*/}  
        <About />
        {/* certificate */}
        {/* <Certificate/> */}
        {/*<Counter padding={true} />*/}
        {/* <Team />*/}
         <Testimonial/>
        {/* <Testimonial padding={false} /> */}
        {/*<Blog />*/}
      </main>
      <FaqArea />
      <FooterOne />
    </>
  );
};

export default HomeOne;
