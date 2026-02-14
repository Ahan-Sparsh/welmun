import { Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationEligibility = () => (
  <section>
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
);

export default RegistrationEligibility;
