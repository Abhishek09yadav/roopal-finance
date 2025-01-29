import Image from "next/image"
import Link from "next/link"

import contact_img1 from "@/assets/img/shape.png"
import contact_img2 from "@/assets/img/contact.png"
import contact_img3 from "@/assets/img/arrow-shape.png"

const Contact = () => {
   return (
      <section className="contact-info-section fix section-padding">
         <div className="shape-image">
            <Image src={contact_img1} alt="shape-img" />
         </div>
         <div className="container">
            <div className="contact-info-wrapper">
               <div className="row justify-content-between align-items-center">
                  <div className="col-xl-5 col-lg-6">
                     <div className="info-image">
                        <Image src={contact_img2} alt="img" />
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                     <div className="info-content">
                        <div className="section-title">
                           <span>Join with Us</span>
                           <h2>Want to work together?</h2>
                        </div>
                        <p className="mt-4 mt-md-0">
                           We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users changing needs. Infrastructure.
                        </p>
                        <div className="about-info-items">
                           <Link href="/contact" className="theme-btn-2">
                              Contact with Us<span className="shape-img">
                                 <Image src={contact_img3} alt="shape-img" />
                              </span></Link>
                           <div className="call-area">
                              <span>or Call us</span>
                              <div className="icon">
                                 <i className="fa-solid fa-phone-volume"></i>
                                 <h6>
                                    <Link href="tel:+91-26594-302-003">+91 2659 302 003</Link>
                                 </h6>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Contact
