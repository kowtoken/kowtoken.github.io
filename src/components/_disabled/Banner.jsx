import bannerImg from "../assets/banner.png"; // 🖼️ Φόντο εικόνα
import logo from "../assets/LOGO.png";        // ✅ Λογότυπο πάνω απ’ το κείμενο

const Banner = () => {
  return (
    <section
      id="promo-banner"
      className="relative w-full h-[380px] sm:h-[327px] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Περιεχόμενο */}
      <div className="relative z-10 px-6">
        <img
          src={logo}
          alt="KOW Logo"
          className="h-20 sm:h-24 mb-6 mx-auto"
        />
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow">
          King of World Token (KOW)
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 drop-shadow">
          Απόκτησε $KOW token με bonus – για περιορισμένο χρονικό διάστημα.
        </p>
      </div>
    </section>
  );
};

export default Banner;
