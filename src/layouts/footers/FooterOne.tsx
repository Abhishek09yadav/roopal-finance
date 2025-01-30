import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.png";

const FooterOne = () => {
  return (
    <footer
      className="footer-section fix bg-cover"
      style={{ backgroundImage: `url(/assets/img/footer-bg.jpg)` }}
    >
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="logo-img"
                      style={{
                        width: "170px",
                        backgroundColor: "white",
                        height: "auto",
                      }}
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>123 Anywhere St., Any City, ST 12345</p>
                  <ul className="contact-info">
                    {/* <li>
                      <i className="fas fa-map-marker-alt"></i>
                      6391 Elgin St. Celina, USA
                    </li> */}
                    <li>
                      <i className="fa-solid fa-phone-volume"></i>
                      <Link href="tel:9098333333">+91 9098333333</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Link</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/">
                      <i className="fa-solid fa-chevron-right"></i>About
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/pricing">
                      <i className="fa-solid fa-chevron-right"></i>Pricing Plan
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/faq">
                      <i className="fa-solid fa-chevron-right"></i>Faq
                    </Link>
                  </li>
                  {/*<li>*/}
                  {/*  <Link href={`/blog-0`}>*/}
                  {/*    <i className="fa-solid fa-chevron-right"></i>Our Blog*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <Link href="/contact">*/}
                  {/*    <i className="fa-solid fa-chevron-right"></i> Contact Us*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p>
              © All Copyright 2024 by <Link href="/">EaglesThemes</Link>
            </p>
            <ul>
              <li>
                <Link href="/contact">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/contact"> Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default FooterOne;
