"use client";
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

export default function HomePage() {
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
    </div>
  );
}
