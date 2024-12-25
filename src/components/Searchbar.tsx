import React, { useState, useCallback } from 'react'
import { Search, X } from 'lucide-react'

type SearchBarProps = {
     onSearch: (query: string) => void
     placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch}) => {
     const [query, setQuery] = useState('')

     const handleSearch = useCallback(() => {
          onSearch(query)
     }, [query, onSearch])

     const handleClear = () => {
          setQuery('')
          onSearch('')
     }

     const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
               handleSearch()
          }
     }

     return (
          <div className="relative flex items-center w-full sm:max-w-sm my-4">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-[#414651]" aria-hidden="true" />
               </div>
               <input
                    type="text"
                    className="w-full py-2 pl-10 pr-10 text-base text-gray-900 bg-white border border-[#D5D7DA] rounded-lg placeholder:text-[#414651] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search Repositories"
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    aria-label="Search"
               />
               {query && (
                    <button
                         className="absolute inset-y-0 right-0 flex items-center pr-3"
                         onClick={handleClear}
                         aria-label="Clear search"
                    >
                         <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    </button>
               )}
          </div>
     )
}

export default SearchBar

