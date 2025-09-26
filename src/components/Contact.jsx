import { useForm } from "@formspree/react";
import { FaPaperPlane } from "react-icons/fa";
import successImg from "../assets/success.png"; 

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mqayazkj");

  return (
    <section
      id="contact-us"
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white text-center relative overflow-hidden"
    >
      {}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />

      <div className="relative max-w-3xl mx-auto px-6 w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-gold">
          📬 Contact Us
        </h2>

        {}
        {state.succeeded ? (
          <div className="w-full bg-green-900/20 border border-green-500 rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-xl animate-fadeIn">
            <img
              src={successImg}
              alt="Message Sent"
              className="w-full max-w-sm mb-6 rounded-2xl shadow-lg"
            />
            <h3 className="text-2xl font-bold text-green-400 mb-2">
              🎉 Message Sent Successfully!
            </h3>
            <p className="text-gray-300 text-lg">
              Thank you for contacting <span className="text-gold">KOW</span>.
              
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 w-full">
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

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center gap-2 bg-gradient-to-r from-gold to-white text-darkblue font-bold px-10 py-3 rounded-full hover:scale-105 transition-transform duration-300 disabled:opacity-50"
              >
                <FaPaperPlane className="text-lg" />
                {state.submitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
