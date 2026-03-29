"use client";
import React, { useEffect, useRef, useState } from "react";
import PricingCard from "@/shared/components/cards/PricingCard";

const Pricing = () => {
  const [active, setActive] = useState("Monthly");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }, sectionRef);
      });
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="w-full bg-white section-pad">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 opacity-0">
          <div>
            <span className="inline-block text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Pricing
            </span>
            <h2 className="font-clashDisplay uppercase text-slate-900 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-tight">
              Simple. Predictable.
            </h2>
            <p className="text-slate-500 text-lg mt-2">Built for you — scale as you grow.</p>
          </div>

          {/* Billing toggle */}
          <div className="billing-toggle flex-shrink-0">
            <button
              className={`billing-toggle-btn ${active === "Monthly" ? "active" : ""}`}
              onClick={() => setActive("Monthly")}
            >
              Monthly
            </button>
            <button
              className={`billing-toggle-btn ${active === "Yearly" ? "active" : ""}`}
              onClick={() => setActive("Yearly")}
            >
              Yearly
              <span className="ml-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <PricingCard active={active} />
      </div>
    </section>
  );
};

export default Pricing;