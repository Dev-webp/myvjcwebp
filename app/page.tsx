"use client";

import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import Desc from "@/app/components/Scroll/components/Description";
import NewSteps from "@/app/components/NewSteps";
import ServicesDec from "@/app/components/ServicesDec";

// Dynamic Imports
const Scroll = dynamic(() => import('@/app/components/Scroll/index'));
const CTA = dynamic(() => import('@/app/components/CTA'));
const FAQ = dynamic(() => import('@/app/components/FAQ'));
const Parallex = dynamic(() => import('@/app/components/Parallex/parallex'));

// Utility function for scroll-to-top
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function Home() {
  // useEffect(() => {
  //   scrollToTop(); 
  // }, []);

  return (
    <>
      {/* Critical Content */}
      <Hero />
      <Suspense fallback={<LoadingIndicator />}>
        <Desc />
        <ServicesDec />
        <Scroll />
        <NewSteps />
        <CTA />
        <Parallex />
        <FAQ />
      </Suspense>
      <Footer />
    </>
  );
}

// Loading indicator component
const LoadingIndicator = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);
