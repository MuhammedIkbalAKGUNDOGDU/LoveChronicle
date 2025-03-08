import { Link } from "wouter";

export function Nav() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <a className="text-2xl font-bold text-pink-600">♥</a>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a href="#story" className="text-gray-600 hover:text-pink-600 transition-colors">Our Story</a>
            <a href="#timeline" className="text-gray-600 hover:text-pink-600 transition-colors">Timeline</a>
            <a href="#gallery" className="text-gray-600 hover:text-pink-600 transition-colors">Gallery</a>
            <a href="#poem" className="text-gray-600 hover:text-pink-600 transition-colors">Poem</a>
            <a href="#music" className="text-gray-600 hover:text-pink-600 transition-colors">Music</a>
            <a href="#quiz" className="text-gray-600 hover:text-pink-600 transition-colors">Quiz</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
