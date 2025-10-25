import { ReactNode } from "react";
import TopStrip from "./TopStrip";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopStrip />
      <Header />
      <main className="flex-1 pt-[162px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
