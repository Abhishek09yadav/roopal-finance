import Image from "next/image";
import Count from "@/components/common/Count";
import Link from "next/link";
import image from "@/assets/img/smallbg.jpeg";
import about_arrow from "@/assets/img/arrow-shape.png";

const About2 = () => {
  return (
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper-3">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-image">
                  {/* Add relevant image here */}
                  <Image
                      src={image}
                      alt="about-img"
                      style={{
                        borderRadius: "10px",
                        border: "4px solid white",
                      }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <h2 className="wow fadeInUp">Who is Roopal Kanjara?</h2>

                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Roopal Kanjara is a seasoned wealth coach and financial expert based in Navsari, Gujarat. With over a decade of experience in portfolio management, trading strategies, and financial education, Roopal has transformed the financial lives of individuals and businesses alike. Her holistic approach combines technical expertise with an understanding of clients' unique needs, making her a trusted name in wealth coaching.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".7s">
                    Your ideas have a purpose, so choose words that accurately express them. Ensure your grammar is flawless as it impacts your credibility. Use the active voice whenever possible as it makes any narrative easier to read.
                  </p>
                  <div className="about-info" style={{ flexDirection: "row-reverse", justifyContent: "space-around" }}>
                    <div className="info-left wow fadeInUp" style={{ alignSelf: "end" }} data-wow-delay=".8s">
                      <Link href="/about" className="theme-btn-2">
                        Know More About Us
                        <span className="shape-img">
                        <Image src={about_arrow} alt="shape-img" />
                      </span>
                      </Link>
                    </div>
                    <div className="info-right wow fadeInUp" data-wow-delay=".9s">
                      <div className="icon ripple" style={{ color: "#ffe000" }}>
                        <i className="fa-solid fa-phone-volume" style={{ color: "#ffe000" }}></i>
                      </div>
                      <h4>
                        <Link href="tel:+91-9098333333">9098333333</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About2;
