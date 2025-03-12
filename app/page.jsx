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
    coverImage: "/books/TheMagicalLanguageofOthers.png",
    description:
      "The Magical Language of Others is a powerful memoir about abandonment, becoming a translator, and a daughter's struggle to understand her Korean immigrant mother.",
  },
  {
    id: 2,
    title: "Likeable Badass",
    author: "Alison Fragale, PhD",
    coverImage: "/books/badass.png",
    description:
      "An essential resource for anyone who wants to be both respected and liked, offering practical strategies for navigating the tension between authority and likability.",
  },
  {
    id: 3,
    title: "The Lost Bookshop",
    author: "Evie Woods",
    coverImage: "/books/TheLostBookshop.png",
    description:
      "This novel intertwines the stories of two women from different eras, connected by a magical bookshop, exploring themes of independence, literature, and destiny.",
  },
  {
    id: 4,
    title: "A City on Mars",
    author: "Kelly Weinersmith & Zach Weinersmith",
    coverImage: "/books/ACityonMars.png",
    description:
      "The authors delve into the challenges and considerations of space settlement, questioning the feasibility and ethics of establishing human life on Mars.",
  },
  {
    id: 5,
    title: "The Saint of Bright Doors",
    author: "Vajra Chandrasekera",
    coverImage: "/books/TheSaintofBrightDoors.png",
    description:
      "Vajra Chandrasekera's fantasy novel follows a man trained from a young age to assassinate a prominent spiritual leader, set in a fictional city with supernatural 'bright doors'.",
  },
  {
    id: 6,
    title: "Beg, Borrow, or Steal",
    author: "Sarah Adams",
    coverImage: "/books/BegBorrowOrSteal.png",
    description:
      "Two feuding second-grade teachers (and neighbors) find themselves teaming up in this rivals-to-lovers romance by the New York Times bestselling author of The Rule Book and Practice Makes Perfect.",
  },
  {
    id: 7,
    title: "Witchcraft for Wayward Girls",
    author: "Grady Hendrix",
    coverImage: "/books/WitchcraftForWaywardGirls.png",
    description:
      "In Witchcraft for Wayward Girls, the author of How to Sell a Haunted House and The Final Girl Support Group delivers another searing, completely original novel and further cements his status as a “horror master” (NPR).",
  },
]

const classicsBooks = [
  {
    id: 8,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    coverImage: "/books/100YEARS.png",
    description:
      "One Hundred Years of Solitude tells the story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the town of Macondo, a metaphor for Colombia and Latin America.",
  },
  {
    id: 9,
    title: "Pride and Prejudice (The Peacock Edition)",
    author: "Jane Austen",
    coverImage: "/books/Pride.png",
    description:
      "Jane Austen's masterpiece follows Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of early 19th-century England.",
  },
  {
    id: 10,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "/books/Mockingbird.png",
    description:
      "To Kill a Mockingbird addresses issues of racial injustice and moral growth through the eyes of Scout Finch, a young girl in Alabama during the Great Depression.",
  },
  {
    id: 11,
    title: "A Clockwork Orange",
    author: "Anthony Burgess",
    coverImage: "/books/ClockworkOrange.png",
    description:
      "A Clockwork Orange is a dystopian novel by Anthony Burgess, set in a near-future society that has a youth subculture of extreme violence. The protagonist is the central character, Alex, who narrates his violent exploits.",
  },
  {
    id: 12,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "/books/TheGreatGatsby.png",
    description:
      "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.",
  },
  {
    id: 13,
    title: " In Search of Lost Time",
    author: "Marcel Proust",
    coverImage: "/books/InSearchofLostTime.png",
    description:
      "On the surface a traditional 'Bildungsroman' describing the narrator’s journey of self-discovery, this huge and complex book is also a panoramic and richly comic portrait of France in the author’s lifetime, and a profound meditation on the nature of art, love, time, memory and death.",
  },
]

const psychologyBooks = [
  {
    id: 14,
    title: "Thinking Fast and Slow",
    author: "Daniel Kahneman",
    coverImage: "/books/ThinkingFastandSlow.png",
    description:
      "This book talks about the two systems that drive the way we think—System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical.",
  },
  {
    id: 15,
    title: "The Brain Code",
    author: "Yoram Yovell",
    coverImage: "/books/Braincode.png",
    description:
      "This book introduces the new and fascinating field of neuropsychoanalysis that aims to combine the insights of psychoanalysis with neuroscience to better understand human behavior.",
  },
  {
    id: 16,
    title: "One More Day",
    author: "Mitch Albom",
    coverImage: "/books/oneMoreDay.png",
    description:
      "Mitch is reunited with his mother, who died eight years earlier, for one more day. During their time together, she prepares his favorite meals, irons his shirts, and helps answer questions that have haunted him.",
  },
  {
    id: 17,
    title: "This is why you dream",
    author: "Rahul Jandial",
    coverImage: "/books/whyYouDream.png",
    description:
      "A fascinating exploration of dreams and their meaning from a neuroscientist's perspective, explaining why we dream and how dreams affect our mental health.",
  },
  {
    id: 18,
    title: "Blink: The Power of Thinking Without Thinking",
    author: "Malcolm Gladwell",
    coverImage: "/books/Blink.png",
    description:
      "It presents in popular science format research from psychology and behavioral economics on the adaptive unconscious: mental processes that work rapidly and automatically from relatively little information.",
  },
  {
    id: 19,
    title: "Emotional Intelligence",
    author: "Daniel Goleman",
    coverImage: "/books/EmotionalIntelligence.png",
    description:
      "In this book, Goleman posits that emotional intelligence is as important as IQ for success, including in academic, professional, social, and interpersonal aspects of one's life.",
  },
  {
    id: 20,
    title: "The Tipping Point: How Little Things Can Make a Big Difference",
    author: "Malcolm Gladwell",
    coverImage: "/books/TheTippingPoint.png",
    description:
      "The debut book by Malcolm Gladwell, first published by Little, Brown in 2000. Gladwell defines a tipping point as 'the moment of critical mass, the threshold, the boiling point.' ",
  },

]

const scifiBooks = [
  {
    id: 21,
    title: "Dune",
    author: "Frank Herbert",
    coverImage: "/books/Dune.png",
    description:
      "Set in the distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides, whose family accepts the stewardship of the desert planet Arrakis.",
  },
  {
    id: 22,
    title: "Foundation",
    author: "Isaac Asimov",
    coverImage: "/books/Foundation.png",
    description:
      "The first novel in Isaac Asimov's Foundation Series, it tells the story of a group of scientists who seek to preserve knowledge as the Galactic Empire collapses.",
  },
  {
    id: 23,
    title: "Ender’s Game",
    author: "Orson Scott Card",
    coverImage: "/books/Ender.png",
    description:
      "Andrew 'Ender' Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life.",
  },
  {
    id: 24,
    title: "1984",
    author: "George Orwell, Thomas Pynchon",
    coverImage: "/books/1984.png",
    description:
      "The story of one man's Nightmare Odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality.",
  },
  {
    id: 25,
    title: "Hyperion",
    author: "Dan Simmons",
    coverImage: "/books/Hyperion.png",
    description:
      "On the world called Hyperion, beyond the law of the Hegemony of Man, there waits the creature called the Shrike. There are those who worship it. There are those who fear it. And there are those who have vowed to destroy it.",
  },
  {
    id: 26,
    title: "The Martian",
    author: "Andy Weir",
    coverImage: "/books/TheMartian.png",
    description:
      "The Martian tells the story of Mark Watney, an astronaut on the Ares 3 mission to Mars. After a terrible storm almost destroys the ship and the base, the crew of his ship believe he is dead."
  },
  {
    id: 27,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    coverImage: "/books/TheHungerGames.png",
    description:
      "The Hunger Games are a series of young adult dystopian novels written by American author Suzanne Collins. The series consists of a trilogy that follows teenage protagonist Katniss Everdeen, and two prequels.",
  },
]

const biographyBooks = [
  {
    id: 28,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    coverImage: "/books/Steve.png",
    description:
      "The exclusive biography of Steve Jobs, based on more than forty interviews with Jobs conducted over two years.",
  },
  {
    id: 29,
    title: "Becoming",
    author: "Michelle Obama",
    coverImage: "/books/Becoming.png",
    description:
      "In her memoir, Michelle Obama chronicles the experiences that have shaped her—from her childhood in Chicago to her years as an executive.",
  },
  {
    id: 30,
    title: "A Song for Nagasaki",
    author: "Paul Glynn",
    coverImage: "/books/Nagasaki.png",
    description:
      "On August 9, 1945, an American B-29 dropped an atomic bomb on Nagasaki, Japan, killing tens of thousands of people in the blink of an eye, while fatally injuring and poisoning thousands more. Among the survivors was Takashi Nagai, a pioneer in radiology research and a convert to the Catholic Faith.",
  },
  {
    id: 31,
    title: "I Am Malala",
    author: "by Malala Yousafzai, Christina Lamb(with)",
    coverImage: "/books/Malala.png",
    description:
      "A truly remarkable story of one young women standing up for her rights and becoming a global symbol. This is deeply moving, profoundly impactful and will be a spark in humanity’s resilience for a long time.",
  },
  {
    id: 32,
    title: "The Truths We Hold: An American Journey",
    author: "by Kamala Harris",
    coverImage: "/books/TruthsWeHold.png",
    description:
      "Kamala Harris shares her personal story while examining the political landscape ahead of us. This is an important American tale filled with insights and inspiration.",
  },
  {
    id: 33,
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    coverImage: "/books/Einstein.png",
    description:
      "Einstein was a rebel and nonconformist from boyhood days, and these character traits drove both his life and his science. In this narrative, Walter Isaacson explains how his mind worked and the mysteries of the universe that he discovered.",
  },
]

const fantasyBooks = [
  {
    id: 34,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    coverImage: "/books/Rings.png",
    description:
      "An epic high-fantasy novel that follows the quest to destroy the One Ring, which was created by the Dark Lord Sauron.",
  },
  {
    id: 35,
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    coverImage: "/books/AGameofThrones.png",
    description:
      "The first novel in A Song of Ice and Fire, a series of fantasy novels that chronicles the violent dynastic struggles among noble families for the Iron Throne.",
  },
  {
    id: 36,
    title: "Watership Down",
    author: "Richard Adams",
    coverImage: "/books/WatershipDown.png",
    description:
      "Set in Hampshire in southern England, the story features a small group of rabbits. Although they live in their natural wild environment, with burrows, they are anthropomorphised, possessing their own culture, language, proverbs, poetry, and mythology.",
  },
  {
    id: 37,
    title: "Children of Blood and Bone",
    author: "Tomi Adeyemi",
    coverImage: "/books/BloodandBone.png",
    description:
      "Zélie remembers when Orisha was full of magic. When different clans ruled with unique powers, including her Reaper mother who could summon forth souls.",
  },
  {
    id: 38,
    title: "Wooing the Witch Queen",
    author: "Stephanie Burgis",
    coverImage: "/books/WooingtheWitchQueen.png",
    description:
      "Disguised as a wizard, an archduke hides from his enemies in plain sight as a librarian in Queen Saskia's chaotic library of magic.",
  },
  {
    id: 39,
    title: "A Tempest of Tea",
    author: "Hafsah Faizal",
    coverImage: "/books/ATempestofTea.png",
    description:
      "Vampires. Secrets. Tea. What more do you want?! Already causing a ruckus on TikTok, in A Tempest of Tea, Hafsah Faizal takes us to Arthie Casimir's prestigious tea establishment in the city of White Roaring.",
  },
  {
    id: 40,
    title: "For She is Wrath",
    author: "Isaac Asimov",
    coverImage: "/books/Wrath.png",
    description:
      "In this lovers-to-enemies fantasy debut from Emily Varga, Dania seeks revenge after being betrayed by her ex and falsely imprisoned.",
  },
]

