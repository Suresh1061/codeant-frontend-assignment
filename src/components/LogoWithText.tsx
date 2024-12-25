import React from "react";
import logo from "/assets/logo.png";
import CustomText from "./CustomText";

type Props = {
     textSize?: string;
     className?: string;
     imgClassName?: string;
};

const LogoWithText: React.FC<Props> = ({
     textSize = "text-2xl",
     className = "flex gap-x-2 items-center",
     imgClassName = "w-7 h-8 object-contain",
}) => {
     return (
          <div className={className}>
               <img src={logo} alt="CodeAnt AI logo" className={imgClassName} />
               <CustomText size={textSize}>CodeAnt AI</CustomText>
          </div>
     );
};

export default LogoWithText;
