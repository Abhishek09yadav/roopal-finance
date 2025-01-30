import Link from "next/link";
import Image from "next/image";

import about_arrow from "@/assets/img/arrow-shape.png";
import about_thumb from "@/assets/img/placeholder/665 x 732.png";

interface ContentType {
  sub_title: string;
  title: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  list: JSX.Element[];
}

const about_content: ContentType = {
  sub_title: "About Roopal Kanjara",
  title: "A Trusted Financial Expert and Coach",
  desc_1: (
    <>
      A Trusted Financial Expert and Coach Roopal Kanjara is a highly
      experienced financial coach, dedicated to helping individuals and
      businesses achieve their financial goals through expert guidance,
      personalized investment strategies, and in-depth market insights. With
      over a decade of hands-on experience in portfolio management, trading, and
      wealth building, Roopal has earned a reputation for delivering consistent
      and impactful results.
    </>
  ),
  desc_2: <></>,
  list: [],
};

const { sub_title, title, desc_1, desc_2, list } = about_content;

const AboutArea = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-image style-2">
                <Image src={about_thumb} alt="about-img" />
                <h4 className="title-text">40+ Years Experieance</h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp">{sub_title}</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {title}
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {desc_1}
                </p>
                <p className="mt-2 wow fadeInUp" data-wow-delay=".7s">
                  {desc_2}
                </p>
                <ul className="wow fadeInUp" data-wow-delay=".8s">
                  {list.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="theme-btn-2 mt-5 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  know More About us
                  <span className="shape-img">
                    <Image src={about_arrow} alt="shape-img" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
