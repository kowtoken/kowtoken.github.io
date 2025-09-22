const socials = [
  {
    name: "X",
    icon: "fa-brands fa-x-twitter",
    url: "https://x.com/Kingofworl32190",
    color: "text-sky-400 hover:text-sky-300",
  },
  {
    name: "Telegram",
    icon: "fab fa-telegram",
    url: "https://t.me/kingofworldtoken",
    color: "text-blue-400 hover:text-blue-300",
  },
  {
    name: "Discord",
    icon: "fab fa-discord",
    url: "https://discord.com/invite/XkVMDT59Yz",
    color: "text-indigo-400 hover:text-indigo-300",
  },

  {
    name: "Medium",
    icon: "fab fa-medium",
    url: "https://medium.com/@tokenkingofworld",
    color:
      "text-black hover:text-gray-800 bg-white px-3 py-1 rounded-full", // 👈 Medium style
  },
  
  {
    name: "Mastodon",
    icon: "fab fa-mastodon",
    url: "https://mastodon.social/@KingOfWorldToken",
    color: "text-[#6364FF] hover:text-[#4e4fff]", // Mastodon purple
  },
];

import socialImage from "../assets/pics/KOWCommunity.jpg";   // 👈 αριστερή εικόνα
import rightImage from "../assets/pics/kowcumm.jpg"; // 👈 νέα εικόνα δεξιά

const SocialLinks = () => {
  return (
    <section
      id="social-media"
      className="min-h-screen flex items-center py-20 bg-gradient-to-b from-darkblue via-black to-darkblue text-white text-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />

      {/* 🚀 Εικόνα αριστερά */}
      <img
        src={socialImage}
        alt="Social Media decoration left"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[630px] max-w-[40%] opacity-90 pointer-events-none"
      />

      {/* 🚀 Εικόνα δεξιά */}
      <img
        src={rightImage}
        alt="Social Media decoration right"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-[550px] max-w-[40%] opacity-90 pointer-events-none"
      />

      {/* Περιεχόμενο */}
      <div className="relative max-w-3xl mx-auto px-6 z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 text-gold">
          🌐 Social Media
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md border border-gold/30 rounded-full px-6 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-110"
            >
              <i className={`${social.icon} text-xl ${social.color}`} />
              <span className={`text-sm font-semibold ${social.color}`}>
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
