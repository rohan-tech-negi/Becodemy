"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const FeatureHighLight = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let ctx: any;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          // Text slides in from left
          gsap.fromTo(
            textRef.current,
            { opacity: 0, x: -60 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,
              },
            }
          );

          // Image slides in from right
          gsap.fromTo(
            imgWrapRef.current,
            { opacity: 0, x: 60 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true,
              },
            }
          );

          // Button 1-cycle pulse
          gsap.fromTo(
            btnRef.current,
            { boxShadow: "0 0 0 0 rgba(79,70,229,0)" },
            {
              boxShadow: "0 0 0 12px rgba(79,70,229,0)",
              duration: 0.8,
              delay: 1.2,
              ease: "power2.out",
              repeat: 1,
              yoyo: true,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                once: true,
              },
            }
          );

          // Parallax scroll for the image
          gsap.to(imgWrapRef.current, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }, sectionRef);
      });
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-slate-50 border-t border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Product image */}
        <div
          ref={imgWrapRef}
          className="w-full md:w-1/2 opacity-0 flex-shrink-0"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 bg-white p-1.5">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <Image
              src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png"
              alt="Becodemy Editor"
              width={600}
              height={450}
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div ref={textRef} className="w-full md:w-1/2 opacity-0 text-center md:text-left">
          <span className="inline-block text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">
            Create
          </span>
          <h2 className="font-clashDisplay uppercase text-slate-900 text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] leading-tight mb-5">
            The Most Powerful Editing &amp; Design Tools in Email
          </h2>
          <p className="text-slate-500 text-[1rem] md:text-[1.1rem] leading-relaxed mb-8 max-w-lg">
            Craft stunning newsletters with our drag-and-drop editor. Beautiful
            templates, rich media support, and pixel-perfect design — all in a
            distraction-free writing experience your readers will love.
          </p>

          {/* Feature bullets */}
          <ul className="space-y-3 mb-10 text-left">
            {["Drag & drop email builder", "50+ professional templates", "AI-powered content suggestions"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600">
                <span className="check-icon flex-shrink-0">✓</span>
                <span className="text-[15px]">{item}</span>
              </li>
            ))}
          </ul>

          <Button
            ref={btnRef}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-base px-8 py-3 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Building
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighLight;