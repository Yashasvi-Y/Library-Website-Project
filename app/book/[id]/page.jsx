"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Download } from "lucide-react"

// This would typically come from an API or database
const getBookById = (id) => {
  const allBooks = [
    ...trendingBooks,
    ...classicsBooks,
    ...psychologyBooks,
    ...scifiBooks,
    ...biographyBooks,
    ...fantasyBooks,
  ]

  return (
    allBooks.find((book) => book.id.toString() === id) || {
      id: 0,
      title: "Book not found",
      author: "Unknown",
      coverImage: "/placeholder.svg?height=400&width=300",
      description: "This book could not be found in our database.",
    }
  )
}

// Sample book data (same as in page.jsx)
const trendingBooks = [
  {
    id: 1,
    title: "The Magical Language of Others",
    author: "E.J. Koh",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "The Magical Language of Others is a powerful memoir about abandonment, becoming a translator, and a daughter's struggle to understand her Korean immigrant mother.",
  },
  // ... other trending books
]

const classicsBooks = [
  // ... classics books
]

const psychologyBooks = [
  // ... psychology books
]

const scifiBooks = [
  // ... sci-fi books
]

const biographyBooks = [
  // ... biography books
]

const fantasyBooks = [
  // ... fantasy books
]

export default function BookPage({ params }) {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState("")

  const book = getBookById(params.id)

  const handleReadOnline = () => {
    setModalContent("Reading online functionality would be implemented here.")
    setShowModal(true)
  }

  const handleDownload = () => {
    setModalContent("Download functionality would be implemented here.")
    setShowModal(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/3 h-[400px] md:h-[600px]">
          <div className="book-shadow">
            <Image
              src={book.coverImage || "/placeholder.svg"}
              alt={book.title}
              fill
              className="object-contain rounded-md"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{book.title}</h1>
          <h2 className="text-xl text-muted-foreground">by {book.author}</h2>

          <div className="border-t border-b py-4 my-6">
            <p className="text-lg">{book.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex items-center gap-2" onClick={handleReadOnline}>
              <BookOpen className="h-5 w-5" /> Read Online
            </Button>

            <Button variant="outline" className="flex items-center gap-2" onClick={handleDownload}>
              <Download className="h-5 w-5" /> Download Book
            </Button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <p>{modalContent}</p>
            <Button className="mt-4" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

