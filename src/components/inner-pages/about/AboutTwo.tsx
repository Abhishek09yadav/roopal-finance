import Image from "next/image";
import Link from "next/link";

import about_img1 from "@/assets/img/arrow-shape.png";
import about_img2 from "@/assets/img/placeholder/665 x 732.png";

const AboutTwo = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-2 style-2">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp">FOCUSED AND FUTURE READY</span>
                  <h3>A Journey of Excellence</h3>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                    Roopal’s journey began with a passion for finance and a
                    desire to help others achieve financial independence. Over
                    the years, Roopal has successfully managed high-net-worth
                    portfolios, ensuring steady returns while navigating complex
                    market conditions.
                  </p>
                </div>
                <h3>Empowering Clients with Knowledge and Confidence</h3>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Roopal’s approach goes beyond traditional financial advising.
                  Through interactive workshops and one-on-one coaching, Roopal
                  empowers clients with the knowledge and tools they need to
                  make informed financial decisions.
                </p>
                {/* <ul className="wow fadeInUp" data-wow-delay=".7s">
                  <li>
                    We have a combination of skilled and experienced workforce
                    to look after the production of high end products.
                  </li>
                  <li>We untiringly strive for zero defects</li>
                  <li>
                    All our employees share responsibility to continuously
                    improve our products
                  </li>
                </ul> */}
                <h3 style={{ marginTop: "30px" }}>
                  Personalized Financial Strategies for Every Client
                </h3>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Roopal believes that every financial journey is unique, and
                  that’s why every recommendation and strategy is customized to
                  meet the specific goals and risk appetite of each client.
                </p>
                {/* <ul className="" data-wow-delay=".7s" style={{ margin: 0 }}>
                  <li>Monolayer and Multilayer bottles and containers.</li>
                  <li>
                    Industry-standard and customized bottles, caps, closures,
                    and measuring cups
                  </li>
                  <li>Rigid packaging solutions for liquids and powders</li>
                </ul> */}
                <h3
                  style={{ marginTop: "30px ! important" }}
                  className="mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  A Vision for Financial Freedom
                </h3>
                <p>
                  Roopal’s mission is simple – to help clients unlock their
                  potential for financial freedom. Through proven strategies and
                  a commitment to excellence, Roopal has helped clients retire
                  early, achieve significant wealth, and reach their financial
                  dreams.
                </p>
                {/* <ul
                  className="wow fadeInUp"
                  data-wow-delay=".7s"
                  style={{ margin: 0 }}
                >
                  <li>
                    Fully automatic Blow Moulding Machines for Multilayer Coex
                    Bottles.
                  </li>
                  <li>
                    Online De-flashing, Trimming, and Leak Testing capabilities.
                  </li>
                  <li>
                    Injection Blow Moulding and Injection Moulding machines.
                  </li>
                </ul> */}
                <Link
                  href="/about"
                  className="theme-btn-2 mt-5 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  know More About us
                  <span className="shape-img">
                    <Image src={about_img1} alt="shape-img" />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-image">
                <Image src={about_img2} alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
