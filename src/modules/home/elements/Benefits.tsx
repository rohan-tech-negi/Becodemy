"use client";

import React, { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Deep Analytics",
    description: "Track open rates, clicks, and subscriber growth with real-time insights and beautiful charts.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Custom Domains",
    description: "Publish on your own domain. Build authority and brand trust with every email you send.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "API Access",
    description: "Full REST API access to build custom integrations, automate workflows, and connect your stack.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "AI Writing Assistant",
    description: "Generate subject lines, body copy, and content ideas powered by built-in AI tools.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Audience Growth",
    description: "Built-in referral programs, subscription widgets, and growth tools to 10x your subscriber count.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Monetization",
    description: "Launch paid subscriptions, ad networks, and premium content — turn your audience into revenue.",
  },
];

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          // Title fade up
          gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );

          // Cards stagger
          if (cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll(".feature-card");
            gsap.fromTo(
              cards,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: cardsRef.current,
                  start: "top 75%",
                  once: true,
                },
              }
            );
          }
        }, sectionRef);
      });
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white section-pad px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="inline-block text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Features
          </span>
          <h2 className="font-clashDisplay uppercase text-slate-900 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-tight mb-4">
            Everything You Need to{" "}
            <span className="font-style">Succeed</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Available in a single platform. No complex integrations, no extra tools needed.
          </p>
        </div>

        {/* Feature cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div key={index} className="feature-card saas-card p-7 opacity-0">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
                {feature.icon}
              </div>
              {/* Text */}
              <h3 className="text-slate-900 font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;