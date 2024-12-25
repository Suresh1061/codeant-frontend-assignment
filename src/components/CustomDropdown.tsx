'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface DropdownProps {
     options: string[];
     onSelect: (option: string) => void;
     placeholder?: string;
     className?: string;
}

const CustomDropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder = 'Select an option', className }: DropdownProps)=> {
     const [isOpen, setIsOpen] = useState(false)
     const [selectedOption, setSelectedOption] = useState<string | null>(null)
     const dropdownRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
          function handleClickOutside(event: MouseEvent) {
               if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                    setIsOpen(false)
               }
          }

          document.addEventListener('mousedown', handleClickOutside)
          return () => {
               document.removeEventListener('mousedown', handleClickOutside)
          }
     }, [])

     const handleToggle = () => setIsOpen(!isOpen)

     const handleSelect = (option: string) => {
          setSelectedOption(option)
          onSelect(option)
          setIsOpen(false)
     }

     return (
          <div className={`relative ${className}`} ref={dropdownRef}>
               <button
                    className="w-full pl-4 pr-8 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onClick={handleToggle}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
               >
                    <span className="block truncate">{selectedOption || placeholder}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                         <ChevronDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    </span>
               </button>
               {isOpen && (
                    <ul
                         className="absolute z-10 w-full py-1 mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60 focus:outline-none"
                         role="listbox"
                    >
                         {options.map((option, index) => (
                              <li
                                   key={index}
                                   className={`${selectedOption === option ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                                        } cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-50`}
                                   onClick={() => handleSelect(option)}
                                   role="option"
                                   aria-selected={selectedOption === option}
                              >
                                   <span className="block truncate">{option}</span>
                              </li>
                         ))}
                    </ul>
               )}
          </div>
     )
}

export default CustomDropdown