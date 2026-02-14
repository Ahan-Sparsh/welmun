import { useState } from "react";

const members = [
  { role: "Secretary General", img: "https://www.welhammun.org/assets/images/sec1.jpg", area: "sg" },
  { role: "Deputy Secretary General", img: "https://www.welhammun.org/assets/images/sec2.jpg", area: "ds" },
  { role: "Director General", img: "https://www.welhammun.org/assets/images/sec3.jpg", area: "dg" },
  { role: "Under Secretary", img: "https://www.welhammun.org/assets/images/sec4.jpg", area: "us" },
];

const techDirectors = [
  { role: "Technical Director 1", img: "https://www.welhammun.org/assets/images/tech1.jpg" },
  { role: "Technical Director 2", img: "https://www.welhammun.org/assets/images/tech2.jpg" },
];

const SecretariatSection = () => {
  const [modalRole, setModalRole] = useState<string | null>(null);

  return (
    <>
      {/* Secretariat */}
      <section id="secretariat" className="min-h-screen flex flex-col justify-center items-center px-[10%] py-24">
        <h2 className="font-display text-4xl text-primary">Secretariat</h2>
        <div className="gold-divider" />
        <div
          className="w-full mt-16 grid gap-12"
          style={{
            gridTemplateAreas: `"sg sg sg" "ds dg us"`,
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {members.map((m) => (
            <div
              key={m.role}
              className="card-hover bg-card p-8 text-center cursor-none transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ gridArea: m.area }}
              onClick={() => setModalRole(m.role)}
            >
              <img src={m.img} alt={m.role} className="w-full h-[300px] object-cover mb-5" loading="lazy" />
              <h3 className="font-display text-xl text-primary">{m.role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Directors */}
      <section id="tech-directors" className="min-h-screen flex flex-col justify-center items-center px-[10%] py-24">
        <h2 className="font-display text-4xl text-primary">Technical Directors</h2>
        <div className="gold-divider" />
        <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {techDirectors.map((t) => (
            <div
              key={t.role}
              className="card-hover bg-card p-8 text-center cursor-none transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
              onClick={() => setModalRole(t.role)}
            >
              <img src={t.img} alt={t.role} className="w-full h-[300px] object-cover mb-5" loading="lazy" />
              <h3 className="font-display text-xl text-primary">{t.role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalRole && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 transition-opacity cursor-none"
          onClick={() => setModalRole(null)}
        >
          <div className="bg-card p-10 max-w-lg text-center" onClick={(e) => e.stopPropagation()}>
            <h2 className="font-display text-3xl text-primary mb-4">{modalRole}</h2>
            <p className="text-light-gold">Biography content here.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SecretariatSection;
