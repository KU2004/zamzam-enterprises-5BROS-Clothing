import { useState, type FormEvent } from "react";
import { z } from "zod";
import { FadeUp } from "../components/FadeUp";
import FlagIN from "../assets/flags/in.svg";
import FlagUS from "../assets/flags/us.svg";
import FlagGB from "../assets/flags/gb.svg";
import FlagAU from "../assets/flags/au.svg";
import FlagDE from "../assets/flags/de.svg";
import FlagFR from "../assets/flags/fr.svg";
import FlagRU from "../assets/flags/ru.svg";
import FlagJP from "../assets/flags/jp.svg";
import FlagCN from "../assets/flags/cn.svg";
import FlagNG from "../assets/flags/ng.svg";
import FlagZA from "../assets/flags/za.svg";
import FlagEG from "../assets/flags/eg.svg";
import FlagKE from "../assets/flags/ke.svg";
import FlagTZ from "../assets/flags/tz.svg";
import FlagGH from "../assets/flags/gh.svg";
import FlagMA from "../assets/flags/ma.svg";
import FlagTN from "../assets/flags/tn.svg";
import FlagUG from "../assets/flags/ug.svg";
import FlagET from "../assets/flags/et.svg";
import FlagDZ from "../assets/flags/dz.svg";
import FlagSD from "../assets/flags/sd.svg";
import FlagZW from "../assets/flags/zw.svg";
import FlagBW from "../assets/flags/bw.svg";
import FlagRW from "../assets/flags/rw.svg";
import FlagSN from "../assets/flags/sn.svg";
import FlagCM from "../assets/flags/cm.svg";
import FlagAO from "../assets/flags/ao.svg";
import FlagMW from "../assets/flags/mw.svg";
import FlagZM from "../assets/flags/zm.svg";
import FlagMU from "../assets/flags/mu.svg";
import FlagLR from "../assets/flags/lr.svg";
import FlagCI from "../assets/flags/ci.svg";
import FlagSS from "../assets/flags/ss.svg";
import FlagER from "../assets/flags/er.svg";
import FlagDJ from "../assets/flags/dj.svg";
import FlagSO from "../assets/flags/so.svg";
import FlagBF from "../assets/flags/bf.svg";
import FlagMG from "../assets/flags/mg.svg";
import FlagMZ from "../assets/flags/mz.svg";
import FlagNA from "../assets/flags/na.svg";
import FlagLS from "../assets/flags/ls.svg";
import FlagSZ from "../assets/flags/sz.svg";
import FlagSC from "../assets/flags/sc.svg";
import FlagCV from "../assets/flags/cv.svg";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import CONTACT from "../lib/contactInfo";
import { Seo } from "../components/Seo";


const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phoneCountry: z.string().trim().min(1),
  phone: z.string().trim().min(5).max(40),
  message: z.string().trim().min(5).max(2000),
});

const phoneCountries = [
  { value: "+91", label: "India", flag: FlagIN },
  { value: "+1", label: "USA", flag: FlagUS },
  { value: "+44", label: "UK", flag: FlagGB },
  { value: "+61", label: "Australia", flag: FlagAU },
  { value: "+49", label: "Germany", flag: FlagDE },
  { value: "+33", label: "France", flag: FlagFR },
  { value: "+7", label: "Russia", flag: FlagRU },
  { value: "+81", label: "Japan", flag: FlagJP },
  { value: "+86", label: "China", flag: FlagCN },
  // African Countries
  { value: "+20", label: "Egypt", flag: FlagEG },
  { value: "+213", label: "Algeria", flag: FlagDZ },
  { value: "+212", label: "Morocco", flag: FlagMA },
  { value: "+216", label: "Tunisia", flag: FlagTN },
  { value: "+218", label: "Libya", flag: null },
  { value: "+249", label: "Sudan", flag: FlagSD },
  { value: "+211", label: "South Sudan", flag: FlagSS },
  { value: "+251", label: "Ethiopia", flag: FlagET },
  { value: "+291", label: "Eritrea", flag: FlagER },
  { value: "+253", label: "Djibouti", flag: FlagDJ },
  { value: "+252", label: "Somalia", flag: FlagSO },
  { value: "+254", label: "Kenya", flag: FlagKE },
  { value: "+255", label: "Tanzania", flag: FlagTZ },
  { value: "+256", label: "Uganda", flag: FlagUG },
  { value: "+250", label: "Rwanda", flag: FlagRW },
  { value: "+257", label: "Burundi", flag: null },
  { value: "+265", label: "Malawi", flag: FlagMW },
  { value: "+260", label: "Zambia", flag: FlagZM },
  { value: "+263", label: "Zimbabwe", flag: FlagZW },
  { value: "+267", label: "Botswana", flag: FlagBW },
  { value: "+264", label: "Namibia", flag: FlagNA },
  { value: "+266", label: "Lesotho", flag: FlagLS },
  { value: "+268", label: "Eswatini", flag: FlagSZ },
  { value: "+27", label: "South Africa", flag: FlagZA },
  { value: "+230", label: "Mauritius", flag: FlagMU },
  { value: "+248", label: "Seychelles", flag: FlagSC },
  { value: "+269", label: "Comoros", flag: null },
  { value: "+261", label: "Madagascar", flag: FlagMG },
  { value: "+258", label: "Mozambique", flag: FlagMZ },
  { value: "+244", label: "Angola", flag: FlagAO },
  { value: "+243", label: "Democratic Republic of Congo", flag: null },
  { value: "+242", label: "Republic of Congo", flag: null },
  { value: "+241", label: "Gabon", flag: null },
  { value: "+237", label: "Cameroon", flag: FlagCM },
  { value: "+240", label: "Equatorial Guinea", flag: null },
  { value: "+236", label: "Central African Republic", flag: null },
  { value: "+235", label: "Chad", flag: null },
  { value: "+234", label: "Nigeria", flag: FlagNG },
  { value: "+227", label: "Niger", flag: null },
  { value: "+223", label: "Mali", flag: null },
  { value: "+222", label: "Mauritania", flag: null },
  { value: "+221", label: "Senegal", flag: FlagSN },
  { value: "+220", label: "Gambia", flag: null },
  { value: "+245", label: "Guinea-Bissau", flag: null },
  { value: "+224", label: "Guinea", flag: null },
  { value: "+232", label: "Sierra Leone", flag: null },
  { value: "+231", label: "Liberia", flag: FlagLR },
  { value: "+225", label: "Côte d'Ivoire", flag: FlagCI },
  { value: "+233", label: "Ghana", flag: FlagGH },
  { value: "+228", label: "Togo", flag: null },
  { value: "+229", label: "Benin", flag: null },
  { value: "+226", label: "Burkina Faso", flag: FlagBF },
  { value: "+238", label: "Cape Verde", flag: FlagCV },
  { value: "+239", label: "São Tomé and Príncipe", flag: null },
];

type ContactProps = {
  title?: string;
  description?: string;
  submitLabel?: string;
};

export default function Contact({
  title = "Contact Us",
  description = "Have questions about products, bulk orders, or partnerships? Our team is happy to assist you.",
  submitLabel = "Send Inquiry",
}: ContactProps) {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [selectedPhoneCountry, setSelectedPhoneCountry] =
    useState<(typeof phoneCountries)[number] | null>(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [countryPopoverOpen, setCountryPopoverOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [consent, setConsent] = useState(false);

  const filteredPhoneCountries = phoneCountries.filter((country) =>
    country.label.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.value.includes(countrySearch),
  );

  const selectedFlag = selectedPhoneCountry?.flag ?? null;
  const selectedCountryText = selectedPhoneCountry
    ? selectedPhoneCountry.value
    : "Select country code";

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!consent) {
      setErr("Please check the consent box to submit the inquiry.");
      return;
    }
    
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      setErr("Please complete the required fields correctly.");
      return;
    }

    setErr(null);
    setSent(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: r.data.name,
          email: r.data.email,
          phone: r.data.phone,
          countryCode: r.data.phoneCountry,
          message: r.data.message,
        }),
      });

      const result = await response.json();

      console.log("Status:", response.status);
      console.log("Result:", result);

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Submission failed");
      }

      setSent(true);
      setErr(null);

      // Temporarily removed to isolate the error
      // e.currentTarget.reset();
      // setCountrySearch("");
      // setSelectedPhoneCountry(null);
      // setCountryPopoverOpen(false);
    } catch (error) {
      console.error("Submit Error:", error);

      setSent(false);
      setErr("Failed to send inquiry. Please try again.");
    }
  };

  return (
    <>
      <Seo title="Contact 5BROS Clothing | Request a Quote" description="Request a quote for custom clothing manufacturing, private label apparel, uniforms, and bulk production from 5BROS Clothing." canonicalPath="/contact" keywords="contact clothing manufacturer india, request quote apparel manufacturer, manufacturing enquiry" />
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 border-2 border-border pointer-events-none"
          style={{
            zIndex: 1,
          }}
        />
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 grid gap-16 grid-cols-1">
          <FadeUp>
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-10 border border-gray-200">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-[#1d2b4f]">
                  {title}
                </h2>

                <p className="mt-4 text-gray-600 text-lg">
                  {description}
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                <label className="block w-full">
                  <span className="block mb-2 text-sm font-semibold text-gray-800">
                    Full Name *
                  </span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full name"
                    required
                    className="w-full h-12 rounded border border-gray-300 px-4 text-gray-700 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </label>

                <label className="block w-full">
                  <span className="block mb-2 text-sm font-semibold text-gray-800">
                    Email Address *
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="w-full h-12 rounded border border-gray-300 px-4 text-gray-700 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </label>

              <label className="block w-full">
                <span className="block mb-2 text-sm font-semibold text-gray-800">
                  Phone Number *
                </span>
                <div className="mt-2 flex min-w-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <Popover open={countryPopoverOpen} onOpenChange={setCountryPopoverOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="flex items-center gap-2 border border-gray-300 rounded-l-md px-3 h-12 bg-white min-w-[120px] text-left text-sm text-gray-700"
                        >
                          {selectedFlag ? (
                            <img
                              src={selectedFlag}
                              alt={selectedPhoneCountry?.label ?? "flag"}
                              className="w-5 h-3 object-cover"
                            />
                          ) : (
                            <div className="w-5 h-3" />
                          )}
                          <span className={selectedPhoneCountry ? "truncate" : "truncate text-gray-400"}>
                            {selectedCountryText}
                          </span>
                          <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                        </button>
                      </PopoverTrigger>

                      <PopoverContent align="start" className="w-full max-w-[20rem] p-3">
                        <div className="rounded-md border border-border bg-popover text-popover-foreground shadow-md">
                          <div className="px-3 py-2">
                            <input
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.currentTarget.value)}
                              placeholder="Search country or code..."
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition focus:border-slate-400 focus:ring-1 focus:ring-slate-200"
                            />
                          </div>
                          <div className="max-h-72 overflow-y-auto border-t border-muted">
                            {filteredPhoneCountries.length === 0 ? (
                              <div className="p-4 text-sm text-muted-foreground">
                                No country found.
                              </div>
                            ) : (
                              filteredPhoneCountries.map((country) => (
                                <button
                                  key={country.value}
                                  type="button"
                                  onClick={() => {
                                    setSelectedPhoneCountry(country);
                                    setCountrySearch("");
                                    setCountryPopoverOpen(false);
                                  }}
                                  className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-foreground transition hover:bg-accent/20"
                                >
                                  {country.flag ? (
                                    <img
                                      src={country.flag}
                                      alt={country.label}
                                      className="w-5 h-3 object-cover"
                                    />
                                  ) : (
                                    <div className="w-5 h-3" />
                                  )}
                                  <span>{country.label}</span>
                                  <span className="ml-auto text-xs text-muted-foreground">
                                    {country.value}
                                  </span>
                                </button>
                              ))
                            )}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    <input type="hidden" name="phoneCountry" value={selectedPhoneCountry?.value ?? ""} />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="81234 56789"
                    required
                    className="flex-1 min-w-0 border border-l-0 border-gray-300 rounded-r-md h-12 px-4 text-gray-700 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>
              </label>
              <label className="block w-full">
                <span className="block mb-2 text-sm font-semibold text-gray-800">
                  Message *
                </span>
                <div className="mt-2">
                  <div className="flex items-start">
                    <textarea
                      name="message"
                      value={messageText}
                      onChange={(e) => setMessageText(e.currentTarget.value.slice(0, 180))}
                      required
                      rows={6}
                      maxLength={180}
                      className="w-full border border-gray-300 rounded p-4 resize-none text-gray-700 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-2">
                    {messageText.length} / 180
                  </div>
                </div>
              </label>

              <div className="mt-4 flex flex-col gap-4 items-start">
                <label className="flex items-center gap-3 w-full">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.currentTarget.checked)}
                    className="w-4 h-4 rounded bg-background border border-input"
                  />
                  <span className="text-sm text-muted-foreground">I am okay with 5BROS Clothing contacting me regarding my inquiry.</span>
                </label>
                <button
                  type="submit"
                  className="bg-[#0F2B5B] text-white px-10 py-4 rounded font-semibold hover:bg-[#173d78] transition"
                >
                  <span className="font-semibold">
                    {sent ? "Inquiry Submitted" : submitLabel}
                  </span>
                </button>

                {sent && (
                  <div className="rounded-xl border border-green-300 bg-green-50 p-6">
                    <h3 className="text-xl font-semibold text-green-700">
                      🎉 Thank You!
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-green-700">
                      Your inquiry has been submitted successfully.
                    </p>

                    <p className="mt-2 text-sm leading-6 text-green-700">
                      Our team has received your request and will contact you within
                      <strong> 24 business hours.</strong>
                    </p>

                    <p className="mt-2 text-sm leading-6 text-green-700">
                      Thank you for choosing <strong>5BROS Clothing</strong>.
                      We look forward to working with you.
                    </p>
                  </div>
                )}

                {err && (
                  <div className="rounded-xl border border-red-300 bg-red-50 p-6">
                    <h3 className="text-xl font-semibold text-red-700">
                      Submission Failed
                    </h3>

                    <p className="mt-2 text-sm text-red-700">{err}</p>
                  </div>
                )}
              </div>
            </form>
            </div>
          </FadeUp>

          <FadeUp delay={120}>
            <div className="border-2 border-border p-8 space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gray-600 font-semibold">
                  Visit
                </p>
                <a 
                  href="https://maps.app.goo.gl/psi9P8NZEVyrTFio9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-start gap-3 text-base text-gray-700 font-semibold hover:text-[#173d4b]/80 transition wrap-break-word"
                >
                  <MapPin size={16} className="mt-0.5 text-[#1d2b4f] shrink-0" /> 
                    <span>{CONTACT.addressFull}</span>
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gray-600 font-semibold">
                  Email
                </p>
                <p className="mt-2 flex items-start gap-3 text-base text-gray-700 font-semibold">
                  <Mail size={16} className="mt-0.5 text-[#1d2b4f]" />{" "}
                    {CONTACT.email}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gray-600 font-semibold">
                  Phone
                </p>
                <p className="mt-2 flex flex-col gap-2 text-base text-gray-700 font-semibold">
                  <span className="flex items-center gap-3">
                    <Phone size={16} className="mt-0.5 text-[#1d2b4f]" />
                    <img src={FlagIN} alt="India flag" className="w-5 h-3 object-cover" />
                    <span>{CONTACT.phones[0]}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <Phone size={16} className="mt-0.5 text-[#1d2b4f]" />
                    <img src={FlagIN} alt="India flag" className="w-5 h-3 object-cover" />
                    <span>{CONTACT.phones[1]}</span>
                  </span>
                </p>
              </div>
              <div>
                
              </div>
            </div>
            <div className="mt-8 border-2 border-border overflow-hidden">
              <iframe
                title="Simnani Enterprises Mumbai location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.534!2d72.9074656!3d19.0629591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c733d20733c5%3A0xf89e08d06a5ae96a!2sSIMNANI%20ENTERPRISES%20(5%20BROS)%20ZAM%20ZAM%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1719231600000"
                className="w-full h-80"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://maps.app.goo.gl/psi9P8NZEVyrTFio9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0F2B5B] text-white px-10 py-4 rounded font-semibold hover:bg-[#173d78] transition"
              >
                View on Google Maps
              </a>
            </div>
          </FadeUp>
        </div>
        </div>
      </section>
    </>
  );
}
