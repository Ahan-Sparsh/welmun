import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useScrollReveal<HTMLDivElement>(0.1);
  const contactRef = useScrollReveal<HTMLDivElement>(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <h1 className="font-display text-5xl text-primary mb-4">Contact Us</h1>
      <div className="gold-divider mb-12" />

      <div ref={formRef} className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 reveal-section">
        {/* Email Form */}
        <div>
          <h2 className="font-display text-2xl text-primary mb-6">Email Us</h2>
          {submitted ? (
            <p className="text-accent text-lg">Thanks for submitting!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-muted-foreground text-sm mb-1 block">First name</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full bg-card border border-primary/30 text-foreground px-3 py-2 focus:outline-none focus:border-primary cursor-none"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground text-sm mb-1 block">Last name</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full bg-card border border-primary/30 text-foreground px-3 py-2 focus:outline-none focus:border-primary cursor-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-muted-foreground text-sm mb-1 block">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-card border border-primary/30 text-foreground px-3 py-2 focus:outline-none focus:border-primary cursor-none"
                />
              </div>
              <div>
                <label className="text-muted-foreground text-sm mb-1 block">Write a message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-card border border-primary/30 text-foreground px-3 py-2 focus:outline-none focus:border-primary resize-none cursor-none"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-none"
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Find Us */}
        <div>
          <h2 className="font-display text-2xl text-primary mb-6">Find Us</h2>
          <div className="space-y-2 text-muted-foreground">
            <h3 className="font-display text-xl text-primary">Our Address</h3>
            <p className="font-display text-lg text-primary">Welham Boys' School</p>
            <p>5, Circular Road Dalanwala, Dehradun - 248001</p>
            <p>0135-2657120</p>
          </div>
        </div>
      </div>

      {/* Contact People */}
      <div ref={contactRef} className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 reveal-section">
        <div className="text-center">
          <h2 className="font-display text-2xl text-primary underline mb-2">Conference Director</h2>
          <p className="text-muted-foreground">Ms. Kiran Tripathi</p>
          <p className="text-muted-foreground">+91-7409809908</p>
          <a href="mailto:kirantripathi@welhamboys.org" className="text-primary hover:underline cursor-none">
            kirantripathi@welhamboys.org
          </a>
        </div>
        <div className="text-center">
          <h2 className="font-display text-2xl text-primary underline mb-2">Secretary-General</h2>
          <p className="text-muted-foreground">Atharva Agarwal</p>
          <p className="text-muted-foreground">+91-8709633816</p>
          <a href="mailto:secretarygeneral@welhamboys.org" className="text-primary hover:underline cursor-none">
            secretarygeneral@welhamboys.org
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
