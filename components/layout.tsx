import { ReactChildren } from "react";
import Navbar from "./navigation";

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
