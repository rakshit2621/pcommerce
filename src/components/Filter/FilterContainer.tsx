import { useState } from "react"
import { motion } from "framer-motion"

type FilterContainerProps = {
  onClose: () => void
}

const FilterContainer: React.FC<FilterContainerProps> = ({ onClose }) => {
  const [minPrice, setMinPrice] = useState(500)
  const [maxPrice, setMaxPrice] = useState(3000)
  const minGap = 100
  const maxLimit = 5000

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (value <= maxPrice - minGap) {
      setMinPrice(value)
    }
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (value >= minPrice + minGap) {
      setMaxPrice(value)
    }
  }

  const handleApply = () => {
    console.log("Applied Price Range:", minPrice, maxPrice)
    onClose()
  }

  // Calculate percentage for visual elements
  const minPercent = (minPrice / maxLimit) * 100
  const maxPercent = (maxPrice / maxLimit) * 100

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-br from-white to-gray-50 p-7 rounded-2xl shadow-2xl w-[420px] max-w-[95vw] border border-gray-100"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleApply}
            className="cursor-pointer apply-button relative overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Apply Filter
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        {/* Price Range */}
        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-base font-semibold text-gray-800 mb-2">Price Range</h3>

          <div className="flex justify-between items-center text-sm font-medium mb-2">
            <div className="flex items-center justify-center px-4 py-2 bg-blue-50 rounded-lg text-blue-700">
              ₹{minPrice.toLocaleString()}
            </div>
            <div className="text-gray-400">to</div>
            <div className="flex items-center justify-center px-4 py-2 bg-blue-50 rounded-lg text-blue-700">
              ₹{maxPrice.toLocaleString()}
            </div>
          </div>

          {/* Slider Wrapper */}
          <div className="relative h-14 mt-2 mb-2 px-2">
            {/* Background Track */}
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full -translate-y-1/2" />

            {/* Active Range Fill */}
            <div
              className="absolute top-1/2 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full -translate-y-1/2"
              style={{
                left: `${minPercent}%`,
                width: `${maxPercent - minPercent}%`,
              }}
            />

            {/* Range Inputs */}
            <input
              type="range"
              min={0}
              max={maxLimit}
              step={100}
              value={minPrice}
              onChange={handleMinChange}
              className="absolute top-1/2 -translate-y-1/2 w-full appearance-none pointer-events-auto bg-transparent range-thumb-min"
            />

            <input
              type="range"
              min={0}
              max={maxLimit}
              step={100}
              value={maxPrice}
              onChange={handleMaxChange}
              className="absolute top-1/2 -translate-y-1/2 w-full appearance-none pointer-events-auto bg-transparent range-thumb-max"
            />
            
          </div>

          {/* Manual Input */}
         
        </div>

        {/* Quick Presets */}
        {/* <div className="mt-5">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Quick Presets</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setMinPrice(0)
                setMaxPrice(1000)
              }}
              className="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors text-gray-700"
            >
              Under ₹1,000
            </button>
            <button
              onClick={() => {
                setMinPrice(1000)
                setMaxPrice(2000)
              }}
              className="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors text-gray-700"
            >
              ₹1,000 - ₹2,000
            </button>
            <button
              onClick={() => {
                setMinPrice(2000)
                setMaxPrice(5000)
              }}
              className="px-3 py-1.5 text-xs bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors text-gray-700"
            >
              ₹2,000+
            </button>
          </div>
        </div> */}
      </motion.div>
    </div>
  )
}

export default FilterContainer