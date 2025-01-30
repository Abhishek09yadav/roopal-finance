import ContactForm from "@/components/forms/ContactForm";

const ContactArea = () => {
  return (
    <section className="contact-section fix section-padding pt-0">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            style={{
              width: "100%",
            }}
            data-wow-delay=".3s"
          >
            <div className="map-items">
              <div className="googpemap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777455.7527290983!2d68.67891486125221!3d22.394311549519436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887ed54522e!2sGujarat!5e0!3m2!1sen!2sin!4v1738218359519!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="contact-form-items">
              <h2>Leave A Message</h2>
              <ContactForm />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
