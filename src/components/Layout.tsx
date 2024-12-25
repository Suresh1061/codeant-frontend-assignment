import React, { useState, useEffect } from "react";
import Repositories from "../pages/Repositories";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Layout: React.FC = () => {
     const [activeComponent, setActiveComponent] = useState("Repositories");
     const navigate = useNavigate();

     useEffect(() => {
          if (activeComponent === "Logout") {
               navigate("/login");
          }
     }, [activeComponent, navigate]);

     const renderComponent = () => {
          switch (activeComponent) {
               case "Repositories":
                    return <Repositories />;
               default:
                    return <Repositories />;
          }
     };

     return (
          <div className="flex h-screen">
               <Sidebar
                    activeComponent={activeComponent}
                    setActiveComponent={setActiveComponent}
                    className="hidden md:flex"
               />
               <div className="flex-1 min-h-screen overflow-auto bg-white md:bg-[#FAFAFA] md:p-6 ">
                    <Navbar
                         className="flex md:hidden"
                         activeComponent={activeComponent}
                         setActiveComponent={setActiveComponent}
                    />
                    <div className="w-full max-md:pt-16 md:border md:border-gray rounded-xl bg-white overflow-hidden">
                         {renderComponent()}
                    </div>
               </div>
          </div>
     );
};

export default Layout;
