import React from 'react';

const ContactForm = () => {
  return (
    <section className="max-w-2xl mx-auto h-full bg-white p-8 rounded-lg shadow-lg text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
      <form 
        action="https://formspree.io/f/xeoqgqza" 
        method="POST" 
        className="space-y-6"
      >
        {/* Name and Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Your Name", name: "name", placeholder: "Name", required: true },
            { label: "Your Organization Name", name: "organization", placeholder: "Organization Name" }
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={field.name} className="text-sm font-medium mb-2">
                {field.label}{field.required && <span>*</span>}
              </label>
              <input
                type="text"
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                required={field.required}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Email and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Your Email", name: "email", type: "email", placeholder: "Email" },
            { label: "Your Contact", name: "contact", type: "text", placeholder: "Contact Number" }
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={field.name} className="text-sm font-medium mb-2">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Website Link */}
        <div className="flex flex-col">
          <label htmlFor="website" className="text-sm font-medium mb-2">Website Link (if any)</label>
          <input
            type="url"
            name="website"
            id="website"
            placeholder="Website Link"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <label htmlFor="services" className="text-sm font-medium mb-2">What services are you interested in?</label>
          <select
            name="services"
            id="services"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {["Web Development", "App Development", "WordPress Development"].map((service, index) => (
              <option key={index} value={service.toLowerCase().replace(' ', '')}>{service}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white w-full py-2 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Let&apos;s Talk!
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
