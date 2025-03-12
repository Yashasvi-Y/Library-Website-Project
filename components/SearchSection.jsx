"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchBy, setSearchBy] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    // Search logic would go here
    alert(`Searching for "${searchQuery}" by ${searchBy || "all categories"}`)
  }

  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Book search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10"
              />
              <Button type="submit" size="icon" className="absolute right-0 top-0 h-full rounded-l-none">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Search by:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              <Select onValueChange={setSearchBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSearchBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fiction">Fiction</SelectItem>
                  <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                  <SelectItem value="mystery">Mystery</SelectItem>
                  <SelectItem value="sci-fi">Science Fiction</SelectItem>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="thriller">Thriller</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="historic fiction">Historical Fiction</SelectItem>
                  <SelectItem value="biography & memoir">Biography & Memoir</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSearchBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Author" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular Authors">Popular Authors</SelectItem>
                  <SelectItem value="award-winning">Award-Winning</SelectItem>
                  <SelectItem value="new authors">New Authors</SelectItem>
                  <SelectItem value="bestselling authors">Bestselling Authors</SelectItem>
                  <SelectItem value="classic & timeless authors">Classic & Timeless Authors</SelectItem>
                  <SelectItem value="book-to-screen">Book-to-Screen Authors</SelectItem>
                  <SelectItem value="culturally-influential">Culturally Influential Authors</SelectItem>
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSearchBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Publisher" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="penguin">Penguin Random House</SelectItem>
                  <SelectItem value="harpercollins">HarperCollins</SelectItem>
                  <SelectItem value="simon">Simon & Schuster</SelectItem>
                  <SelectItem value="hachette">Hachette Livre</SelectItem>
                  <SelectItem value="macmillan">Macmillan Publishers</SelectItem>
                  <SelectItem value="harlequin">Harlequin</SelectItem>
                  <SelectItem value="tor">Tor Books</SelectItem>
                  <SelectItem value="oxford">Oxford University Press</SelectItem>
                  <SelectItem value="shueisha">Shueisha & other Manga Publishers</SelectItem>
                  <SelectItem value="rupa">Rupa Publications</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSearchBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="ISBN" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="isbn-10">ISBN-10</SelectItem>
                  <SelectItem value="isbn-13">ISBN-13</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setSearchBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Popularity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bestseller">Bestsellers</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="top-rated">Top Rated</SelectItem>
                  <SelectItem value="most-read">Most Read</SelectItem>
                  <SelectItem value="reader’s-choice">Reader’s Choice</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

