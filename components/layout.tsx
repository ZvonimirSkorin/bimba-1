import { ReactChildren } from "react";
import Navbar from "./navigation";
import { Footer } from "./SharedComponents/Footer";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
