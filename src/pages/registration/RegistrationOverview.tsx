import { Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationOverview = () => (
  <section>
    <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
      <Calendar className="w-7 h-7" /> Overview & Important Dates
    </h2>
    <Card className="bg-secondary/30 border-primary/20">
      <CardContent className="p-6 space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          The eleventh edition of the Welham Boys' School Model United Nations Conference (WELMUN 2026) will be held at Welham Boys' School, Dehradun from <span className="text-primary font-medium">Tuesday, July 28 to Thursday, July 30, 2026</span>. The theme this year is <span className="text-primary font-medium italic">Ordo ab Chao — "Order from Chaos"</span>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {[
            { label: "Conference Dates", value: "July 28 – July 30, 2026" },
            { label: "Venue", value: "Welham Boys' School, Dehradun" },
            { label: "Registration & Fee Deadline", value: "July 1, 2026" },
            { label: "Position Paper Deadline", value: "July 20, 2026" },
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
);

export default RegistrationOverview;
