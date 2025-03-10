"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm" style={{ backgroundColor: "#c5e3f2" }}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-32">
            {/* Logo space - the actual logo will be placed here */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ color: "#227BA7" }}>
              <div className="relative h-10 w-32 mr-2">
                <Image src="/logos/navLogo.png" alt="Library Logo" fill className="object-contain" />
              </div>
              {/* Logo text space */}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[#227BA7] ${
              isActive("/") ? "text-[#227BA7] border-b-2 border-[#227BA7]" : "text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-[#227BA7] ${
              isActive("/about") ? "text-[#227BA7] border-b-2 border-[#227BA7]" : "text-gray-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/search"
            className={`text-sm font-medium transition-colors hover:text-[#227BA7] ${
              isActive("/search") ? "text-[#227BA7] border-b-2 border-[#227BA7]" : "text-gray-600"
            }`}
          >
            Search
          </Link>
          <Link
            href="/my-library"
            className={`text-sm font-medium transition-colors hover:text-[#227BA7] ${
              isActive("/my-library") ? "text-[#227BA7] border-b-2 border-[#227BA7]" : "text-gray-600"
            }`}
          >
            My Library
          </Link>
          <Link
            href="/library-news"
            className={`text-sm font-medium transition-colors hover:text-[#227BA7] ${
              isActive("/library-news") ? "text-[#227BA7] border-b-2 border-[#227BA7]" : "text-gray-600"
            }`}
          >
            Library News
          </Link>
          <Link
            href="/new-arrivals"
            className={`text-sm font-medium transition-colors hover:text-[#227BA7] ${
              isActive("/new-arrivals") ? "text-[#227BA7] border-b-2 border-[#227BA7]" : "text-gray-600"
            }`}
          >
            New Arrivals
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/auth/login">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className={`block py-2 px-3 text-base font-medium rounded-md ${
                isActive("/") ? "bg-[#c5e3f2] text-[#227BA7]" : "text-gray-600 hover:bg-[#c5e3f2]/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block py-2 px-3 text-base font-medium rounded-md ${
                isActive("/about") ? "bg-[#c5e3f2] text-[#227BA7]" : "text-gray-600 hover:bg-[#c5e3f2]/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/search"
              className={`block py-2 px-3 text-base font-medium rounded-md ${
                isActive("/search") ? "bg-[#c5e3f2] text-[#227BA7]" : "text-gray-600 hover:bg-[#c5e3f2]/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Search
            </Link>
            <Link
              href="/my-library"
              className={`block py-2 px-3 text-base font-medium rounded-md ${
                isActive("/my-library") ? "bg-[#c5e3f2] text-[#227BA7]" : "text-gray-600 hover:bg-[#c5e3f2]/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              My Library
            </Link>
            <Link
              href="/library-news"
              className={`block py-2 px-3 text-base font-medium rounded-md ${
                isActive("/library-news") ? "bg-[#c5e3f2] text-[#227BA7]" : "text-gray-600 hover:bg-[#c5e3f2]/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Library News
            </Link>
            <Link
              href="/new-arrivals"
              className={`block py-2 px-3 text-base font-medium rounded-md ${
                isActive("/new-arrivals") ? "bg-[#c5e3f2] text-[#227BA7]" : "text-gray-600 hover:bg-[#c5e3f2]/50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

