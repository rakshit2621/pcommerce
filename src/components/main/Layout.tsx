// src/components/Layout.tsx
import Background from "@/components/main/Background";
import Navbar from "../Home page/Navbar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen">
      <Navbar/>
      <Background />
     
      <div className="relative z-10">{children}</div>
     
    </div>
  );
};

export default Layout;
