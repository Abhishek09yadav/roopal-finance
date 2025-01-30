"use client";
import { useState } from "react";

const faq_data = [
  {
    id: 1,
    question: "Who can benefit from Roopal Kanjara’s coaching?",
    answer:
      "Anyone looking to improve their financial literacy, manage investments effectively, or navigate the stock market can benefit.",
  },
  {
    id: 2,
    question: "What is the Money & Moj Club?",
    answer:
      "It’s an exclusive community offering market insights, personalized strategies, and networking opportunities for both beginners and experienced investors.",
  },
  // {
  //   id: 3,
  //   question: "How do I get started with Roopal’s services?",
  //   answer:
  //     "Simply book a consultation call, discuss your financial goals, and begin your personalized journey to financial growth.",
  // },
  // {
  //   id: 4,
  //   question: "What makes Roopal Kanjara’s coaching unique?",
  //   answer:
  //     "Tailored strategies, over a decade of experience, and a proven track record of helping clients achieve financial freedom.",
  // },
  {
    id: 5,
    question: "Does Roopal offer guidance for beginners in stock trading?",
    answer:
      "Yes, beginners receive step-by-step guidance, educational sessions, and personalized strategies.",
  },
  {
    id: 6,
    question: "How often will my portfolio be reviewed?",
    answer:
      "Regular performance reviews ensure your investments align with market conditions and financial goals.",
  },
  {
    id: 7,
    question:
      "What types of investments are covered under portfolio management?",
    answer:
      "Stocks, bonds, mutual funds, and customized asset allocations tailored to your risk appetite.",
  },
  {
    id: 8,
    question: "Is financial planning advice limited to investments?",
    answer:
      "No, Roopal also offers insights on tax-saving strategies, real estate investments, and financial goal planning.",
  },
  {
    id: 9,
    question:
      "Can I access ongoing support after joining the Money & Moj Club?",
    answer:
      "Absolutely, members receive continuous guidance and market insights to ensure sustained growth.",
  },
  // {
  //   id: 10,
  //   question: "What is the best way to contact Roopal for quick assistance?",
  //   answer:
  //     "You can reach out via phone at +91 9098333333 or email at info@roopalthecoach.",
  // },
];

const Faq = ({ style }: any) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId((prevActiveId) => (prevActiveId === id ? null : id));
  };

  return (
    <>
      
    
      {faq_data.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${style ? "mb-3" : ""} wow fadeInUp`}
        >
          <h5 className="accordion-header">
            <button
              onClick={() => toggleAccordion(item.id)}
              className={`accordion-button ${
                activeId !== item.id ? "collapsed" : ""
              }`}
              type="button"
              aria-expanded={activeId === item.id}
            >
              {item.question}
            </button>
          </h5>
          <div
            className={`accordion-collapse collapse ${
              activeId === item.id ? "show" : ""
            }`}
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
