"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Banner = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const dot1Ref = useRef<HTMLDivElement>(null);
  const dot2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    import("gsap").then(({ gsap }) => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Hero image entrance
        tl.fromTo(
          imgRef.current,
          { opacity: 0, scale: 0.95, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2 },
          0
        );

        // Headline words stagger
        if (headlineRef.current) {
          const words = headlineRef.current.querySelectorAll(".word");
          tl.fromTo(
            words,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.06 },
            0.15
          );
        }

        // Subheadline
        tl.fromTo(
          subRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.55
        );

        // Buttons stagger
        tl.fromTo(
          [btn1Ref.current, btn2Ref.current],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
          0.75
        );

        // Trust badge
        tl.fromTo(
          badgeRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          1.1
        );

        // Continuous floating for decorative elements
        gsap.to(dot1Ref.current, {
          y: -14,
          duration: 3.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(dot2Ref.current, {
          y: 14,
          duration: 4.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, heroRef);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100vh] hero-gradient overflow-hidden flex flex-col items-center justify-center px-6"
      style={{ paddingTop: "80px" }}
    >
      {/* Grid pattern background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Floating decorative blobs */}
      <div
        ref={dot1Ref}
        className="absolute top-[15%] right-[8%] w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div
        ref={dot2Ref}
        className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-indigo-100 shadow-sm rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[13px] font-medium text-slate-600 tracking-wide uppercase">
            Newsletter Platform
          </span>
        </div>

        {/* Headline — words split for GSAP stagger */}
        <h1
          ref={headlineRef}
          className="font-clashDisplay uppercase font-bold text-slate-900 text-[2.4rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] mb-5"
        >
          {["The", "Newsletter", "Platform", "Built", "for"].map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em] opacity-0">
              {word}
            </span>
          ))}
          <span className="word inline-block opacity-0">
            <span className="font-style">Growth</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="opacity-0 text-slate-500 text-[1.1rem] sm:text-[1.25rem] md:text-[1.4rem] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Everything you need to create, send, and scale your newsletter —
          all in one powerful platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button ref={btn1Ref} className="btn-primary opacity-0 text-base !px-8 !py-4 shadow-lg shadow-indigo-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Start Free Trial
          </button>
          <button ref={btn2Ref} className="btn-outline opacity-0 text-base !px-8 !py-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            View Demo
          </button>
        </div>

        {/* Trust badge */}
        <p ref={badgeRef} className="opacity-0 text-slate-400 text-[13px] tracking-wide">
          Created by the{" "}
          <span className="text-slate-600 font-medium">Early Morning Brew</span>{" "}
          team · 30-day free trial · No credit card required
        </p>
      </div>

      {/* Hero product image */}
      <div
        ref={imgRef}
        className="relative z-10 mt-16 w-full max-w-5xl opacity-0"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/20 border border-slate-200/60 bg-white p-2">
          {/* Browser chrome top bar */}
          <div className="flex items-center gap-1.5 mb-2 px-2 pt-1">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="flex-1 ml-4 h-6 bg-slate-100 rounded-md" />
          </div>
          <Image
            src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1920,quality=75/www/homepage/MobileHero.png"
            alt="Becodemy Newsletter Platform"
            width={1200}
            height={700}
            className="w-full rounded-xl object-cover"
            priority
          />
        </div>
        {/* Image shadow glow */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-16 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, transparent 70%)",
            filter: "blur(16px)",
          }}
        />
      </div>

      {/* Bottom fade out */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #F8FAFC)",
        }}
      />
    </section>
  );
};

export default Banner;