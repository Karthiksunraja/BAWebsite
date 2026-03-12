<html>
This is RAKK PROPERTY ADVISORY Page

</html>/*import React from "react";

export default function RAKKPropertyAdvisory() {
  const nav = [
    "How It Works",
    "Services",
    "Case Studies",
    "SEO",
    "Contact",
  ];

  const steps = [
    {
      number: "01",
      title: "Strategy",
      text: "We define your goals, borrowing power and suburb strategy whether you are an investor or owner occupier.",
    },
    {
      number: "02",
      title: "Property Search",
      text: "We source on-market, pre-market and off-market opportunities across Sydney.",
    },
    {
      number: "03",
      title: "Due Diligence",
      text: "We analyse value, growth potential, risks and negotiation strategy.",
    },
    {
      number: "04",
      title: "Negotiation & Purchase",
      text: "We negotiate with selling agents and guide you through settlement.",
    },
  ];

  const caseStudies = [
    {
      title: "Western Sydney Investment",
      price: "$720k Purchase",
      result: "Value increased to $820k within 12 months",
      desc: "Strong land component, growth corridor and infrastructure nearby created immediate equity growth.",
    },
    {
      title: "Sydney Family Home",
      price: "$1.1M Purchase",
      result: "Purchased $80k below competing offer",
      desc: "Strategic negotiation and timing allowed our client to secure the property under market pressure.",
    },
    {
      title: "Investor Portfolio Purchase",
      price: "$650k Purchase",
      result: "High rental demand suburb",
      desc: "Targeted suburb selection focusing on yield, vacancy rate and infrastructure pipeline.",
    },
  ];

  const suburbs = [
    {
      name: "Parramatta",
      median: "$1.15M",
      yield: "3.4%",
      vacancy: "1.7%",
      outlook: "Strong infrastructure pipeline",
    },
    {
      name: "Blacktown",
      median: "$920k",
      yield: "3.8%",
      vacancy: "1.5%",
      outlook: "Affordable growth corridor",
    },
    {
      name: "Liverpool",
      median: "$890k",
      yield: "4.1%",
      vacancy: "1.8%",
      outlook: "Transport and hospital hub",
    },
    {
      name: "Penrith",
      median: "$870k",
      yield: "3.9%",
      vacancy: "1.6%",
      outlook: "Western Sydney airport tailwind",
    },
  ];

  const seoKeywords = [
    "Sydney Buyers Agent",
    "Best Buyers Agent Sydney",
    "Investment Property Buyers Agent Sydney",
    "Sydney Property Advisory",
    "Off Market Property Sydney",
  ];

  const [alertForm, setAlertForm] = React.useState({
    name: "",
    email: "",
    budget: "",
    area: "",
    type: "Investment",
  });

  const [finder, setFinder] = React.useState({
    budget: "",
    goal: "Investment",
    priority: "Growth",
  });

  const [cashflowInputs, setCashflowInputs] = React.useState({
    price: 800000,
    rent: 750,
    rate: 6.2,
    depositPct: 20,
    expensesPct: 1.5,
  });

  const calculateCashflow = (price, rent, rate, depositPct, expensesPct) => {
    const annualRent = Number(rent || 0) * 52;
    const loanAmount = Number(price || 0) * (1 - Number(depositPct || 0) / 100);
    const annualInterest = loanAmount * (Number(rate || 0) / 100);
    const annualExpenses = Number(price || 0) * (Number(expensesPct || 0) / 100);
    const netCashflow = annualRent - annualInterest - annualExpenses;
    return Number.isFinite(netCashflow) ? netCashflow : 0;
  };

  const cashflow = calculateCashflow(
    cashflowInputs.price,
    cashflowInputs.rent,
    cashflowInputs.rate,
    cashflowInputs.depositPct,
    cashflowInputs.expensesPct
  );

  const filteredSuburbs = suburbs.filter((suburb) => {
    const medianNumber = Number(suburb.median.replace(/[^\d]/g, ""));
    return finder.budget ? medianNumber <= Number(finder.budget) : true;
  });

  const topFinderResults = filteredSuburbs.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black text-orange-600">RAKK</div>
            <div className="text-xs text-green-700">Property Advisory</div>
          </div>

          <nav className="hidden gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-semibold text-gray-600 hover:text-black"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white"
          >
            Book Consultation
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-orange-50 via-white to-green-50">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-black leading-tight">
                Buy Property Smarter with a Professional Buyer&apos;s Agent
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                RAKK Property Advisory helps investors and home buyers secure the right property in Sydney using research, negotiation and professional buyer representation.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="#quiz"
                  className="rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white"
                >
                  Find Your Best Suburb
                </a>
                <a
                  href="#services"
                  className="rounded-xl border border-green-600 px-6 py-4 font-semibold text-green-700"
                >
                  View Services
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                Sydney Buyers Agent • Investment Properties • Owner Occupiers
              </div>
            </div>

            <div className="rounded-3xl bg-orange-600 p-10 text-white shadow-xl">
              <h2 className="text-3xl font-bold">Sydney Buyers Agent</h2>
              <p className="mt-4 text-orange-100">
                Helping clients secure the right property through research, negotiation and off-market access.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/20 p-4">
                  <div className="text-2xl font-bold">Investors</div>
                  <div className="text-sm">Growth focused strategy</div>
                </div>

                <div className="rounded-xl bg-white/20 p-4">
                  <div className="text-2xl font-bold">Home Buyers</div>
                  <div className="text-sm">Stress free purchase</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quiz" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border bg-orange-50 p-10">
            <h2 className="text-4xl font-black">Find the Best Suburb for Your Budget</h2>
            <p className="mt-4 text-gray-600">
              Take our 60 second property strategy quiz and discover which Sydney suburbs match your budget and goals.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <input className="rounded border p-3" placeholder="Budget" />
              <input className="rounded border p-3" placeholder="Investment or Home" />
              <input className="rounded border p-3" placeholder="Preferred Location" />
            </div>

            <button className="mt-6 rounded bg-orange-600 px-6 py-3 font-semibold text-white">
              Show My Suburbs
            </button>
          </div>
        </section>

        <section className="bg-green-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-black">Free Sydney Investment Suburb Report</h2>
                <p className="mt-4 text-gray-600">
                  Download our guide: Top 10 Sydney Investment Suburbs for 2026.
                </p>
                <p className="mt-2 text-gray-600">
                  Includes growth corridors, infrastructure zones and rental demand suburbs.
                </p>
              </div>

              <div className="rounded-xl border bg-white p-8">
                <input className="mb-3 w-full rounded border p-3" placeholder="Full Name" />
                <input className="mb-3 w-full rounded border p-3" placeholder="Email" />
                <button className="w-full rounded bg-green-700 py-3 font-semibold text-white">
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">How It Works</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl border p-8">
                <div className="font-bold text-orange-600">{step.number}</div>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="off-market-property-alert-system" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 rounded-3xl border bg-white p-10 lg:grid-cols-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                Off-market property alert system
              </div>
              <h2 className="mt-3 text-4xl font-black">Get notified when matching properties appear.</h2>
              <p className="mt-4 text-gray-600">
                Join the RAKK alert list for curated off-market, pre-market and high-potential Sydney opportunities based on your exact brief.
              </p>
              <div className="mt-6 space-y-3 text-gray-700">
                <div>• Tailored suburb and budget filters</div>
                <div>• Investor or owner-occupier preferences</div>
                <div>• Priority opportunities sent first</div>
              </div>
            </div>

            <div className="grid gap-4 rounded-2xl bg-gray-50 p-6">
              <input
                className="rounded border p-3"
                placeholder="Full Name"
                value={alertForm.name}
                onChange={(e) => setAlertForm({ ...alertForm, name: e.target.value })}
              />
              <input
                className="rounded border p-3"
                placeholder="Email"
                value={alertForm.email}
                onChange={(e) => setAlertForm({ ...alertForm, email: e.target.value })}
              />
              <input
                className="rounded border p-3"
                placeholder="Budget"
                value={alertForm.budget}
                onChange={(e) => setAlertForm({ ...alertForm, budget: e.target.value })}
              />
              <input
                className="rounded border p-3"
                placeholder="Preferred Sydney Area"
                value={alertForm.area}
                onChange={(e) => setAlertForm({ ...alertForm, area: e.target.value })}
              />
              <select
                className="rounded border p-3"
                value={alertForm.type}
                onChange={(e) => setAlertForm({ ...alertForm, type: e.target.value })}
              >
                <option>Investment</option>
                <option>Owner Occupier</option>
              </select>
              <button className="rounded bg-orange-600 py-3 font-semibold text-white">
                Join Alert List
              </button>
            </div>
          </div>
        </section>

        <section id="suburb-data-dashboard" className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Suburb data dashboard
              </div>
              <h2 className="mt-3 text-4xl font-black">Track Sydney suburb metrics at a glance.</h2>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border">
            <table className="min-w-full bg-white text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-bold">Suburb</th>
                  <th className="px-6 py-4 font-bold">Median Price</th>
                  <th className="px-6 py-4 font-bold">Rental Yield</th>
                  <th className="px-6 py-4 font-bold">Vacancy</th>
                  <th className="px-6 py-4 font-bold">Outlook</th>
                </tr>
              </thead>
              <tbody>
                {suburbs.map((suburb) => (
                  <tr key={suburb.name} className="border-t">
                    <td className="px-6 py-4 font-semibold">{suburb.name}</td>
                    <td className="px-6 py-4">{suburb.median}</td>
                    <td className="px-6 py-4">{suburb.yield}</td>
                    <td className="px-6 py-4">{suburb.vacancy}</td>
                    <td className="px-6 py-4">{suburb.outlook}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="ai-suburb-finder" className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                  AI suburb finder
                </div>
                <h2 className="mt-3 text-4xl font-black">Find Sydney suburbs that match your goals.</h2>
                <p className="mt-4 text-gray-600">
                  Use your budget, goal and priority to discover suburbs that suit your buying strategy.
                </p>

                <div className="mt-8 grid gap-4">
                  <input
                    className="rounded border p-3"
                    placeholder="Budget e.g. 900000"
                    value={finder.budget}
                    onChange={(e) => setFinder({ ...finder, budget: e.target.value })}
                  />
                  <select
                    className="rounded border p-3"
                    value={finder.goal}
                    onChange={(e) => setFinder({ ...finder, goal: e.target.value })}
                  >
                    <option>Investment</option>
                    <option>Owner Occupier</option>
                  </select>
                  <select
                    className="rounded border p-3"
                    value={finder.priority}
                    onChange={(e) => setFinder({ ...finder, priority: e.target.value })}
                  >
                    <option>Growth</option>
                    <option>Yield</option>
                    <option>Lifestyle</option>
                  </select>
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-8">
                <h3 className="text-2xl font-bold">Suggested suburbs</h3>
                <div className="mt-6 space-y-4">
                  {topFinderResults.length > 0 ? (
                    topFinderResults.map((suburb) => (
                      <div key={suburb.name} className="rounded-xl border p-4">
                        <div className="font-bold">{suburb.name}</div>
                        <div className="mt-1 text-sm text-gray-600">
                          Median: {suburb.median} • Yield: {suburb.yield} • Vacancy: {suburb.vacancy}
                        </div>
                        <div className="mt-2 text-sm text-green-700">{suburb.outlook}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">Enter a budget to see suburb matches.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="investor-cashflow-calculator" className="bg-orange-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                  Investor cashflow calculator
                </div>
                <h2 className="mt-3 text-4xl font-black">Estimate yearly cashflow before you buy.</h2>
                <p className="mt-4 text-gray-600">
                  Change the inputs to estimate gross annual cashflow after interest and basic holding costs.
                </p>

                <div className="mt-8 grid gap-4">
                  <input
                    type="number"
                    className="rounded border p-3"
                    placeholder="Purchase Price"
                    value={cashflowInputs.price}
                    onChange={(e) => setCashflowInputs({ ...cashflowInputs, price: e.target.value })}
                  />
                  <input
                    type="number"
                    className="rounded border p-3"
                    placeholder="Weekly Rent"
                    value={cashflowInputs.rent}
                    onChange={(e) => setCashflowInputs({ ...cashflowInputs, rent: e.target.value })}
                  />
                  <input
                    type="number"
                    step="0.1"
                    className="rounded border p-3"
                    placeholder="Interest Rate %"
                    value={cashflowInputs.rate}
                    onChange={(e) => setCashflowInputs({ ...cashflowInputs, rate: e.target.value })}
                  />
                  <input
                    type="number"
                    className="rounded border p-3"
                    placeholder="Deposit %"
                    value={cashflowInputs.depositPct}
                    onChange={(e) => setCashflowInputs({ ...cashflowInputs, depositPct: e.target.value })}
                  />
                  <input
                    type="number"
                    step="0.1"
                    className="rounded border p-3"
                    placeholder="Annual Expenses %"
                    value={cashflowInputs.expensesPct}
                    onChange={(e) => setCashflowInputs({ ...cashflowInputs, expensesPct: e.target.value })}
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                  Estimated annual result
                </div>
                <div
                  className={`mt-4 text-5xl font-black ${
                    cashflow >= 0 ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {cashflow >= 0 ? "+" : "-"}${Math.abs(Number(cashflow)).toLocaleString()}
                </div>
                <p className="mt-4 text-gray-600">
                  This is a simple estimate for lead generation and should be replaced with your final finance model later.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="text-4xl font-black">Services & Pricing</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border bg-white p-10">
                <h3 className="text-2xl font-bold">Single Property Service</h3>
                <div className="mt-4 text-4xl font-black text-orange-600">$7,000 + GST</div>
                <p className="mt-4 text-gray-600">
                  Full buyers agent service for purchasing one property.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-10">
                <h3 className="text-2xl font-bold">Lifetime Property Service</h3>
                <div className="mt-4 text-4xl font-black text-green-700">$20,000 + GST</div>
                <p className="mt-4 text-gray-600">
                  Unlimited purchases supported until 2036.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">Client Case Studies</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.title} className="rounded-xl border p-8">
                <h3 className="text-xl font-bold">{c.title}</h3>
                <div className="mt-3 font-semibold text-orange-600">{c.price}</div>
                <div className="mt-1 font-semibold text-green-700">{c.result}</div>
                <p className="mt-4 text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="seo" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Google SEO for “Sydney Buyers Agent”
              </div>
              <h2 className="mt-3 text-4xl font-black">Built to rank for Sydney buyer intent.</h2>
              <p className="mt-4 text-gray-600">
                This page now supports strong SEO foundations with keyword targeting, suburb content, lead magnets, calculators, case studies and service-specific conversion sections.
              </p>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-8">
              <div className="font-bold">Target SEO keywords</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {seoKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border bg-white px-4 py-2 text-sm font-semibold text-gray-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-sm text-gray-600">
                Recommended next step: create separate suburb landing pages, service pages and weekly market articles around Sydney buying opportunities.
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-green-700 text-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-4xl font-black">Book Your Consultation</h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-green-100">
                  Contact RAKK Property Advisory to discuss your next property purchase.
                </p>

                <div className="mt-6 space-y-3">
                  <div>📍 Sydney, Australia</div>
                  <div>📞 WhatsApp Available</div>
                  <div>📅 Calendly Booking</div>
                </div>
              </div>

              <form className="grid gap-4 rounded-xl bg-white p-6 text-black">
                <input className="rounded border p-3" placeholder="Full Name" />
                <input className="rounded border p-3" placeholder="Email" />
                <input className="rounded border p-3" placeholder="Phone" />
                <textarea
                  className="rounded border p-3"
                  placeholder="Tell us about the property you want"
                />

                <button className="rounded bg-orange-600 py-3 font-semibold text-white">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="font-bold">RAKK Property Advisory</div>
          <div className="mt-2 text-sm text-gray-500">
            Sydney Buyers Agent • Investment Property Specialist
          </div>
        </div>
      </footer>
    </div>
  );
}*/
