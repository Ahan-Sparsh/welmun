import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Calendar,
  Users,
  CreditCard,
  MapPin,
  FileText,
  HelpCircle,
  CheckCircle,
  AlertCircle,
  Download,
  Hotel,
  Phone,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  { id: "overview", label: "Overview", icon: Calendar },
  { id: "eligibility", label: "Eligibility", icon: Users },
  { id: "process", label: "Process", icon: FileText },
  { id: "fees", label: "Fees & Payment", icon: CreditCard },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "downloads", label: "Downloads", icon: Download },
  { id: "faqs", label: "FAQs", icon: HelpCircle },
];

const hotels = [
  {
    name: "Hotel Sakoon",
    contact: "Mr. Sarthak — 7500180033",
    email: "info.hotelsakoon@gmail.com",
    rooms: [
      { type: "Deluxe", single: "₹1,750", double: "₹1,900" },
      { type: "Super Deluxe", single: "₹3,052 (1–4 guests)", double: "—" },
    ],
    tax: "12%",
    includes: "Buffet breakfast, Free WiFi, Free parking",
  },
  {
    name: "Hotel Alaya",
    contact: "+91 135 2747060 / +91 9758587060",
    email: "info@hotelalaya.com",
    rooms: [
      { type: "Signature Room", single: "₹3,760", double: "—" },
      { type: "Signature Twin", single: "₹4,000", double: "—" },
      { type: "Alaya Manor Suite", single: "₹5,000", double: "—" },
    ],
    tax: "12%",
    includes: "Free WiFi, Free parking. Extra bed: ₹1,040",
  },
  {
    name: "Hotel Marbella",
    contact: "+91 135 2971313 / Mr. Bhatt — 8171472367",
    email: "fom@marbella.co.in",
    rooms: [
      { type: "Premier Room", single: "₹3,500", double: "₹4,000" },
    ],
    tax: "12%",
    includes: "Buffet breakfast, Tea/coffee makers, WiFi. Meals: ₹499 + taxes",
  },
  {
    name: "Spree Hotel Kriday",
    contact: "Mr. Dharmendra Raghav — 9520897972",
    email: "spreeddun@spreehotel.com",
    rooms: [
      { type: "Standard", single: "₹2,800", double: "₹3,300" },
      { type: "Superior", single: "₹3,000", double: "₹3,500" },
      { type: "Superior (Premium)", single: "₹3,700", double: "₹4,200" },
    ],
    tax: "12%",
    includes: "Buffet breakfast, Tea/coffee makers, WiFi. Meals: ₹499 + taxes",
  },
];

const Registration = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const headerRef = useScrollReveal<HTMLDivElement>(0.1);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageLayout backgroundImage="/images/addressals-bg.jpg">
      <div ref={headerRef} className="reveal-section flex flex-col items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl text-primary tracking-[8px] uppercase text-center"
        >
          Registration
        </motion.h1>
        <div className="gold-divider" />
        <p className="text-muted-foreground text-lg text-center max-w-2xl">
          Everything you need to know to register for WELMUN 2025.
        </p>
      </div>

      <div className="w-full max-w-7xl flex gap-10">
        {/* Main Content */}
        <div className="flex-1 space-y-20">
          {/* Overview */}
          <section id="overview" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <Calendar className="w-7 h-7" /> Overview & Important Dates
            </h2>
            <Card className="bg-secondary/30 border-primary/20">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The eleventh edition of the Welham Boys' School Model United Nations Conference (WELMUN 2025) will be held at Welham Boys' School, Dehradun from <span className="text-primary font-medium">Wednesday, July 30 to Friday, August 1, 2025</span>. The theme this year is <span className="text-primary font-medium italic">Orbis Vox — "Voice of the World"</span>.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { label: "Conference Dates", value: "July 30 – August 1, 2025" },
                    { label: "Venue", value: "Welham Boys' School, Dehradun" },
                    { label: "Registration & Fee Deadline", value: "July 1, 2025" },
                    { label: "Position Paper Deadline", value: "July 20, 2025" },
                    { label: "Delegation Size", value: "7–12 delegates per delegation" },
                    { label: "Age Group", value: "Classes 8–12 (13–18 years)" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-primary font-display text-sm">{item.label}</p>
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Eligibility */}
          <section id="eligibility" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <Users className="w-7 h-7" /> Eligibility & Delegation Guidelines
            </h2>
            <Card className="bg-secondary/30 border-primary/20">
              <CardContent className="p-6 space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  WELMUN is open to students from schools across India. Each delegation must be accompanied by a Faculty Advisor responsible for the conduct and punctuality of their students.
                </p>
                <div className="space-y-3">
                  {[
                    "Students from Classes 8 to 12 (age group 13–18 years) are eligible to participate.",
                    "Register a delegation of 7–12 delegates, one for each committee.",
                    "Maximum number of delegates allowed in one delegation is 12.",
                    "You are permitted to send more delegates as part of a second delegation.",
                    "Each delegation must be accompanied by at least one teacher escort.",
                    "Allocation of committee and country is at the discretion of the Secretariat.",
                    "All delegates must adhere to the Conference Policy and Code of Conduct.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Registration Process */}
          <section id="process" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <FileText className="w-7 h-7" /> Registration Process
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "Step 1",
                  title: "Submit the Delegate Information Form",
                  desc: "Fill out the Delegate Information Form with details of all participating delegates and the Faculty Advisor(s). Include committee preferences for each delegate.",
                },
                {
                  step: "Step 2",
                  title: "Submit the Indemnity Form",
                  desc: "The Principal must sign and seal the Indemnity Form granting consent for the delegation to participate. Submit a scanned copy via email.",
                },
                {
                  step: "Step 3",
                  title: "Complete Payment",
                  desc: "Transfer the school registration fee (₹10,000) and per-delegate fee via bank transfer. Email transaction details to the Conference Director.",
                },
                {
                  step: "Step 4",
                  title: "Receive Country/Portfolio Allocation",
                  desc: "The Secretariat will assign country and committee allocations based on preference and availability. Allocations will be communicated via email.",
                },
                {
                  step: "Step 5",
                  title: "Submit Position Papers",
                  desc: "Each delegate must submit a position paper for their assigned committee by July 20, 2025. Guidelines are provided in each committee's Background Guide.",
                },
              ].map((item, i) => (
                <Card key={i} className="bg-secondary/30 border-primary/20 hover-lift">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="font-display text-primary text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-primary mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-primary font-display">Note:</span> Registration will be considered complete on the receipt of duly filled forms, scanned copy of the Indemnity Form, and on the receipt of transaction details. Email all documents to{" "}
                <a href="mailto:kirantripathi@welhamboys.org" className="text-primary hover:underline cursor-none">kirantripathi@welhamboys.org</a> latest by <span className="text-primary">July 1, 2025</span>.
              </p>
            </div>
          </section>

          {/* Fees */}
          <section id="fees" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <CreditCard className="w-7 h-7" /> Fees & Payment
            </h2>
            <Card className="bg-secondary/30 border-primary/20">
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/15 text-center">
                    <p className="font-display text-primary text-xs uppercase tracking-wider mb-2">School Registration</p>
                    <p className="font-display text-3xl text-primary">₹10,000</p>
                    <p className="text-muted-foreground text-xs mt-2">Per school (one-time)</p>
                  </div>
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/15 text-center">
                    <p className="font-display text-primary text-xs uppercase tracking-wider mb-2">Outstation Delegate</p>
                    <p className="font-display text-3xl text-primary">₹9,500</p>
                    <p className="text-muted-foreground text-xs mt-2">Per delegate</p>
                  </div>
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/15 text-center">
                    <p className="font-display text-primary text-xs uppercase tracking-wider mb-2">Local Delegate</p>
                    <p className="font-display text-3xl text-primary">₹8,800</p>
                    <p className="text-muted-foreground text-xs mt-2">Per delegate</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">
                    Registration charges are <span className="text-primary">not applicable</span> for the Faculty Advisor. Last date to deposit fee: <span className="text-primary">July 1, 2025</span>.
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-lg text-primary mb-3">Bank Transfer Details</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    {[
                      { label: "Account Name", value: "Welham Boys' School Society" },
                      { label: "Account No.", value: "02251450000363" },
                      { label: "Bank", value: "HDFC Bank Ltd." },
                      { label: "Branch", value: "Rajpur Road, Dehradun (U.K.)" },
                      { label: "IFSC Code", value: "HDFC0000225" },
                      { label: "SWIFT Code", value: "HDFCINBBXXX" },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-2 p-2 bg-primary/5 rounded border border-primary/10">
                        <span className="text-primary font-display text-xs min-w-[100px]">{item.label}:</span>
                        <span className="text-muted-foreground text-xs">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <h4 className="font-display text-sm text-destructive mb-1">Refund Policy</h4>
                  <p className="text-muted-foreground text-sm">
                    If a school registers and withdraws from the conference 7 days prior to the event, no fees will be refunded to the participating school.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Hotels */}
          <section id="hotels" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <Hotel className="w-7 h-7" /> Hotel Accommodation
            </h2>
            <div className="mb-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Outstation delegates are expected to book accommodation in hotels. Give three preferences from the list below to the Journey In-charge at{" "}
                <a href="mailto:journeywbs@welhamboys.org" className="text-primary hover:underline cursor-none">journeywbs@welhamboys.org</a> / +91-8171033339. Pick-and-drop facility will be provided from Dehradun Railway Station, Jolly Grant Airport, and the local bus stand.
              </p>
            </div>
            <div className="space-y-4">
              {hotels.map((hotel) => (
                <Card key={hotel.name} className="bg-secondary/30 border-primary/20">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="font-display text-lg text-primary">{hotel.name}</h3>
                      <span className="text-xs text-muted-foreground">+ {hotel.tax} GST</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {hotel.contact}</span>
                      <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {hotel.email}</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-primary/15">
                            <th className="text-left py-2 text-primary font-display text-xs">Room Type</th>
                            <th className="text-left py-2 text-primary font-display text-xs">Single</th>
                            <th className="text-left py-2 text-primary font-display text-xs">Double</th>
                          </tr>
                        </thead>
                        <tbody>
                          {hotel.rooms.map((room) => (
                            <tr key={room.type} className="border-b border-primary/5">
                              <td className="py-2 text-muted-foreground text-xs">{room.type}</td>
                              <td className="py-2 text-muted-foreground text-xs">{room.single}</td>
                              <td className="py-2 text-muted-foreground text-xs">{room.double}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-muted-foreground italic">{hotel.includes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Downloads */}
          <section id="downloads" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <Download className="w-7 h-7" /> Downloadable Forms
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Invitation Letter", desc: "Official invitation from the Principal of Welham Boys' School.", file: "/docs/WELMUN-Invite.docx" },
                { title: "Delegate Information Form", desc: "Details of delegates, teacher escorts, and committee preferences.", file: "/docs/WELMUN-Delegate_Information.docx" },
                { title: "Indemnity Form", desc: "Consent form to be signed and sealed by the Principal.", file: "/docs/WELMUN-Indemnity_Form.docx" },
                { title: "Hotel Tariff", desc: "List of partner hotels with rates and contact details.", file: "/docs/WELMUN-Hotel_Tariff.docx" },
              ].map((doc) => (
                <a key={doc.title} href={doc.file} download className="block group">
                  <Card className="bg-secondary/30 border-primary/20 hover:border-primary/50 hover:bg-secondary/50 transition-colors duration-300 hover-lift h-full">
                    <CardContent className="p-5 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-sm text-primary group-hover:text-foreground transition-colors">{doc.title}</h3>
                        <p className="text-muted-foreground text-xs mt-1">{doc.desc}</p>
                      </div>
                      <Download className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors shrink-0" />
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <HelpCircle className="w-7 h-7" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How many delegates can we send?",
                  a: "Register a delegation of 7–12 delegates, one for each committee. Maximum 12 delegates per delegation. You may send additional delegates as part of a second delegation.",
                },
                {
                  q: "Can we choose our committee preferences?",
                  a: "Yes, you can indicate committee preferences in the Delegate Information Form. However, final allocation of committee and country is at the discretion of the Secretariat.",
                },
                {
                  q: "Is the Faculty Advisor charged?",
                  a: "No, registration charges are not applicable for the Faculty Advisor.",
                },
                {
                  q: "What is the dress code?",
                  a: "Delegates must wear smart western formals (suit and tie) or Indian formals (kurta-pyjama) at all times during committee sessions.",
                },
                {
                  q: "Is accommodation provided on campus?",
                  a: "No, outstation delegates are expected to book accommodation in the partner hotels listed above. The school will arrange daily pick-and-drop between the hotel and campus.",
                },
                {
                  q: "What is the refund policy?",
                  a: "If a school registers and withdraws 7 days prior to the event, no fees will be refunded.",
                },
                {
                  q: "How do I contact the organizers?",
                  a: "Secretary-General Atharva Agrawal: welmun@welhamboys.org / WhatsApp +91-7007800474. Conference Director Ms. Kiran Tripathi: kirantripathi@welhamboys.org / WhatsApp +91-7409809908.",
                },
              ].map((item, i) => (
                <Card key={i} className="bg-secondary/30 border-primary/20">
                  <CardContent className="p-5">
                    <h3 className="font-display text-base text-primary mb-2">{item.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact */}
          <div className="p-6 bg-secondary/30 rounded-lg border border-primary/20 text-center space-y-3">
            <h3 className="font-display text-xl text-primary">Questions?</h3>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-muted-foreground">
              <div>
                <p className="text-primary font-display text-xs mb-1">Secretary-General</p>
                <p>Atharva Agrawal</p>
                <a href="mailto:welmun@welhamboys.org" className="text-primary hover:underline cursor-none text-xs">welmun@welhamboys.org</a>
                <p className="text-xs">WhatsApp: +91-7007800474</p>
              </div>
              <div>
                <p className="text-primary font-display text-xs mb-1">Conference Director</p>
                <p>Ms. Kiran Tripathi</p>
                <a href="mailto:kirantripathi@welhamboys.org" className="text-primary hover:underline cursor-none text-xs">kirantripathi@welhamboys.org</a>
                <p className="text-xs">WhatsApp: +91-7409809908</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Nav */}
        <nav className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-28 space-y-1">
            <p className="font-display text-xs text-primary/60 uppercase tracking-[3px] mb-4">On this page</p>
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 cursor-none text-left ${
                  activeSection === id
                    ? "bg-primary/15 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="font-display text-xs tracking-wider">{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </PageLayout>
  );
};

export default Registration;
