"use client";

import React, { useState } from "react";

const FAQ = () => {
  const faq = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a range of web development services, including custom website design, development, maintenance, and SEO optimization. Whether you're looking for a simple static website or a full-scale dynamic web application, we can help bring your vision to life.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the complexity and requirements of the project. A basic static website can be ready within 1-2 weeks, while a more complex site with custom features and integrations may take 3-6 weeks. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer website maintenance and support?",
      answer:
        "Yes, we offer ongoing website maintenance and support packages to ensure your website stays updated, secure, and fully functional. From content updates to performance optimization and security checks, we take care of everything so you can focus on running your business.",
    },
  ];

  // State to keep track of which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to toggle accordion
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-16 md:px-0 px-4">
      <div className="max-w-7xl mx-auto border-b border-neutral-800 pb-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex-1 max-w-xl">
            <h1 className="text-6xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-md text-paraColour">
              Have questions about our services? Here are some of the most
              common inquiries from our clients.
            </p>
          </div>

          <div className="accordion flex-1 mt-8 md:mt-0 md:ml-8">
            {faq.map((item, index) => (
              <div className="border-b border-gray-300" key={index}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-slate-800"
                >
                  <span className="text-white text-start">{item.question}</span>
                  <span
                    className={`transition-transform duration-300 ${
                      openAccordion === index ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                  </span>
                </button>

                {openAccordion === index && (
                  <div className="p-4 text-paraColour">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
