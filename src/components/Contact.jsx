import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative w-screen h-full bg-[#fafafa] dark:bg-[#000000] overflow-x-hidden">
      <div className="relative w-full h-full md:w-[90%] 2xl:w-[50%]  mx-auto bg-white dark:bg-[#18181b] p-4 md:p-6 lg:p-12 flex flex-col gap-10 md:gap-14  shadow-lg transition-all duration-300 items-center justify-center">
        <div className="w-[100%] md:w-[80%]">
          {/* Title */}
          <div className="flex flex-col gap-7 ">
            <h1 className="text-3xl lg:text-5xl font-lora font-semibold text-gray-700 dark:text-white w-full lg:w-[70%]">
              Let's Connect
            </h1>
            <p className="text-sm md:text-base font-medium font-robotoSlab text-zinc-600 dark:text-zinc-400 w-full lg:w-[70%]">
              Have a project in mind? I'd love to hear from you. Fill out the form below, and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold font-robotoSlab">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold font-robotoSlab">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-semibold font-robotoSlab">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
