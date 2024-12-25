import React from 'react'
import logo from "/assets/logo.png"

type Props = {
     width?: string;
     height?: string;
     className?: string
}

const Logo: React.FC<Props> = ({
     width = "w-9",
     height,
     className }) => {
     return (
          <div>
               <img
                    className={`${width} ${height} ${className} `}
                    src={logo}
                    alt='logo'
               />
          </div>
     )
}

export default Logo