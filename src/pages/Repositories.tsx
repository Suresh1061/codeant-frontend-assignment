import React, { useCallback } from 'react';
import CustomText from '../components/CustomText';
import { Database, Plus, RefreshCw } from 'lucide-react';
import SearchBar from '../components/Searchbar';
import { repositoryDetails, repositoryDetailType } from '../constants/constants';

type Props = {};

const Repositories: React.FC<Props> = () => {
     const handleSearch = useCallback((query: string) => {
          console.log(query);
     }, []);

     const ActionButton: React.FC<{
          icon: React.ReactNode;
          label: string;
          onClick?: () => void;
          isPrimary?: boolean;
     }> = ({ icon, label, onClick, isPrimary = false }) => (
          <button
               onClick={onClick}
               className={`flex gap-x-2 items-center justify-center rounded-lg py-2.5 px-3 border ${isPrimary
                    ? 'border-[#1570EF] bg-blue text-white'
                    : 'border-gray bg-transparent text-[#414651]'
                    }`}
               aria-label={label}
          >
               {icon}
               <CustomText color={isPrimary ? '#fff' : '#414651'}>{label}</CustomText>
          </button>
     );

     return (
          <>
               <div className="p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                         {/* Header */}
                         <div>
                              <CustomText
                                   size="text-2xl"
                                   fontWeight="font-semibold"
                                   color="#181D27"
                              >
                                   Repositories
                              </CustomText>
                              <CustomText size="text-sm" color="#414651">
                                   {repositoryDetails.length} total repositories
                              </CustomText>
                         </div>

                         {/* Actions */}
                         <div className="flex items-center gap-x-5">
                              <ActionButton
                                   icon={<RefreshCw className="h-4 w-4" />}
                                   label="Refresh All"
                                   onClick={() => console.log('Refreshing all repositories')}
                              />
                              <ActionButton
                                   icon={<Plus className="h-5 w-5" />}
                                   label="Add Repository"
                                   onClick={() => console.log('Adding a new repository')}
                                   isPrimary
                              />
                         </div>
                    </div>

                    {/* Search Bar */}
                    <SearchBar onSearch={handleSearch} />
               </div>

               {/* Repository List */}
               <div>
                    {repositoryDetails.map((repo: repositoryDetailType) => (
                         <button
                              className="w-full py-6 px-4 hover:bg-[#F5F5F5] border-t border-gray space-y-1.5"
                              key={repo.title}
                              aria-label={`Repository: ${repo.title}`}
                         >
                              <div className="flex gap-x-3 items-center">
                                   <CustomText size="text-xl" fontWeight="font-medium">
                                        {repo.title}
                                   </CustomText>
                                   <div className="rounded-full border border-[#B2DDFF] bg-[#EFF8FF] px-2 flex justify-center items-center">
                                        <CustomText color="#175CD3">{repo.status}</CustomText>
                                   </div>
                              </div>
                              <div className="flex gap-x-6 items-center">
                                   <CustomText size="text-base" className="flex gap-x-2 items-center">
                                        {repo.techTools}
                                        <div className="h-2 w-2 rounded-full bg-[#1570EF]" />
                                   </CustomText>
                                   <CustomText size="text-base" className="flex gap-x-1.5 items-center">
                                        <Database className="h-3 w-2.5" />
                                        {repo.size} KB
                                   </CustomText>
                                   <CustomText size="text-base">
                                        Updated {repo.time} day{repo.time > 1 ? 's' : ''} ago
                                   </CustomText>
                              </div>
                         </button>
                    ))}
               </div>
          </>
     );
};

export default Repositories;
