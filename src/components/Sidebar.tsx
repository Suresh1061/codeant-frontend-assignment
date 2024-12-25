import React, { useState } from "react";
import LogoWithText from "./LogoWithText";
import CustomDropdown from "./CustomDropdown";
import CustomText from "./CustomText";
import { navItems, navItemsType } from "../constants/constants";

type Props = {
     activeComponent: string;
     setActiveComponent: (component: string) => void;
     className?: string;
};

const Sidebar: React.FC<Props> = ({ setActiveComponent, activeComponent, className }) => {
     const [selectDropdown, setSelectDropdown] = useState("");
     console.log("selectDropdown", selectDropdown);

     const getButtonClasses = (isActive: boolean) =>
          `w-full flex gap-x-2 items-center px-4 py-2 ${isActive ? "bg-[#1570EF] rounded-lg" : ""
          }`;

     return (
          <nav className={`p-6 max-w-[242px] h-screen w-full border-r border-gray flex-col justify-between ${className}`}>
               <div>
                    <LogoWithText />
                    <CustomDropdown
                         options={["UtkarshDhairyaPanwar"]}
                         onSelect={setSelectDropdown}
                         placeholder="UtkarshDhairyaPanwar"
                         className="my-5"
                    />
                    <ul className="mt-2 space-y-3">
                         {navItems
                              .filter((item:navItemsType) => item.section === "main")
                              .map((item:navItemsType) => {
                                   const isActive = activeComponent === item.name;
                                   return (
                                        <li key={item.name}>
                                             <button
                                                  onClick={() => setActiveComponent(item.name)}
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
               <ul className="mt-2 space-y-3">
                    {navItems
                         .filter((item:navItemsType) => item.section === "footer")
                         .map((item:navItemsType) => (
                              <li key={item.name}>
                                   <button
                                        onClick={() => setActiveComponent(item.name)}
                                        className={getButtonClasses(false)}
                                        aria-current={undefined}
                                   >
                                        <item.icon className="w-5 h-5 text-[#414651]" />
                                        <CustomText
                                             color="#414651"
                                             size="text-base"
                                             fontWeight="font-semibold"
                                        >
                                             {item.name}
                                        </CustomText>
                                   </button>
                              </li>
                         ))}
               </ul>
          </nav>
     );
};

export default Sidebar;
