import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import React, { useState } from "react";
import { SiGmail } from "react-icons/si";

const InputForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (In real app, send data to backend)");
    console.log(formData);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-15">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 py-15">
          Let’s Build a Greener Future Together
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Got ideas, feedback, or just want to say hi? We’d love to hear from
          you. Every conversation brings us closer to a cleaner world.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ x: -100, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-6">Let's Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neon-dark"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neon-dark"
                  placeholder="Surname"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neon-dark"
                placeholder="Company"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neon-dark"
                  placeholder="info@canarycare.co.uk"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neon-dark"
                  placeholder="+44 207 123 4567"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Describe your situation and we’ll be in touch to discuss a
                package that’s right for you.
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neon-dark"
                placeholder="Write a message here..."
              />
            </div>

            <button
              type="submit"
              className="bg-neon-dark hover:bg-neon-dark/90 text-white cursor-pointer font-semibold py-2 px-6 rounded transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form, call or email us and we will get back to you.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-neon-dark text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
                <PhoneCall className="text-md" />
              </span>
              <span className="font-medium">+62 831-8430-7973</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-neon-dark text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
                <SiGmail />
              </span>
              <span className="font-medium">contact.adyfas@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InputForm;
