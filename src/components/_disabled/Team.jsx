const teamMembers = [
  {
    name: "Αλέξης Παπαδόπουλος",
    role: "Founder & CEO",
    img: "https://ui-avatars.com/api/?name=Alexis+Papadopoulos&background=0D1117&color=fff",
    twitter: "https://twitter.com/your_twitter",
    linkedin: "https://linkedin.com/in/your_linkedin",
  },
  {
    name: "Μαρία Δημητρίου",
    role: "Smart Contract Developer",
    img: "https://ui-avatars.com/api/?name=Maria+Dimitriou&background=0D1117&color=fff",
    twitter: "",
    linkedin: "https://linkedin.com/in/maria",
  },
  {
    name: "Νίκος Αντωνίου",
    role: "Marketing & Community",
    img: "https://ui-avatars.com/api/?name=Nikos+Antoniou&background=0D1117&color=fff",
    twitter: "https://twitter.com/nikos",
    linkedin: "",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white animate-fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">👥 Η Ομάδα</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-white/20"
              />
              <h3 className="text-xl font-semibold text-yellow-400">{member.name}</h3>
              <p className="text-gray-300 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 text-white text-xl">
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter hover:text-yellow-400"></i>
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin hover:text-yellow-400"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
