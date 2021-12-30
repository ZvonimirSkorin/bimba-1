import Navbar from "./navigation";

const Layout =({children})=>{
    return(
        <div className="content">
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;