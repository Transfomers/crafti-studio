import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

const HomeContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <div className="bg-black flex items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full px-4 md:px-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-10 rounded-2xl"
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="12"
            className="font-KronaOne w-full h-full text-lg text-red-600 placeholder-red-400 bg-transparent outline-none resize-none rounded-xl"
            placeholder="Type your message..."
            required
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-KronaOne bg-black p-10 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Let's <span className="text-red-500">Talk</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-black border-b border-red-500/40 py-3 text-white placeholder-gray-500 outline-none"
              required
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-black border-b border-red-500/40 py-3 text-white placeholder-gray-500 outline-none"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="rounded-xl w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-3 flex items-center justify-center gap-2 shadow-lg shadow-red-500/50 transition-all"
            >
              Send Message
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeContact;