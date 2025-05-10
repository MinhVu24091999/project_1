"use client";
import { useEffect, useState } from "react";
import Consultation from "./_components/Consultation";
import ContactForm from "./_components/ContactForm";
import CustomerTestimonials from "./_components/CustomerTestimonials";
import FAQ from "./_components/FAQ";
import SectionImportantStore from "./_components/SectionImportantStore";
import SectionIntroduction from "./_components/SectionIntroduction";
import SellingRestaurant from "./_components/SellingRestaurant";
import StoreStation from "./_components/StoreStation";
import StoreStationFeatures from "./_components/StoreStationFeatures";
import TrustedProvenSupport from "./_components/TrustedProvenSupport";
import AvailableButton from "@/components/AvailableButton";
import { twJoin } from "tailwind-merge";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const faqSection = document.getElementById("faq-section");
      const availableButtonIntroduction = document.getElementById(
        "available-button-introduction"
      );

      if (!faqSection || !availableButtonIntroduction) return;

      const faqPosition = faqSection.getBoundingClientRect().bottom;
      const introductionPosition =
        availableButtonIntroduction.getBoundingClientRect().top;

      if (introductionPosition < 0 && faqPosition > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <SectionIntroduction />
      <SectionImportantStore />
      <StoreStation />
      <CustomerTestimonials />
      <SellingRestaurant />
      <StoreStationFeatures />
      <TrustedProvenSupport />
      <FAQ />
      <Consultation />
      <ContactForm />

      <AvailableButton
        id="available-button-fixed"
        className={twJoin(
          "min-w-[316px] sm:hidden",
          "!fixed !bottom-10 !left-1/2 !z-[1000] !transition-all !duration-500",
          isVisible ? "!animate-fadeIn" : "!animate-fadeOut pointer-events-none"
        )}
        labelClassName="text-lg"
        contentClassName="text-xl"
      />
    </div>
  );
}
