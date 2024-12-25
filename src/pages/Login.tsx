import React, { useState } from 'react';
import AuthWrapper from '../components/AuthWrapper';
import CustomText from '../components/CustomText';
import { SAASSigninMethods, SelfHostedSigninMethods } from '../constants/constants';
import SignInOptions from '../components/SignInOptions';
import LogoWithText from '../components/LogoWithText';

const Login: React.FC = () => {
     const [toggle, setToggle] = useState(false);

     return (
          <AuthWrapper>
               <div className="w-full h-full flex flex-col justify-center items-center px-6 sm:px-10">
                    <div className="max-w-2xl w-full mx-auto border rounded-xl bg-white ">
                         <div className="px-4 py-6 border-b">
                              <div className="mb-3">
                                   <LogoWithText
                                        textSize='text-3xl'
                                        className="flex items-center justify-center gap-5"
                                        imgClassName='w-9'
                                   />
                                   <CustomText
                                        size="text-2xl lg:text-[32px]"
                                        fontWeight="font-semibold"
                                        className="my-6 text-center"
                                   >
                                        Welcome to CodeAnt AI
                                   </CustomText>
                              </div>
                              <div className="relative w-full flex border-2 rounded-lg overflow-hidden bg-[#E9EAEB] border-[#E9EAEB]">
                                   <div
                                        className={`absolute top-0 h-full w-1/2 bg-blue transition-transform duration-300 rounded-lg ${toggle ? 'translate-x-full' : ''
                                             }`}
                                   />
                                   {['SAAS', 'Self Hosted'].map((item, index) => (
                                        <button
                                             key={index}
                                             className={`w-1/2 py-3 text-center relative z-10 cursor-pointer focus:outline-none`}
                                             onClick={() => setToggle(index === 1)}
                                        >
                                             <CustomText
                                                  size="text-xl"
                                                  fontWeight="font-semibold"
                                                  color={`${toggle === (index === 1) ? '#fff' : '#414651'}`}
                                             >
                                                  {item}
                                             </CustomText>
                                        </button>
                                   ))}
                              </div>
                         </div>
                         <div className="px-8 lg:px-16 py-6 space-y-3 h-[20rem] flex flex-col justify-start">
                              {!toggle ? (
                                   <SignInOptions methods={SAASSigninMethods} />
                              ) : (
                                   <SignInOptions methods={SelfHostedSigninMethods} />
                              )}
                         </div>
                    </div>
                    <CustomText size="text-sm sm:text-base" color="#181D27" className="text-center mt-5">
                         By signing up you agree to the{' '}
                         <a href="#" className="font-bold cursor-pointer">
                              Privacy Policy
                         </a>
                         .
                    </CustomText>
               </div>
          </AuthWrapper>
     );
};

export default Login;
