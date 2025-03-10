"use client"

import Hero from "@/components/Hero"
import SearchSection from "@/components/SearchSection"
import BookSection from "@/components/BookSection"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero bookCovers={bookCovers} />
      <SearchSection />

      <div className="container mx-auto px-4 py-8 space-y-12">
        <BookSection title="Top Trending" books={trendingBooks} viewAllLink="/category/trending" />

        <BookSection title="Classics" books={classicsBooks} viewAllLink="/category/classics" />

        <BookSection title="Psychology" books={psychologyBooks} viewAllLink="/category/psychology" />

        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-primary"
            onClick={() => {
              // This would be handled with client-side JavaScript
              // to show more sections
              document.getElementById("more-sections")?.classList.toggle("hidden")
            }}
          >
            Try more... <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        <div id="more-sections" className="hidden space-y-12">
          <BookSection title="Science Fiction" books={scifiBooks} viewAllLink="/category/science-fiction" />

          <BookSection title="Biography" books={biographyBooks} viewAllLink="/category/biography" />

          <BookSection title="Fantasy" books={fantasyBooks} viewAllLink="/category/fantasy" />
        </div>
      </div>
    </div>
  )
}

// Sample book data
const bookCovers = [
  {
    title: "The Magical Language of Others",
    cover: "/books/TheMagicalLanguageofOthers.png",
  },
  {
    title: "The Wisdom of Tea",
    cover: "/books/TheWisdomofTea.png",
  },
  {
    title: "How Do You Live?",
    cover: "/books/howDoYouLive.png",
  },
  {
    title: "Lies Our Mothers Told Us",
    cover: "/books/liesOurMothers.png",
  },
  {
    title: "Call Me By Your Name",
    cover: "/books/CallMeByYourName.png",
  },
  {
    title: "A Harappan Adventure",
    cover: "/books/Harappan.png",
  },
  {
    title: "Again, But Better",
    cover: "/books/AgainbUTbETTER.png",
  },
  {
    title: "Sapiens",
    cover: "/books/sapiens.png",
  },
  {
    title: "Silence is my mother tongue",
    cover: "/books/SilenceIsMyMotherTongue.png",
  },
  {
    title: "They Both Die at the End",
    cover: "/books/TheyBothDieattheEnd.png",
  },
  {
    title: "Why I am an Atheist",
    cover: "/books/WhyIamanAtheist.png",
  },
]

const trendingBooks = [
  {
    id: 1,
    title: "The Magical Language of Others",
    author: "E.J. Koh",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "The Magical Language of Others is a powerful memoir about abandonment, becoming a translator, and a daughter's struggle to understand her Korean immigrant mother.",
  },
  {
    id: 2,
    title: "Likeable Badass",
    author: "Alison Fragale, PhD",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "An essential resource for anyone who wants to be both respected and liked, offering practical strategies for navigating the tension between authority and likability.",
  },
  {
    id: 3,
    title: "Twisted Games (Twisted Book 2)",
    author: "Ana Huang",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "Twisted Games follows Rhys and Bridget as they navigate their relationship amidst danger, duty, and desire. A forbidden romance with unexpected complications.",
  },
  {
    id: 4,
    title: "Ikigai",
    author: "Héctor García",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "This book is based on the Japanese concept of ikigai—the happiness of always being busy—and reveals the secrets to living a long and happy life like the residents of Okinawa, Japan.",
  },
]

const classicsBooks = [
  {
    id: 5,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "One Hundred Years of Solitude tells the story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the town of Macondo, a metaphor for Colombia and Latin America.",
  },
  {
    id: 6,
    title: "Pride and Prejudice (The Peacock Edition)",
    author: "Jane Austen",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "Jane Austen's masterpiece follows Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of early 19th-century England.",
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "To Kill a Mockingbird addresses issues of racial injustice and moral growth through the eyes of Scout Finch, a young girl in Alabama during the Great Depression.",
  },
  {
    id: 8,
    title: "A Clockwork Orange",
    author: "Anthony Burgess",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "A Clockwork Orange is a dystopian novel by Anthony Burgess, set in a near-future society that has a youth subculture of extreme violence. The protagonist is the central character, Alex, who narrates his violent exploits.",
  },
]

const psychologyBooks = [
  {
    id: 9,
    title: "Thinking Fast and Slow",
    author: "Daniel Kahneman",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "This book talks about the two systems that drive the way we think—System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.",
  },
  {
    id: 10,
    title: "The Brain Code",
    author: "Yoram Yovell",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "This book introduces the new and fascinating field of neuropsychoanalysis that aims to combine the insights of psychoanalysis with neuroscience to better understand human behavior.",
  },
  {
    id: 11,
    title: "One More Day",
    author: "Mitch Albom",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "Mitch is reunited with his mother, who died eight years earlier, for one more day. During their time together, she prepares his favorite meals, irons his shirts, and helps answer questions that have haunted him.",
  },
  {
    id: 12,
    title: "This is why you dream",
    author: "Rahul Jandial",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "A fascinating exploration of dreams and their meaning from a neuroscientist's perspective, explaining why we dream and how dreams affect our mental health.",
  },
]

const scifiBooks = [
  {
    id: 13,
    title: "Dune",
    author: "Frank Herbert",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "Set in the distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides, whose family accepts the stewardship of the desert planet Arrakis.",
  },
  {
    id: 14,
    title: "Foundation",
    author: "Isaac Asimov",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "The first novel in Isaac Asimov's Foundation Series, it tells the story of a group of scientists who seek to preserve knowledge as the Galactic Empire collapses.",
  },
]

const biographyBooks = [
  {
    id: 15,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "The exclusive biography of Steve Jobs, based on more than forty interviews with Jobs conducted over two years.",
  },
  {
    id: 16,
    title: "Becoming",
    author: "Michelle Obama",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "In her memoir, Michelle Obama chronicles the experiences that have shaped her—from her childhood in Chicago to her years as an executive.",
  },
]

const fantasyBooks = [
  {
    id: 17,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "An epic high-fantasy novel that follows the quest to destroy the One Ring, which was created by the Dark Lord Sauron.",
  },
  {
    id: 18,
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    coverImage: "/placeholder.svg?height=300&width=200",
    description:
      "The first novel in A Song of Ice and Fire, a series of fantasy novels that chronicles the violent dynastic struggles among noble families for the Iron Throne.",
  },
]

