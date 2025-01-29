"use client";
import { useState } from "react";

const faq_data = [
  {
    id: 1,
    data_wow_delay: ".3s",
    space: "mb-3",
    title: "Exclusive Community – Money & Moj Club",
    desc: (
        <>

          Join an elite club designed for individuals who want to:
          <ul>
            <li><strong>Maximize Earnings:</strong> Discover lucrative stock market strategies.</li>
            <li><strong>Master Market Trends:</strong> Gain practical, actionable knowledge.</li>
            <li><strong>Achieve Financial Success:</strong> Network and learn alongside like-minded individuals.</li>
          </ul>
        </>
    ),
  },
  {
    id: 2,
    data_wow_delay: ".5s",
    space: "mb-3",
    title: "Why Join the Club?",
    desc: (
        <>
          <ul>
            <li>Receive premium market insights and trading strategies.</li>
            <li>Gain access to exclusive webinars and networking events.</li>
            <li>Enjoy tailored investment advice and expert guidance.</li>
          </ul>
        </>
    ),
  },
  {
    id: 3,
    data_wow_delay: ".7s",
    space: "mb-3",
    title: "How to Join?",
    desc: (
        <>
          <ol>
            <li>Book a consultation call with Roopal Kanjara.</li>
            <li>Discuss your financial goals and receive personalized advice.</li>
            <li>Get your exclusive invitation to Money & Moj Club.</li>
            <li>Start your journey towards financial mastery today!</li>
          </ol>
        </>
    ),
  },
];

const Faq = ({ style }: any) => {
  const [activeId, setActiveId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    setActiveId((prevActiveId) => (prevActiveId === id ? -1 : id));
  };

  return (
      <>
        {faq_data.map((item) => (
            <div
                key={item.id}
                className={`accordion-item ${style ? "mb-3" : ""} ${item.space} wow fadeInUp`}
                data-wow-delay={item.data_wow_delay}
            >
              <h5 className="accordion-header">
                <button
                    onClick={() => toggleAccordion(item.id)}
                    className={`accordion-button ${activeId !== item.id ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#faq${item.id}`}
                    aria-expanded="false"
                    aria-controls={`${item.id}`}
                >
                  {item.title}
                </button>
              </h5>
              <div
                  id={`${item.id}`}
                  className={`accordion-collapse collapse ${activeId === item.id ? "show" : ""}`}
                  data-bs-parent="#accordion"
              >
                <div className="accordion-body">{item.desc}</div>
              </div>
            </div>
        ))}
      </>
  );
};

export default Faq;
