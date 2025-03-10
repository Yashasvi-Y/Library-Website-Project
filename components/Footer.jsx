import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Instagram, Linkedin, Github, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1C465E" }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="h-16 w-48 mb-4 relative"><Image src="/logos/FooterLogo.png" alt="Library Logo" fill className="object-contain" /></div>
            <p className="text-blue-200 mb-4">Sign up to know about new books, authors and much more.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-[#1C465E]/80 border-[#1C465E]/60 text-white placeholder:text-blue-400 rounded-md px-3 py-2 
             focus:border-blue-400 focus:ring focus:ring-blue-300 hover:border-blue-500"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-use" className="text-blue-200 hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-blue-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-blue-200 hover:text-white">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/influencers" className="text-blue-200 hover:text-white">
                  Influencers
                </Link>
              </li>
              <li>
                <Link href="/company-reads" className="text-blue-200 hover:text-white">
                  Company Reads
                </Link>
              </li>
              <li>
                <Link href="/email-preferences" className="text-blue-200 hover:text-white">
                  Email Preferences
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faqs" className="text-blue-200 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping-procedure" className="text-blue-200 hover:text-white">
                  Shipping Procedure
                </Link>
              </li>
              <li>
                <Link href="/ask-librarian" className="text-blue-200 hover:text-white">
                  Ask Librarian
                </Link>
              </li>
              <li>
                <Link href="/permissions" className="text-blue-200 hover:text-white">
                  Permissions
                </Link>
              </li>
              <li>
                <Link href="/for-students" className="text-blue-200 hover:text-white">
                  For Students
                </Link>
              </li>
              <li>
                <Link href="/for-educators" className="text-blue-200 hover:text-white">
                  For Educators
                </Link>
              </li>
              <li>
                <Link href="/subrights" className="text-blue-200 hover:text-white">
                  Subrights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <p className="text-blue-200 mb-4">
              Sign up to know about new books, authors, and events with the books, authors, librarians and booksellers
              we love.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1C465E]/30 text-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} Library. All rights reserved.</p>
          <p className="mt-2">Designed with love for book lovers everywhere.</p>
        </div>
      </div>
    </footer>
  )
}

