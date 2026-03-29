"use client";

import { freePlan, GrowPlan, scalePlan } from "@/app/config/constants";
import React, { useEffect, useRef } from "react";
import { Button } from "@heroui/button";

const CheckIcon = () => (
  <div className="check-icon">✓</div>
);

const HexIcon = ({ color = "#4F46E5" }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" fill="none" className="mb-5">
    <path
      fill={`${color}20`}
      stroke={color}
      strokeWidth="2"
      d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
    />
  </svg>
);

interface PricingCardProps {
  active: string;
}

const PricingCard = ({ active }: PricingCardProps) => {
  const cardsRef = useRef<HTMLDivElement>(null);
  // Price display refs for count-up animation
  const growPriceRef = useRef<HTMLSpanElement>(null);
  const scalePriceRef = useRef<HTMLSpanElement>(null);

  const growPrice = active === "Monthly" ? 49 : 42;
  const scalePrice = active === "Monthly" ? 99 : 84;

  // Count-up utility
  const animateCount = (el: HTMLSpanElement | null, target: number, prefix = "$") => {
    if (!el) return;
    import("gsap").then(({ gsap }) => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(obj.val)}`;
        },
      });
    });
  };

  useEffect(() => {
    let ctx: any;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          if (!cardsRef.current) return;
          const cards = cardsRef.current.querySelectorAll(".pricing-card-item");

          gsap.fromTo(
            cards,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.18,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
                once: true,
                onEnter: () => {
                  // Trigger count-up when cards enter viewport
                  animateCount(growPriceRef.current, growPrice);
                  animateCount(scalePriceRef.current, scalePrice);
                },
              },
            }
          );
        }, cardsRef);
      });
    });

    return () => ctx?.revert();
  }, []);

  // Update price display when billing period changes
  useEffect(() => {
    if (growPriceRef.current) growPriceRef.current.textContent = `$${growPrice}`;
    if (scalePriceRef.current) scalePriceRef.current.textContent = `$${scalePrice}`;
  }, [active, growPrice, scalePrice]);

  return (
    <div
      ref={cardsRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
    >
      {/* ——— LAUNCH (Free) ——— */}
      <div className="pricing-card-item saas-card p-8 opacity-0">
        <HexIcon color="#64748B" />
        <div className="border-b border-slate-100 pb-6 mb-6">
          <h5 className="font-clashDisplay uppercase text-slate-900 text-2xl font-bold mb-1">
            Launch
          </h5>
          <p className="text-slate-400 text-sm">Perfect to get started</p>
        </div>

        <div className="border-b border-slate-100 pb-6 mb-6">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-5xl font-bold text-slate-900">$0</span>
            <span className="text-slate-400 text-base mb-2">/forever</span>
          </div>
          <p className="text-slate-400 text-sm">No commitment</p>
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
          What&apos;s Included
        </p>
        <ul className="space-y-3 mb-8">
          {freePlan.map((i: PlanType, index: number) => (
            <li key={index} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-slate-600 text-[15px]">{i.title}</span>
            </li>
          ))}
        </ul>

        <Button
          color="primary"
          className="w-full text-base font-semibold py-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all"
        >
          Get Started Free
        </Button>
        <p className="pt-2 text-xs text-slate-400 text-center">
          30-day trial of Scale features, then free forever
        </p>
      </div>

      {/* ——— GROW (Featured) ——— */}
      <div className="pricing-card-item saas-card pricing-card-featured p-8 opacity-0 relative md:scale-[1.03]">
        {/* Most Popular badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-indigo-200 uppercase tracking-wide">
            Most Popular
          </span>
        </div>

        <HexIcon color="#4F46E5" />
        <div className="border-b border-slate-100 pb-6 mb-6">
          <h5 className="font-clashDisplay uppercase text-slate-900 text-2xl font-bold mb-1">
            Grow
          </h5>
          <p className="text-slate-400 text-sm">For growing creators</p>
        </div>

        <div className="border-b border-slate-100 pb-6 mb-6">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-5xl font-bold text-slate-900">
              <span ref={growPriceRef}>${growPrice}</span>
            </span>
            <span className="text-slate-400 text-base mb-2">/month</span>
          </div>
          <p className="text-slate-400 text-sm">Billed {active}</p>
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
          Everything in Launch, plus...
        </p>
        <ul className="space-y-3 mb-8">
          {GrowPlan.map((i: PlanType, index: number) => (
            <li key={index} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-slate-600 text-[15px]">{i.title}</span>
            </li>
          ))}
        </ul>

        <Button
          color="primary"
          className="w-full text-base font-semibold py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Started
        </Button>
        <p className="pt-2 text-xs text-slate-400 text-center">
          30-day free trial of Scale features
        </p>
      </div>

      {/* ——— SCALE ——— */}
      <div className="pricing-card-item saas-card p-8 opacity-0">
        <HexIcon color="#06B6D4" />
        <div className="border-b border-slate-100 pb-6 mb-6">
          <h5 className="font-clashDisplay uppercase text-slate-900 text-2xl font-bold mb-1">
            Scale
          </h5>
          <p className="text-slate-400 text-sm">For professional publishers</p>
        </div>

        <div className="border-b border-slate-100 pb-6 mb-6">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-5xl font-bold text-slate-900">
              <span ref={scalePriceRef}>${scalePrice}</span>
            </span>
            <span className="text-slate-400 text-base mb-2">/month</span>
          </div>
          <p className="text-slate-400 text-sm">Billed {active}</p>
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
          Everything in Grow, plus...
        </p>
        <ul className="space-y-3 mb-8">
          {scalePlan.map((i: PlanType, index: number) => (
            <li key={index} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-slate-600 text-[15px]">{i.title}</span>
            </li>
          ))}
        </ul>

        <Button
          color="primary"
          className="w-full text-base font-semibold py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Started
        </Button>
        <p className="pt-2 text-xs text-slate-400 text-center">
          30-day free trial of Scale features, then ${scalePrice}/mo
        </p>
      </div>
    </div>
  );
};

export default PricingCard;