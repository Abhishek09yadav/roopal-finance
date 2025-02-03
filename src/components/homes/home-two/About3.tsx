"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";

import about_arrow1 from "@/assets/img/arrow.png";
import about_thumb from "@/assets/img/mojCommunity.jpeg";

interface ContentType {
  sub_title: string;
  title: string;
  desc: JSX.Element;
  list: JSX.Element[];
}

const about_content: ContentType = {
  sub_title: "ABOUT TO Community",
  title: "Exclusive Community – Money & Moj Club",
  desc: <>Join an elite club designed for individuals who want to:</>,
  list: [
    <>
      <b> Maximize Earnings:</b> Learn innovative techniques to tap into the
      best stock market opportunities, optimize your investment portfolio, and
      achieve higher returns.
    </>,
    <>
      <b>Master Market Trends:</b> Stay ahead with insights that help you make
      informed decisions and capitalize on dynamic market movements.
    </>,
    <>
      <b>Achieve Financial Success:</b> Collaborate, network, and grow alongside
      a vibrant community of investors, professionals, and financial
      enthusiasts.
    </>,
  ],
};

const { sub_title, title, desc, list } = about_content;

const About3 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="about-section fix section-padding">
        <div className="arrow-shape">
          <Image src={about_arrow1} alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row">
              <div
                className="col-xl-5  col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="about-image">
                  <Image src={about_thumb} alt="about-img" />
                  <h4 className="title-text -2">9+ Years Experience</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp" data-wow-delay=".3s">
                      {sub_title}
                    </span>
                    <h2 className="wow fs-3 fadeInUp" data-wow-delay=".5s">
                      {title}
                    </h2>
                  </div>
                  <p
                    className="mt-4 mt-md-0 wow fadeInUp text-white fs-4 "
                    data-wow-delay=".7s"
                  >
                    {desc}
                  </p>
                  <ul
                    className="wow fadeInUp"
                    style={{ gap: "20px" }}
                    data-wow-delay=".4s"
                  >
                    {list.map((item, i) => (
                      <li key={i}>{item}</li>
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

export default About3;
