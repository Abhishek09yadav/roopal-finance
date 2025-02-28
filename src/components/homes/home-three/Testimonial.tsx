"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import avatar_1 from "@/assets/img/testimonial/01.jpg";
import avatar_2 from "@/assets/img/testimonial/02.jpg";
import avatar_3 from "@/assets/img/testimonial/03.jpg";
import avatar_4 from "@/assets/img/testimonial/04.jpg";
import avatar_5 from "@/assets/img/testimonial/05.jpg";
import avatar_6 from "@/assets/img/testimonial/06.jpg";
import avatar_7 from "@/assets/img/testimonial/07.jpg";
import avatar_8 from "@/assets/img/testimonial/08.jpg";

interface DataType {
  id: number;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  avatar: StaticImageData;
  name: string;
  designation: string;
}
[];

const testi_data: DataType[] = [
  {
    id: 1,
    desc_1: (
      <>
        Roopal’s investment strategies completely transformed my financial
        portfolio. The insights were incredibly valuable.
      </>
    ),
    desc_2: (
      <>
        Thanks to her expert guidance, I’ve seen significant growth in my
        investments. Highly recommend her services!
      </>
    ),
    avatar: avatar_1,
    name: "Amit Patel, Mumbai",
    designation: "Entrepreneur",
  },
  {
    id: 2,
    desc_1: (
      <>
        Joining the Money & Moj Club was a game-changer for me. The exclusive
        insights gave me a competitive edge in trading.
      </>
    ),
    desc_2: (
      <>
        The mentorship I received helped me maximize my earnings in the stock
        market.
      </>
    ),
    avatar: avatar_2,
    name: "Priya Mehta, Delhi",
    designation: "Financial Analyst",
  },
  {
    id: 3,
    desc_1: (
      <>
        Roopal’s approach to wealth management is practical and effective. She
        customizes strategies based on individual goals.
      </>
    ),
    desc_2: (
      <>
        My portfolio is now well-balanced and performing better than ever.
      </>
    ),
    avatar: avatar_3,
    name: "Rahul Verma, Pune",
    designation: "IT Consultant",
  },
  {
    id: 4,
    desc_1: (
      <>
        Before working with Roopal, I was unsure about my investments. Now, I
        have a clear roadmap.
      </>
    ),
    desc_2: (
      <>
        Her expertise in portfolio diversification saved me from unnecessary
        risks.
      </>
    ),
    avatar: avatar_4,
    name: "Sneha Agarwal, Bengaluru",
    designation: "Marketing Manager",
  },
  {
    id: 5,
    desc_1: (
      <>
        Roopal’s insights on tax-saving investments were extremely helpful. I
        learned how to optimize my returns.
      </>
    ),
    desc_2: (
      <>
        Now, I feel more confident in making investment decisions.
      </>
    ),
    avatar: avatar_5,
    name: "Vikram Singh, Hyderabad",
    designation: "Software Engineer",
  },

  {
    id: 6,
    desc_1: (
      <>
        Roopal’s mentorship helped me achieve financial discipline and long-term
        wealth growth.
      </>
    ),
    desc_2: (
      <>
        The personalized investment plan was a perfect fit for my goals.
      </>
    ),
    avatar: avatar_6,
    name: "Ramesh Kulkarni, Ahmedabad",
    designation: "Business Owner",
  },
  {
    id: 7,
    desc_1: (
      <>
        Roopal’s investment strategies completely transformed my financial
        planning. I now feel more confident about my future.
      </>
    ),
    desc_2: (
      <>
        Their expert advice helped me maximize returns and secure long-term
        financial stability. A game-changer!
      </>
    ),
    avatar: avatar_7,
    name: "Amit Verma, Mumbai",
    designation: "Financial Analyst",
},

{
    id: 8,
    desc_1: (
      <>
        Joining the Money & Moj Club was the best decision for my investments.
        The insights and strategies provided are top-notch.
      </>
    ),
    desc_2: (
      <>
        Thanks to Roopal’s mentorship, I have significantly improved my stock
        market performance. Highly recommended!
      </>
    ),
    avatar: avatar_8,
    name: "Aman Gupta, Delhi",
    designation: "Entrepreneur",
},
  
];

const setting = {
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-2",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const Testimonial = ({ padding }: any) => {
  return (
    <section
      className={`testimonial-section-2 fix ${
        padding ? "" : "section-padding pt-0"
      }`}
      style={{ paddingTop: "130px" }}
    >
      <div className="container mt-5">
        <div className="section-title text-center">
          {/* <span className="wow fadeInUp">PUBLIC TESTIMONIAL</span> */}
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            public feedback about US
          </h2>
        </div>
        <Swiper
          {...setting}
          modules={[Pagination, Autoplay]}
          className="swiper testimonial-slider-2"
        >
          {testi_data.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="testimonial-card-items">
                <div className="testimonial-content">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <p className="text">{item.desc_1}</p>
                  <p className="text-2">{item.desc_2}</p>
                </div>
                <div className="client-info">
                <div className="client-image  ">
  <Image src={item.avatar} width={80} alt="client-img" />
</div>

                  <div className="client-content">
                    <h5>{item.name}</h5>
                    <p>{item.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-dot pt-5 text-center">
            <div className="dot-2"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
