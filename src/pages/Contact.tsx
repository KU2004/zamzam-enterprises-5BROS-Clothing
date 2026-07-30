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
import FlagAF from "../assets/flags/af.svg";
import FlagAL from "../assets/flags/al.svg";
import FlagAD from "../assets/flags/ad.svg";
import FlagAT from "../assets/flags/at.svg";
import FlagAZ from "../assets/flags/az.svg";
import FlagBS from "../assets/flags/bs.svg";
import FlagBH from "../assets/flags/bh.svg";
import FlagBD from "../assets/flags/bd.svg";
import FlagBB from "../assets/flags/bb.svg";
import FlagBE from "../assets/flags/be.svg";
import FlagBZ from "../assets/flags/bz.svg";
import FlagBT from "../assets/flags/bt.svg";
import FlagBO from "../assets/flags/bo.svg";
import FlagBA from "../assets/flags/ba.svg";
import FlagBR from "../assets/flags/br.svg";
import FlagBN from "../assets/flags/bn.svg";
import FlagBG from "../assets/flags/bg.svg";
import FlagKH from "../assets/flags/kh.svg";
import FlagCA from "../assets/flags/ca.svg";
import FlagKY from "../assets/flags/ky.svg";
import FlagCL from "../assets/flags/cl.svg";
import FlagCO from "../assets/flags/co.svg";
import FlagKM from "../assets/flags/km.svg";
import FlagCR from "../assets/flags/cr.svg";
import FlagHR from "../assets/flags/hr.svg";
import FlagCU from "../assets/flags/cu.svg";
import FlagCY from "../assets/flags/cy.svg";
import FlagCZ from "../assets/flags/cz.svg";
import FlagDK from "../assets/flags/dk.svg";
import FlagDO from "../assets/flags/do.svg";
import FlagEC from "../assets/flags/ec.svg";
import FlagSV from "../assets/flags/sv.svg";
import FlagEE from "../assets/flags/ee.svg";
import FlagFJ from "../assets/flags/fj.svg";
import FlagFI from "../assets/flags/fi.svg";
import FlagGE from "../assets/flags/ge.svg";
import FlagGR from "../assets/flags/gr.svg";
import FlagGD from "../assets/flags/gd.svg";
import FlagGT from "../assets/flags/gt.svg";
import FlagGN from "../assets/flags/gn.svg";
import FlagGW from "../assets/flags/gw.svg";
import FlagGY from "../assets/flags/gy.svg";
import FlagHT from "../assets/flags/ht.svg";
import FlagHN from "../assets/flags/hn.svg";
import FlagHK from "../assets/flags/hk.svg";
import FlagHU from "../assets/flags/hu.svg";
import FlagIS from "../assets/flags/is.svg";
import FlagID from "../assets/flags/id.svg";
import FlagIR from "../assets/flags/ir.svg";
import FlagIQ from "../assets/flags/iq.svg";
import FlagIE from "../assets/flags/ie.svg";
import FlagIL from "../assets/flags/il.svg";
import FlagIT from "../assets/flags/it.svg";
import FlagJM from "../assets/flags/jm.svg";
import FlagJO from "../assets/flags/jo.svg";
import FlagKZ from "../assets/flags/kz.svg";
import FlagKI from "../assets/flags/ki.svg";
import FlagKP from "../assets/flags/kp.svg";
import FlagKR from "../assets/flags/kr.svg";
import FlagKW from "../assets/flags/kw.svg";
import FlagKG from "../assets/flags/kg.svg";
import FlagLA from "../assets/flags/la.svg";
import FlagLV from "../assets/flags/lv.svg";
import FlagLB from "../assets/flags/lb.svg";
import FlagLT from "../assets/flags/lt.svg";
import FlagLU from "../assets/flags/lu.svg";
import FlagMO from "../assets/flags/mo.svg";
import FlagMK from "../assets/flags/mk.svg";
import FlagMY from "../assets/flags/my.svg";
import FlagMV from "../assets/flags/mv.svg";
import FlagML from "../assets/flags/ml.svg";
import FlagMT from "../assets/flags/mt.svg";
import FlagMH from "../assets/flags/mh.svg";
import FlagMR from "../assets/flags/mr.svg";
import FlagMX from "../assets/flags/mx.svg";
import FlagFM from "../assets/flags/fm.svg";
import FlagMD from "../assets/flags/md.svg";
import FlagMC from "../assets/flags/mc.svg";
import FlagMN from "../assets/flags/mn.svg";
import FlagME from "../assets/flags/me.svg";
import FlagNP from "../assets/flags/np.svg";
import FlagNL from "../assets/flags/nl.svg";
import FlagNZ from "../assets/flags/nz.svg";
import FlagNI from "../assets/flags/ni.svg";
import FlagNE from "../assets/flags/ne.svg";
import FlagNO from "../assets/flags/no.svg";
import FlagOM from "../assets/flags/om.svg";
import FlagPK from "../assets/flags/pk.svg";
import FlagPW from "../assets/flags/pw.svg";
import FlagPA from "../assets/flags/pa.svg";
import FlagPG from "../assets/flags/pg.svg";
import FlagPY from "../assets/flags/py.svg";
import FlagPE from "../assets/flags/pe.svg";
import FlagPH from "../assets/flags/ph.svg";
import FlagPL from "../assets/flags/pl.svg";
import FlagPT from "../assets/flags/pt.svg";
import FlagQA from "../assets/flags/qa.svg";
import FlagRE from "../assets/flags/re.svg";
import FlagRO from "../assets/flags/ro.svg";
import FlagSA from "../assets/flags/sa.svg";
import FlagRS from "../assets/flags/rs.svg";
import FlagSG from "../assets/flags/sg.svg";
import FlagSK from "../assets/flags/sk.svg";
import FlagSI from "../assets/flags/si.svg";
import FlagES from "../assets/flags/es.svg";
import FlagLK from "../assets/flags/lk.svg";
import FlagSR from "../assets/flags/sr.svg";
import FlagSE from "../assets/flags/se.svg";
import FlagCH from "../assets/flags/ch.svg";
import FlagSY from "../assets/flags/sy.svg";
import FlagTW from "../assets/flags/tw.svg";
import FlagTJ from "../assets/flags/tj.svg";
import FlagTH from "../assets/flags/th.svg";
import FlagTL from "../assets/flags/tl.svg";
import FlagTG from "../assets/flags/tg.svg";
import FlagTO from "../assets/flags/to.svg";
import FlagTT from "../assets/flags/tt.svg";
import FlagTR from "../assets/flags/tr.svg";
import FlagTM from "../assets/flags/tm.svg";
import FlagTV from "../assets/flags/tv.svg";
import FlagUA from "../assets/flags/ua.svg";
import FlagAE from "../assets/flags/ae.svg";
import FlagUY from "../assets/flags/uy.svg";
import FlagUZ from "../assets/flags/uz.svg";
import FlagVU from "../assets/flags/vu.svg";
import FlagVE from "../assets/flags/ve.svg";
import FlagVN from "../assets/flags/vn.svg";
import FlagYE from "../assets/flags/ye.svg";
import FlagWS from "../assets/flags/ws.svg";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import CONTACT from "../lib/contactInfo";
import { Seo } from "../components/Seo";


const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phoneCountry: z.string().trim().min(1),
  phone: z.string().trim().min(5).max(40),
  message: z.string().trim().max(2000).optional(),
});

const phoneCountries = [
  { value: "+93", label: "Afghanistan", flag: FlagAF },
  { value: "+358", label: "Åland Islands", flag: null },
  { value: "+355", label: "Albania", flag: FlagAL },
  { value: "+213", label: "Algeria", flag: FlagDZ },
  { value: "+1684", label: "American Samoa", flag: null },
  { value: "+376", label: "Andorra", flag: FlagAD },
  { value: "+244", label: "Angola", flag: FlagAO },
  { value: "+1264", label: "Anguilla", flag: null },
  { value: "+672", label: "Antarctica", flag: null },
  { value: "+1268", label: "Antigua and Barbuda", flag: null },
  { value: "+54", label: "Argentina", flag: null },
  { value: "+374", label: "Armenia", flag: null },
  { value: "+297", label: "Aruba", flag: null },
  { value: "+61", label: "Australia", flag: FlagAU },
  { value: "+43", label: "Austria", flag: FlagAT },
  { value: "+994", label: "Azerbaijan", flag: FlagAZ },
  { value: "+1242", label: "Bahamas", flag: FlagBS },
  { value: "+973", label: "Bahrain", flag: FlagBH },
  { value: "+880", label: "Bangladesh", flag: FlagBD },
  { value: "+1246", label: "Barbados", flag: FlagBB },
  { value: "+375", label: "Belarus", flag: null },
  { value: "+32", label: "Belgium", flag: FlagBE },
  { value: "+501", label: "Belize", flag: FlagBZ },
  { value: "+229", label: "Benin", flag: null },
  { value: "+1441", label: "Bermuda", flag: null },
  { value: "+975", label: "Bhutan", flag: FlagBT },
  { value: "+591", label: "Bolivia", flag: FlagBO },
  { value: "+387", label: "Bosnia and Herzegovina", flag: FlagBA },
  { value: "+267", label: "Botswana", flag: FlagBW },
  { value: "+55", label: "Brazil", flag: FlagBR },
  { value: "+246", label: "British Indian Ocean Territory", flag: null },
  { value: "+1", label: "British Virgin Islands", flag: null },
  { value: "+673", label: "Brunei", flag: FlagBN },
  { value: "+359", label: "Bulgaria", flag: FlagBG },
  { value: "+226", label: "Burkina Faso", flag: FlagBF },
  { value: "+257", label: "Burundi", flag: null },
  { value: "+855", label: "Cambodia", flag: FlagKH },
  { value: "+237", label: "Cameroon", flag: FlagCM },
  { value: "+1", label: "Canada", flag: FlagCA },
  { value: "+238", label: "Cape Verde", flag: FlagCV },
  { value: "+1345", label: "Cayman Islands", flag: FlagKY },
  { value: "+236", label: "Central African Republic", flag: null },
  { value: "+235", label: "Chad", flag: null },
  { value: "+56", label: "Chile", flag: FlagCL },
  { value: "+86", label: "China", flag: FlagCN },
  { value: "+886", label: "China (Taiwan)", flag: FlagTW },
  { value: "+61", label: "Christmas Island", flag: null },
  { value: "+672", label: "Cocos (Keeling) Islands", flag: null },
  { value: "+57", label: "Colombia", flag: FlagCO },
  { value: "+269", label: "Comoros", flag: FlagKM },
  { value: "+242", label: "Congo", flag: null },
  { value: "+243", label: "Congo (Democratic Republic)", flag: null },
  { value: "+682", label: "Cook Islands", flag: null },
  { value: "+506", label: "Costa Rica", flag: FlagCR },
  { value: "+225", label: "Côte d'Ivoire", flag: FlagCI },
  { value: "+385", label: "Croatia", flag: FlagHR },
  { value: "+53", label: "Cuba", flag: FlagCU },
  { value: "+357", label: "Cyprus", flag: FlagCY },
  { value: "+420", label: "Czech Republic", flag: FlagCZ },
  { value: "+45", label: "Denmark", flag: FlagDK },
  { value: "+253", label: "Djibouti", flag: FlagDJ },
  { value: "+1767", label: "Dominica", flag: FlagGD },
  { value: "+1", label: "Dominican Republic", flag: FlagDO },
  { value: "+593", label: "Ecuador", flag: FlagEC },
  { value: "+20", label: "Egypt", flag: FlagEG },
  { value: "+503", label: "El Salvador", flag: FlagSV },
  { value: "+240", label: "Equatorial Guinea", flag: null },
  { value: "+291", label: "Eritrea", flag: FlagER },
  { value: "+372", label: "Estonia", flag: FlagEE },
  { value: "+251", label: "Ethiopia", flag: FlagET },
  { value: "+500", label: "Falkland Islands", flag: null },
  { value: "+298", label: "Faroe Islands", flag: null },
  { value: "+679", label: "Fiji", flag: FlagFJ },
  { value: "+358", label: "Finland", flag: FlagFI },
  { value: "+33", label: "France", flag: FlagFR },
  { value: "+594", label: "French Guiana", flag: null },
  { value: "+689", label: "French Polynesia", flag: null },
  { value: "+262", label: "French Southern Territories", flag: null },
  { value: "+241", label: "Gabon", flag: null },
  { value: "+220", label: "Gambia", flag: null },
  { value: "+995", label: "Georgia", flag: FlagGE },
  { value: "+49", label: "Germany", flag: FlagDE },
  { value: "+233", label: "Ghana", flag: FlagGH },
  { value: "+350", label: "Gibraltar", flag: null },
  { value: "+30", label: "Greece", flag: FlagGR },
  { value: "+299", label: "Greenland", flag: null },
  { value: "+1473", label: "Grenada", flag: FlagGD },
  { value: "+590", label: "Guadeloupe", flag: null },
  { value: "+1671", label: "Guam", flag: null },
  { value: "+502", label: "Guatemala", flag: FlagGT },
  { value: "+44", label: "Guernsey", flag: null },
  { value: "+224", label: "Guinea", flag: FlagGN },
  { value: "+245", label: "Guinea-Bissau", flag: FlagGW },
  { value: "+592", label: "Guyana", flag: FlagGY },
  { value: "+509", label: "Haiti", flag: FlagHT },
  { value: "+504", label: "Honduras", flag: FlagHN },
  { value: "+852", label: "Hong Kong", flag: FlagHK },
  { value: "+36", label: "Hungary", flag: FlagHU },
  { value: "+354", label: "Iceland", flag: FlagIS },
  { value: "+91", label: "India", flag: FlagIN },
  { value: "+62", label: "Indonesia", flag: FlagID },
  { value: "+98", label: "Iran", flag: FlagIR },
  { value: "+964", label: "Iraq", flag: FlagIQ },
  { value: "+353", label: "Ireland", flag: FlagIE },
  { value: "+44", label: "Isle of Man", flag: null },
  { value: "+972", label: "Israel", flag: FlagIL },
  { value: "+39", label: "Italy", flag: FlagIT },
  { value: "+1876", label: "Jamaica", flag: FlagJM },
  { value: "+81", label: "Japan", flag: FlagJP },
  { value: "+44", label: "Jersey", flag: null },
  { value: "+962", label: "Jordan", flag: FlagJO },
  { value: "+7", label: "Kazakhstan", flag: FlagKZ },
  { value: "+254", label: "Kenya", flag: FlagKE },
  { value: "+686", label: "Kiribati", flag: FlagKI },
  { value: "+850", label: "Korea (North)", flag: FlagKP },
  { value: "+82", label: "Korea (South)", flag: FlagKR },
  { value: "+965", label: "Kuwait", flag: FlagKW },
  { value: "+996", label: "Kyrgyzstan", flag: FlagKG },
  { value: "+856", label: "Laos", flag: FlagLA },
  { value: "+371", label: "Latvia", flag: FlagLV },
  { value: "+961", label: "Lebanon", flag: FlagLB },
  { value: "+266", label: "Lesotho", flag: FlagLS },
  { value: "+231", label: "Liberia", flag: FlagLR },
  { value: "+218", label: "Libya", flag: null },
  { value: "+423", label: "Liechtenstein", flag: null },
  { value: "+370", label: "Lithuania", flag: FlagLT },
  { value: "+352", label: "Luxembourg", flag: FlagLU },
  { value: "+853", label: "Macao", flag: FlagMO },
  { value: "+389", label: "Macedonia", flag: FlagMK },
  { value: "+261", label: "Madagascar", flag: FlagMG },
  { value: "+265", label: "Malawi", flag: FlagMW },
  { value: "+60", label: "Malaysia", flag: FlagMY },
  { value: "+960", label: "Maldives", flag: FlagMV },
  { value: "+223", label: "Mali", flag: FlagML },
  { value: "+356", label: "Malta", flag: FlagMT },
  { value: "+692", label: "Marshall Islands", flag: FlagMH },
  { value: "+596", label: "Martinique", flag: null },
  { value: "+222", label: "Mauritania", flag: FlagMR },
  { value: "+230", label: "Mauritius", flag: FlagMU },
  { value: "+262", label: "Mayotte", flag: null },
  { value: "+52", label: "Mexico", flag: FlagMX },
  { value: "+691", label: "Micronesia", flag: FlagFM },
  { value: "+373", label: "Moldova", flag: FlagMD },
  { value: "+377", label: "Monaco", flag: FlagMC },
  { value: "+976", label: "Mongolia", flag: FlagMN },
  { value: "+382", label: "Montenegro", flag: FlagME },
  { value: "+212", label: "Morocco", flag: FlagMA },
  { value: "+258", label: "Mozambique", flag: FlagMZ },
  { value: "+95", label: "Myanmar", flag: null },
  { value: "+264", label: "Namibia", flag: FlagNA },
  { value: "+674", label: "Nauru", flag: null },
  { value: "+977", label: "Nepal", flag: FlagNP },
  { value: "+31", label: "Netherlands", flag: FlagNL },
  { value: "+599", label: "Netherlands Antilles", flag: null },
  { value: "+64", label: "New Zealand", flag: FlagNZ },
  { value: "+505", label: "Nicaragua", flag: FlagNI },
  { value: "+227", label: "Niger", flag: FlagNE },
  { value: "+234", label: "Nigeria", flag: FlagNG },
  { value: "+683", label: "Niue", flag: null },
  { value: "+672", label: "Norfolk Island", flag: null },
  { value: "+1670", label: "Northern Mariana Islands", flag: null },
  { value: "+47", label: "Norway", flag: FlagNO },
  { value: "+968", label: "Oman", flag: FlagOM },
  { value: "+92", label: "Pakistan", flag: FlagPK },
  { value: "+680", label: "Palau", flag: FlagPW },
  { value: "+970", label: "Palestine", flag: null },
  { value: "+507", label: "Panama", flag: FlagPA },
  { value: "+675", label: "Papua New Guinea", flag: FlagPG },
  { value: "+595", label: "Paraguay", flag: FlagPY },
  { value: "+51", label: "Peru", flag: FlagPE },
  { value: "+63", label: "Philippines", flag: FlagPH },
  { value: "+64", label: "Pitcairn Islands", flag: null },
  { value: "+48", label: "Poland", flag: FlagPL },
  { value: "+351", label: "Portugal", flag: FlagPT },
  { value: "+1939", label: "Puerto Rico", flag: null },
  { value: "+974", label: "Qatar", flag: FlagQA },
  { value: "+262", label: "Réunion", flag: FlagRE },
  { value: "+40", label: "Romania", flag: FlagRO },
  { value: "+7", label: "Russia", flag: FlagRU },
  { value: "+250", label: "Rwanda", flag: FlagRW },
  { value: "+590", label: "Saint Barthélemy", flag: null },
  { value: "+1869", label: "Saint Kitts and Nevis", flag: null },
  { value: "+1758", label: "Saint Lucia", flag: null },
  { value: "+590", label: "Saint Martin", flag: null },
  { value: "+508", label: "Saint Pierre and Miquelon", flag: null },
  { value: "+1784", label: "Saint Vincent and the Grenadines", flag: null },
  { value: "+685", label: "Samoa", flag: FlagWS },
  { value: "+378", label: "San Marino", flag: null },
  { value: "+239", label: "São Tomé and Príncipe", flag: null },
  { value: "+966", label: "Saudi Arabia", flag: FlagSA },
  { value: "+221", label: "Senegal", flag: FlagSN },
  { value: "+381", label: "Serbia", flag: FlagRS },
  { value: "+248", label: "Seychelles", flag: FlagSC },
  { value: "+232", label: "Sierra Leone", flag: null },
  { value: "+65", label: "Singapore", flag: FlagSG },
  { value: "+421", label: "Slovakia", flag: FlagSK },
  { value: "+386", label: "Slovenia", flag: FlagSI },
  { value: "+677", label: "Solomon Islands", flag: null },
  { value: "+252", label: "Somalia", flag: FlagSO },
  { value: "+27", label: "South Africa", flag: FlagZA },
  { value: "+211", label: "South Sudan", flag: FlagSS },
  { value: "+34", label: "Spain", flag: FlagES },
  { value: "+94", label: "Sri Lanka", flag: FlagLK },
  { value: "+249", label: "Sudan", flag: null },
  { value: "+597", label: "Suriname", flag: FlagSR },
  { value: "+47", label: "Svalbard and Jan Mayen", flag: null },
  { value: "+268", label: "Eswatini", flag: FlagSZ },
  { value: "+46", label: "Sweden", flag: FlagSE },
  { value: "+41", label: "Switzerland", flag: FlagCH },
  { value: "+963", label: "Syria", flag: FlagSY },
  { value: "+886", label: "Taiwan", flag: FlagTW },
  { value: "+992", label: "Tajikistan", flag: FlagTJ },
  { value: "+255", label: "Tanzania", flag: FlagTZ },
  { value: "+66", label: "Thailand", flag: FlagTH },
  { value: "+670", label: "Timor-Leste", flag: FlagTL },
  { value: "+228", label: "Togo", flag: FlagTG },
  { value: "+690", label: "Tokelau", flag: null },
  { value: "+676", label: "Tonga", flag: FlagTO },
  { value: "+1868", label: "Trinidad and Tobago", flag: FlagTT },
  { value: "+216", label: "Tunisia", flag: FlagTN },
  { value: "+90", label: "Turkey", flag: FlagTR },
  { value: "+993", label: "Turkmenistan", flag: FlagTM },
  { value: "+1649", label: "Turks and Caicos Islands", flag: null },
  { value: "+688", label: "Tuvalu", flag: FlagTV },
  { value: "+1", label: "U.S. Virgin Islands", flag: null },
  { value: "+256", label: "Uganda", flag: FlagUG },
  { value: "+380", label: "Ukraine", flag: FlagUA },
  { value: "+971", label: "United Arab Emirates", flag: FlagAE },
  { value: "+44", label: "United Kingdom", flag: FlagGB },
  { value: "+1", label: "United States", flag: FlagUS },
  { value: "+598", label: "Uruguay", flag: FlagUY },
  { value: "+998", label: "Uzbekistan", flag: FlagUZ },
  { value: "+678", label: "Vanuatu", flag: FlagVU },
  { value: "+379", label: "Vatican City", flag: null },
  { value: "+58", label: "Venezuela", flag: FlagVE },
  { value: "+84", label: "Vietnam", flag: FlagVN },
  { value: "+681", label: "Wallis and Futuna", flag: null },
  { value: "+212", label: "Western Sahara", flag: null },
  { value: "+967", label: "Yemen", flag: FlagYE },
  { value: "+260", label: "Zambia", flag: FlagZM },
  { value: "+263", label: "Zimbabwe", flag: FlagZW },
];

type ContactProps = {
  showSeo?: boolean;
  title?: string;
  description?: string;
  submitLabel?: string;
};

export default function Contact({
  showSeo = true,
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
      {showSeo && (
        <Seo
          title="Contact 5BROS Clothing | Request a Quote"
          description="Request a quote for custom clothing manufacturing, private label apparel, uniforms, and bulk production from 5BROS Clothing."
          canonicalPath="/contact"
          keywords="contact clothing manufacturer india, request quote apparel manufacturer, manufacturing enquiry"
        />
      )}
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
                <div className="mt-2 flex gap-0 min-w-0">
                  <div className="flex items-center gap-6 min-w-0">
                    <Popover open={countryPopoverOpen} onOpenChange={setCountryPopoverOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="flex items-center gap-0 border border-gray-300 rounded-l-md px-1 md:px-1 lg:px-3 h-12 bg-white w-36 md:w-28 lg:w-auto lg:min-w-0 lg:max-w-none text-left text-xs lg:text-base text-gray-700"
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
                          <span className={selectedPhoneCountry ? "truncate mx-1 lg:mx-2 lg:whitespace-normal lg:overflow-visible lg:max-w-none" : "truncate mx-1 lg:mx-2 lg:whitespace-normal lg:overflow-visible lg:max-w-none text-gray-400"}>
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
                                  key={`${country.value}-${country.label}`}
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
                    className="flex-1 min-w-0 border border-l-0 border-gray-300 rounded-r-md h-12 px-2 lg:px-4 text-base lg:text-lg text-gray-700 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  />
                </div>
              </label>
              <label className="block w-full">
                <span className="block mb-2 text-sm font-semibold text-gray-800">
                  Message
                </span>
                <div className="mt-2">
                  <div className="flex items-start">
                    <textarea
                      name="message"
                      value={messageText}
                      onChange={(e) => setMessageText(e.currentTarget.value.slice(0, 180))}
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
