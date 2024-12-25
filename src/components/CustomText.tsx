import React from "react";

type Props = {
     fontWeight?: string;
     size?: string;
     font?: string;
     color?: string;
     className?: string;
     children: React.ReactNode;
};

const CustomText: React.FC<Props> = ({
     children,
     fontWeight = "font-normal",
     size = "text-sm",
     font = "font-sans",
     color = "#000",
     className = "",
}) => {
     return (
          <div
               className={`${font} ${fontWeight} ${size} ${className}`}
               style={{ color }} 
          >
               {children}
          </div>
     );
};

export default CustomText;
