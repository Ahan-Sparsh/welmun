import { CreditCard, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationFees = () => (
  <section>
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
            Registration charges are <span className="text-primary">not applicable</span> for the Faculty Advisor. Last date to deposit fee: <span className="text-primary">July 1, 2026</span>.
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
);

export default RegistrationFees;
