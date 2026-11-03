export const PHONE = "971553594858";
export const WA = (t) => "https://wa.me/" + PHONE + (t ? "?text=" + encodeURIComponent(t) : "");
export const SV=[
{s:"ac-repair",i:"wrench",t:"Car AC Repair",tag:"Full-system repair for weak or failed car AC.",intro:"When your AC stops cooling, the cause could be the compressor, condenser, a filter or the gas. We diagnose the whole system first, then repair only what’s needed.",inc:["Condenser, compressor & A/C filter","A/C gas filling","A/C system diagnostics","Vent cleaning"],sig:["AC blows warm air","Weak airflow from the vents","Odd noises when AC is on","AC cuts in and out"],faq:[["How long does a repair take?","It depends on the fault. After diagnosis you get a clear estimate and timing before work starts."],["Do you repair luxury cars?","Yes. We cover luxury and everyday makes. See our Brands page."]]},
{s:"gas-top-up",i:"drop",t:"AC Gas Top-Up",tag:"Pressure check and regas, built for extreme Dubai heat.",intro:"Low refrigerant is one of the most common reasons for weak cooling. We check pressure, refill and test performance so you know it works.",inc:["AC gas refill","Pressure check and regas if needed","Cooling performance test","Gas top-up for all models"],sig:["Cooling fades in traffic","Air is cool, not cold","Long wait to cool the cabin","Last regas was over a year ago"],faq:[["Will a top-up fix my AC?","If low gas is the cause, yes. If there’s a leak, we’ll find it and recommend a repair."],["Is it done at my home?","We can come to you or collect the car. Ask when booking."]]},
{s:"gas-leak-repair",i:"leak",t:"Gas Leak Repair",tag:"We find the leak, seal it, then refill.",intro:"Topping up a leaking system only works for a while. We detect the leak, repair the source and refill so the fix lasts.",inc:["AC gas leak detection & sealing","Pipe, valve and joint inspection","Compressor and condenser check","Gas refill after repair"],sig:["Cooling disappears again after regas","Oily residue near AC pipes","Hissing from the AC system","Compressor won’t engage"],faq:[["How do you find a leak?","We inspect pipes, valves, joints, the compressor and the condenser to locate the source."],["Is gas refilled after the repair?","Yes, refill is part of the service."]]},
{s:"diagnosis",i:"gauge",t:"Car AC Diagnosis",tag:"A full health check at your home or office.",intro:"Not sure what’s wrong? Our diagnosis checks the AC and the systems around it, so you get a clear picture and a free cost estimate.",inc:["AC system health check and gas refill","Cabin & engine air filter inspection","Battery & electrical health diagnosis","Engine oil and fluid level check"],sig:["You can’t tell what’s failing","Warning lights with the AC on","Unusual smells from vents","Before a long summer drive"],faq:[["Is the diagnosis free?","The site advertises free diagnostics and a free cost estimate. Confirm details when you book."],["Do you check more than the AC?","Yes: filters, battery, electrics and fluid levels are included."]]},
{s:"deep-cleaning",i:"spark",t:"Detailed AC Cleaning",tag:"Fresh, sanitised air and restored airflow.",intro:"Dust and sand clog vents and filters in Dubai. A deep clean removes odours, improves airflow and keeps the cabin fresh.",inc:["AC vent deep cleaning & sanitisation","Dashboard & AC panel polish","Cabin air filter replacement","AC blower and coil cleaning"],sig:["Musty smell when AC starts","Dusty or weak airflow","Allergies in the car","Dirty cabin filter"],faq:[["How often should I do this?","Many drivers clean the system and replace the cabin filter once a year."],["Does it remove bad smells?","Sanitisation and coil cleaning target the common sources of odour."]]},
{s:"battery",i:"bat",t:"Battery Services",tag:"Never get stranded: test, replace or jump-start.",intro:"A weak battery can strain your AC and leave you stuck. We test it, inspect the cables and replace or jump-start on the spot.",inc:["Battery testing","Cable inspection","Battery replacement","Jump-start service"],sig:["Slow engine crank","Dim lights at idle","Battery warning light","Car won’t start"],faq:[["Can you jump-start my car?","Yes, jump-start is part of our battery service."],["Do you replace batteries on site?","We can come to your location. Confirm availability when booking."]]}];
export const A=["Downtown Dubai","Palm Jumeirah","Dubai Marina","JBR","Business Bay","Emirates Hills","Al Barari","The Springs & Meadows","Jumeirah Golf Estates","Dubai Hills Estate","Meydan City","DIFC","Al Quoz","Bluewaters Island","Al Wasl","Silicon Oasis","Damac Hills","Motor City"];
export const BR=[["Aston Martin","Luxury"],["Bentley","Luxury"],["BMW","Luxury"],["Cadillac","Luxury"],["Jaguar","Luxury"],["Land Rover","Luxury"],["Lexus","Luxury"],["Mercedes","Luxury"],["Alfa Romeo","Luxury"],["Ferrari","Supercar"],["Lamborghini","Supercar"],["Bugatti","Supercar"],["Hyundai","Everyday"],["Honda","Everyday"],["Kia","Everyday"],["Nissan","Everyday"],["Mitsubishi","Everyday"],["MG","Everyday"],["Citroen","Everyday"],["Opel","Everyday"],["Chevrolet","American"],["Dodge","American"],["Ford","American"],["GMC","American"],["Jeep","American"]];
const BRAND_LOGO_SLUGS = { "Aston Martin": "aston-martin", "Land Rover": "land-rover", Mercedes: "mercedes-benz" };
export const brandLogoUrl = (name) => {
  const slug = BRAND_LOGO_SLUGS[name] || name.toLowerCase().replaceAll(" ", "-");
  return `https://www.carlogos.org/car-logos/${slug}-logo.png`;
};
export const GL=[["Compressor inspection","Diagnosis","gauge",205],["Vent deep cleaning","Cleaning","spark",190],["Gas leak detection","Repair","leak",215],["Condenser check","Repair","wrench",20],["On-site service","On-site","car",200],["Battery testing","Battery","bat",30],["Cabin filter replacement","Cleaning","spark",210],["Gas top-up","Repair","drop",195],["Home diagnosis","On-site","home",220],["Pressure test","Diagnosis","gauge",25],["Blower & coil cleaning","Cleaning","cog",200],["Jump start","Battery","bat",15]];
export const SERVICE_IMAGES={
  "ac-repair":"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85",
  "gas-top-up":"https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80",
  "gas-leak-repair":"https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=900&q=80",
  diagnosis:"https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
  "deep-cleaning":"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
  battery:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80"
};
export const SERVICE_INCLUDE_DETAILS={
  "ac-repair":[
    "Inspection of key components to help identify the fault.",
    "Refrigerant refill where required.",
    "Checks of system operation and performance.",
    "Vent cleaning to support clean airflow."
  ],
  "gas-top-up":[
    "Refill based on the vehicle’s AC requirements.",
    "Pressure checked as part of the regas.",
    "Cooling performance checked after service.",
    "Suitable options for a range of vehicle models."
  ],
  "gas-leak-repair":[
    "Leak source identified before repair.",
    "Common leak points, including pipes and joints, inspected.",
    "Compressor and condenser condition checked.",
    "Refrigerant refilled after the repair."
  ],
  diagnosis:[
    "AC system condition and refrigerant checked.",
    "Cabin and engine air filters inspected.",
    "Battery and electrical health assessed.",
    "Engine oil and fluid levels reviewed."
  ],
  "deep-cleaning":[
    "Vents cleaned and the system sanitised.",
    "Dashboard and AC panel polished.",
    "Cabin filter replaced when needed.",
    "Blower and coil cleaned as part of the service."
  ],
  battery:[
    "Battery condition and charge tested.",
    "Connections checked for visible issues.",
    "Replacement options discussed if required.",
    "Jump-start assistance available when needed."
  ]
};
