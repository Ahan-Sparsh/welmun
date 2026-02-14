import { Hotel, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

const RegistrationHotels = () => (
  <section>
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
);

export default RegistrationHotels;
