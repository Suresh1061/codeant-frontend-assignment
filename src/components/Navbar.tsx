import React, { useEffect, useState } from "react";
import LogoWithText from "./LogoWithText";
import { Menu, X } from "lucide-react";
import { navItems, navItemsType } from "../constants/constants";
import CustomText from "./CustomText";
import CustomDropdown from "./CustomDropdown";

type Props = {
     className?: string;
     activeComponent: string;
     setActiveComponent: (component: string) => void;
};

const Navbar: React.FC<Props> = ({ className, activeComponent, setActiveComponent }) => {
     const [isOpen, setIsOpen] = useState(false)
     const [, setSelectDropdown] = useState('')

     const toggleMenu = () => {
          setIsOpen(!isOpen)
          document.body.style.overflow = isOpen ? 'auto' : 'hidden'
     }

     useEffect(() => {
          const handleResize = () => {
               if (window.innerWidth > 768 && isOpen) {
                    setIsOpen(false)
                    document.body.style.overflow = 'auto'
               }
          }

          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     }, [isOpen])

     const getButtonClasses = (isActive: boolean) =>
          `w-full flex gap-x-2 items-center px-4 py-2 ${isActive ? "bg-blue rounded-lg" : ""
          }`;

     return (
          <>
               <nav className={`${className} fixed top-0 left-0 w-full bg-white transition-all duration-300 ease-in-out z-50 ${isOpen ? 'h-auto pb-6' : 'border-b border-gray'}`}>
                    <div className="w-full px-4">
                         <div className="flex justify-between items-center py-4 gap-x-3 ">
                              <LogoWithText />
                              <button
                                   onClick={() => setIsOpen((prev) => !prev)}
                                   aria-label={isOpen ? "Close menu" : "Open menu"}
                              >
                                   {isOpen ? <X size={24} color="#181D27" /> : <Menu size={24} color="#181D27" />}
                              </button>
                         </div>
                         <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[calc(60vh-4rem)]' : 'max-h-0'}`}>
                              <CustomDropdown
                                   options={["UtkarshDhairyaPanwar"]}
                                   onSelect={setSelectDropdown}
                                   placeholder="UtkarshDhairyaPanwar"
                                   className="my-5"
                              />
                              <ul className="space-y-2">
                                   {navItems.map((item: navItemsType) => {
                                        const isActive = activeComponent === item.name;
                                        return (
                                             <li key={item.name}>
                                                  <button
                                                       onClick={() => {
                                                            setActiveComponent(item.name);
                                                            setIsOpen(false);
                                                       }}
                                                       className={getButtonClasses(isActive)}
                                                       aria-current={isActive ? "page" : undefined}
                                                  >
                                                       <item.icon
                                                            className={`w-5 h-5 ${isActive ? "text-white" : "text-[#414651]"
                                                                 }`}
                                                       />
                                                       <CustomText
                                                            color={isActive ? "#fff" : "#414651"}
                                                            size="text-base"
                                                            fontWeight="font-semibold"
                                                       >
                                                            {item.name}
                                                       </CustomText>
                                                  </button>
                                             </li>
                                        );
                                   })}
                              </ul>
                         </div>
                    </div>
               </nav>
               {isOpen && (
                    <div
                         className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                         onClick={toggleMenu}
                         aria-hidden="true"
                    />
               )}
          </>
     )
}

export default Navbar

