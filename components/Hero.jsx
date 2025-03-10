"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function Hero({ bookCovers = [] }) {
  const scrollRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  // Move to the next slide (loops back)
  const nextSlide = () => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
    if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" })
    }
  }

  // Move to the previous slide
  const prevSlide = () => {
    if (!scrollRef.current) return
    if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: "smooth" })
    } else {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#c5e3f2]">
      {/* Container */}
      <div className="container relative mx-auto px-4 py-12 md:py-24">
        
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition z-10"
        >
          ❮
        </button>

        {/* Scrollable Books */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden scroll-smooth space-x-4 w-full"
          style={{ whiteSpace: "nowrap", display: "flex", gap: "16px",paddingTop: "20px", paddingBottom: "20px"  }}
        >
          {bookCovers.map((book, index) => (
            <div
              key={index}
              className="relative h-[180px] w-[120px] md:h-[220px] md:w-[150px] flex-shrink-0 transition-all duration-300 rounded-md overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
                transform: hoveredIndex === index ? "translateY(-20px)" : "translateY(0)",
                boxShadow:
                  hoveredIndex === index
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 20px 5px rgba(255, 255, 255, 0.3)"
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image src={book.cover || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition z-10"
        >
          ❯
        </button>
      </div>

      {/* Tagline */}
      <div className="mb-12  text-center">
        <h2
          className="text-3xl md:text-4xl font-bold italic text-blue-800 euphoria-font"
          style={{
            color: "#227BA7",
            fontFamily: "cursive, 'Brush Script MT', 'Comic Sans MS'",
            fontSize: "2.5rem",
            lineHeight: "1.2",
          }}
        >
          a reader is never alone
        </h2>
      </div>
    </section>
  )
}