import React from "react";
import ContactForm from "./components/ContactForm";
import Image from "next/image";
import contactimg from "../assets/contact_ui.avif";
import Head from "next/head";
export const metadata = {
    title: "Contact me - Pranav Singh",
    description: "Contact us | Pranav Singh is the website developer working as a freelance since 2018. According to google review He is the best Website Developer in India, Website Developer in Bihar",
    
  };
const Page = () => {
    
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-12 px-4">
        {/* Left Column - Contact Form */}
        <div className="order-2 md:order-1">
          <ContactForm />
        </div>

        {/* Right Column - Text Section */}
        <div className="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-left relative">
          <h2 className="text-2xl md:text-5xl font-bold mb-2 text-primary">
            Let’s make it a reality!
          </h2>
          <p className="text-base md:text-lg text-paraColour">
            We&apos;re excited to work with you soon! Please share your details,
            and we&apos;ll get back to you within 20-30 minutes.
          </p>

          <Image
            src={contactimg}
            width={0}
            height={0}
            alt="Contact us image"
            quality={100}
            className="rounded-xl w-96 mt-8 md:absolute bottom-0"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
