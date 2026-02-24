import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineHouse } from "react-icons/md";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("from_name", "Portfolio Contact Form");
    formData.append("subject", "New Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully ✔");
        event.target.reset();
      } else {
        setResult("Failed to send message ❌");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="relative bg-[#0F071A] py-28 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-700/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-700/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* FORM SIDE */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let’s Work Together
          </h2>

          <p className="text-gray-400 mb-8">
            Have a project in mind? Let’s build something amazing.
          </p>

          <form onSubmit={onSubmit} className="space-y-6">
            <input
              type="hidden"
              name="access_key"
              value="0c7e88dc-f07f-404a-931e-d990600e566c"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="Firstname"
                placeholder="First Name"
                required
                className="w-full bg-black/60 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />

              <input
                type="text"
                name="Lastname"
                placeholder="Last Name"
                required
                className="w-full bg-black/60 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full bg-black/60 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="w-full bg-black/60 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />
            </div>

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-black/60 text-white border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <p className="text-sm text-gray-400 mt-3">{result}</p>
            )}
          </form>
        </div>

        {/* CONTACT INFO SIDE */}
        <div className="space-y-10">

          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-2xl group-hover:scale-110 transition">
              <IoCallOutline />
            </div>
            <div>
              <p className="text-gray-400">Phone</p>
              <a
                href="tel:+917318443847"
                className="text-xl text-white font-semibold"
              >
                +91 7318443847
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-2xl group-hover:scale-110 transition">
              <CgMail />
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <a
                href="mailto:abhimanyukharwar65@gmail.com"
                className="text-xl text-white font-semibold"
              >
                abhimanyukharwar65@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-2xl group-hover:scale-110 transition">
              <MdOutlineHouse />
            </div>
            <div>
              <p className="text-gray-400">Address</p>
              <p className="text-xl text-white font-semibold">
                Kanpur, Uttar Pradesh, India
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;