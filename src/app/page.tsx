"use client";
import SectionImportantStore from "./_components/SectionImportantStore";
import SectionIntroduction from "./_components/SectionIntroduction";

export default function HomePage() {
  return (
    <div className="w-full">
      <SectionIntroduction />
      <SectionImportantStore />
    </div>
  );
}
