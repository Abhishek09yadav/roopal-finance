"use client";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Count from "@/components/common/Count";

import about_img1 from "@/assets/img/about/about.jpg";
import about_img2 from "@/assets/img/about/border-shape.png";
import about_img3 from "@/assets/img/about/video.jpg";
import about_img4 from "@/assets/img/arrow-shape.png";
import about_img5 from "@/assets/img/fac1.jpeg";
import about_img6 from "@/assets/img/fac1R.jpeg";
import about_img7 from "@/assets/img/image4.jpeg";
import about_img8 from "@/assets/img/NewProduct.png";

interface DataType {
  sub_title: string;
  title: JSX.Element;
  desc: string;
  about_list: string[];
}

const about_data: DataType = {
  sub_title: "ABOUT TO Industril",
  title: (
    <>
      Success Pathway
    </>
  ),
  desc: "",
  about_list: [
    "Assess Your Current Financial Standing: Book a strategy call.",
    "Craft a Personalized Investment Roadmap: Identify key investment opportunities.",
    "Execute & Monitor: Start investing with confidence using Roopal’s guidance.",
    "Achieve Financial Independence: Watch your wealth grow.",
  ],
};

const { sub_title, title, desc, about_list } = about_data;

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="about-section fix section-padding section-bg">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div
                className="col-xl-6 col-lg-8 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div
                  className="about-image "
                  style={{
                    border: "4px solid white",
                    borderRadius: "10px",
               objectFit: "cover",
                  }}
                >
                  <Image
                    src={about_img8}
                    alt="img"
                    style={{
                      border: "4px solid white",
                      borderRadius: "10px",
                    }}
                  />
                  <div
                    className="border-shape"
                    // style={{ backgroundColor: "#ffe000" }}
                  >
                    {/* <Image src={about_img2} alt="shape-img" /> */}
                  </div>

                  <div className="working-area float-bob-y">
                    <div className="inner">
                      <div className="icon-box">
                        <i className="fa-solid fa-medal"></i>
                        <h3>
                          <span className="count">
                            {/* <Count number={25} /> */}
                            15+
                          </span>{" "}
                          Years
                        </h3>
                        <p>Financial Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 mt-5 mt-xl-0">
                <div className="about-content">
                  <div className="section-title">

                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {title}
                    </h2>
                  </div>
                  <p >
                  </p>
                  <ul className="wow fadeInUp" data-wow-delay=".7s">
                    {about_list.map((list, i) => (
                      <li key={i}>
                        <i
                          className="fa-solid fa-circle-check"
                          style={{ color: "#14b2f1" }}
                        ></i>
                        {list}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
