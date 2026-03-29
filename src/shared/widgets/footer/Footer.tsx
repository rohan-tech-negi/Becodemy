import Link from "next/link";
import React from "react";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] text-white">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left column — Logo + email signup */}
          <div className="md:col-span-5">
            <Link href={"/"}>
              <FooterLogo />
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed mt-5 mb-6 max-w-sm">
              Get Becodemy updates delivered directly to your inbox. Stay ahead
              with the latest features, tips, and insights.
            </p>

            {/* Email signup */}
            <div className="flex items-center w-full max-w-sm mb-4">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="input-saas flex-1 rounded-r-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 h-[42px] rounded-lg rounded-l-none transition-colors cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>

          {/* Right columns — Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h6 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
                Product
              </h6>
              <ul className="space-y-3">
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Create
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Write
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Grow
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Monetize
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Analyze
                  </span>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h6 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
                Company
              </h6>
              <ul className="space-y-3">
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Careers
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Pricing
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Shop
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Compare
                  </span>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h6 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
                Resources
              </h6>
              <ul className="space-y-3">
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Documentation
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Blog
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    API Reference
                  </span>
                </li>
                <li>
                  <span className="text-[15px] text-slate-300 hover:text-white transition-colors cursor-pointer">
                    Support
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © 2024 Becodemy, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500 hover:text-slate-300 text-sm cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="text-slate-500 hover:text-slate-300 text-sm cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;