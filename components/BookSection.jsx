"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BookSection({ title, books, viewAllLink }) {
  const [hoveredBook, setHoveredBook] = useState(null)
  const [visibleBooks, setVisibleBooks] = useState(4)
  const sliderRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setVisibleBooks(1)
      } else if (width < 768) {
        setVisibleBooks(2)
      } else if (width < 1024) {
        setVisibleBooks(3)
      } else if (width < 1280) {
        setVisibleBooks(4)
      } else {
        setVisibleBooks(5)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{books.length} books</span>
          <Link href={viewAllLink}>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 rounded-full shadow-md"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              className="flex-shrink-0 w-[200px] transition-all duration-300"
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <Link href={`/book/${book.id}`}>
                <div className="relative">
                  <div
                    className={`relative h-[300px] w-[200px] book-shadow transition-all duration-300 ${
                      hoveredBook === book.id ? "transform -translate-y-2" : ""
                    }`}
                  >
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>

                  {hoveredBook === book.id && (
                    <div className="absolute inset-0 bg-black/70 rounded-md p-4 flex flex-col justify-end text-white overflow-y-auto">
                      <h3 className="font-bold text-lg mb-1">{book.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">by {book.author}</p>
                      <p className="text-xs line-clamp-6">{book.description}</p>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 rounded-full shadow-md"
          onClick={scrollRight}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

