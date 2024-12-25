import React from 'react';
import Subtract from '/assets/Subtract.png';
import Stats from './Stats';

type Props = {
     children: React.ReactNode;
};

const AuthWrapper: React.FC<Props> = ({ children }) => {
     return (
          <div className="w-full h-screen flex flex-col sm:flex-row">
               <div className="hidden md:flex w-1/2 h-full justify-center pt-20 border-r relative">
                    <Stats />
                    <img
                         className="absolute bottom-0 left-0 sm:w-1/3 sm:h-auto -z-50"
                         src={Subtract}
                         alt="subtract"
                    />
               </div>
               <div className="w-full md:w-1/2 h-full flex items-center justify-center">
                    {children}
               </div>
          </div>
     );
};

export default AuthWrapper;
