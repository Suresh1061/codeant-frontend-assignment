import React from 'react';
import { signinMethodsProps } from '../constants/constants';
import CustomText from './CustomText';
import { useNavigate } from 'react-router-dom';

type Props = {
     methods: signinMethodsProps[];
};

const SignInOptions: React.FC<Props> = ({ methods }) => {
     const navigate = useNavigate()
     return (
          <>
               {methods.map((item) => (
                    <button
                         key={item.title}
                         className="flex justify-center items-center py-4 gap-5 border rounded-lg hover:shadow-sm transition-shadow"
                         role="button"
                         tabIndex={0}
                         onClick={() => navigate('/')}
                    >
                         <img className="w-6 h-6" src={item.icon} alt={`${item.title} icon`} />
                         <CustomText size="text-base" fontWeight="font-semibold">
                              {item.title}
                         </CustomText>
                    </button>
               ))}
          </>
     );
};

export default SignInOptions;
