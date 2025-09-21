import { FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white text-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />

      <div className="relative max-w-2xl mx-auto px-6 w-full">
        {/* 👑 Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-gold">
          📬 Contact Us
        </h2>

        {/* 📩 Form */}
        <form
          action="https://formsubmit.co/ss@gmail.com"
          method="POST"
          className="space-y-5 w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gold/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
          ></textarea>

          {/* 🔒 Hidden Fields */}
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting KOW! 👑"
          />

          {/* 🚀 Submit Button (centered) */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-gold to-white text-darkblue font-bold px-10 py-3 rounded-full hover:scale-105 transition-transform duration-300"
            >
              <FaPaperPlane className="text-lg" />
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
