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
import about_img8 from "@/assets/img/roopal-images/img4.jpg";

interface DataType {
  sub_title: string;
  title: JSX.Element;
  desc: string;
  about_list: string[];
}

const about_data: DataType = {
  sub_title: "Our Success Pathway to Financial Growth",
  title: <>Follow these steps to unlock your financial potential:</>,
  desc: "",
  about_list: [
    "Assess Your Current Financial Standing: Start by understanding where you stand financially. Book a strategy call to review your income, expenses, savings, and investments.",
    "Create a Personalized Investment Plan: Work with us to develop an investment strategy that aligns with your goals and risk tolerance, identifying the best opportunities for you.",
    "Execute & Monitor Your Investments: Take action and begin investing confidently with Roopal’s guidance. Regularly monitor your progress and adjust as needed to stay on track.",
    "Achieve Financial Independence: Watch your wealth grow as your investments work for you, bringing you closer to financial freedom.",
    "Keep Learning & Improving: Stay updated on market trends and investment strategies to continually refine your approach and ensure sustained growth.",
    "Take the first step toward financial success today!",
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
                  className="about-image"
                  style={{
                    border: "4px solid white",
                    borderRadius: "10px",
                    position: "relative",
                    width: "100%",
                    // height: "100%",
                  }}
                >
                  <Image
                    src={about_img8}
                    alt="img"
                    fill
                    style={{
                      objectFit: "scale-down",
                      borderRadius: "10px",
                    }}
                  />
                  <div className="border-shape">
                    {/* <Image src={about_img2} alt="shape-img" /> */}
                  </div>

                  <div className="working-area float-bob-y d-none d-lg-block">
                    <div className="inner">
                      <div className="icon-box">
                        <i className="fa-solid fa-medal"></i>
                        <h3>
                          <span className="count">
                            {/* <Count number={25} /> */}
                            9+
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
                  <p></p>
                  <ul className="wow fadeInUp" data-wow-delay=".7s">
                    {about_list.map((list, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <i
                          className="fa-solid fa-circle-check"
                          style={{ color: "#14b2f1", flexShrink: 0 }}
                        ></i>
                        <span>{list}</span>
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