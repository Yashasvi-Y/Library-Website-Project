import Image from "next/image"
import Link from "next/link"

// This would typically come from an API or database
const getCategoryBooks = (category) => {
  switch (category) {
    case "trending":
      return {
        title: "Top Trending",
        books: trendingBooks,
      }
    case "classics":
      return {
        title: "Classics",
        books: classicsBooks,
      }
    case "psychology":
      return {
        title: "Psychology",
        books: psychologyBooks,
      }
    case "science-fiction":
      return {
        title: "Science Fiction",
        books: scifiBooks,
      }
    case "biography":
      return {
        title: "Biography",
        books: biographyBooks,
      }
    case "fantasy":
      return {
        title: "Fantasy",
        books: fantasyBooks,
      }
    default:
      return {
        title: "Books",
        books: [],
      }
  }
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

export default function CategoryPage({ params }) {
  const { title, books } = getCategoryBooks(params.slug)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Link href={`/book/${book.id}`} key={book.id}>
            <div className="book-card group">
              <div className="relative h-[300px] w-full book-shadow transition-transform duration-300 group-hover:translate-y-[-10px]">
                <Image
                  src={book.coverImage || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-muted-foreground">{book.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

