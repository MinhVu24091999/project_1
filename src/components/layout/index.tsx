"use client";
import { ReactNode, useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import clsx from "clsx";
import LoadingScreen from "../LoadingScreen";
import { usePathname } from "next/navigation";

interface IProps {
  children: ReactNode;
}
const Layout = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="h-screen bg-gray bg-[url('/images/main-background.png')] bg-cover bg-no-repeat bg-center bg-blend-multiply">
        <LoadingScreen onComplete={() => setIsLoading(false)} />;
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "flex flex-col min-h-screen overflow-x-hidden",
      )}
    >
      <Header />
      <div className="flex-1 relative">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
