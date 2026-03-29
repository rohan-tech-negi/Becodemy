"use client";

import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { partners } from "@/app/config/constants";
import Image from "next/image";

const Branding = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            [headingRef.current, badgeRef.current],
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
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
    <div ref={sectionRef} className="bg-slate-50 border-t border-b border-slate-200 py-14">
      {/* Trust text */}
      <h3
        ref={headingRef}
        className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400 text-center mb-4"
      >
        Created by the Early Morning Brew Team
      </h3>

      {/* Badge */}
      <div ref={badgeRef} className="w-full text-center mb-10">
        <span className="inline-block bg-white border border-slate-200 text-slate-600 rounded-full px-5 py-1.5 text-sm font-medium shadow-sm">
          Now powering the world&apos;s top newsletters
        </span>
      </div>

      {/* Partner logos marquee — unchanged logic */}
      <Marquee className="w-full" speed={40} gradient={true} gradientColor="rgb(248,250,252)" gradientWidth={80}>
        {partners.map((i: PartnersTypes, index: number) => (
          <div key={index} className="mx-8 flex items-center opacity-60 hover:opacity-90 transition-opacity grayscale hover:grayscale-0">
            <Image
              src={i.url}
              width={160}
              height={60}
              alt="partner"
              className="h-[36px] w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Branding;