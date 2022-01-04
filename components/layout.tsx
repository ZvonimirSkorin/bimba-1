import { useEffect } from "react";
import { useState } from "react";
import { ReactChildren } from "react";
import Navbar from "./navigation";
import { Footer } from "./SharedComponents/Footer";
import { HorizontalLoader, Loader } from "./SharedComponents/Loader";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false);
      clearTimeout(interval);
    }, 2100);
  }, []);
  return (
    <div className="content">
      <Navbar />
      {loading ? <Loader /> : <></>}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
