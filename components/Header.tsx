export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-black shadow-lg">
      <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-white text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
          Hasan Arslan
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-6 text-white text-lg">
          <a href="#about" className="hover:text-blue-300 transition-colors">
            Hakkımda
          </a>
          <a href="#projects" className="hover:text-blue-300 transition-colors">
            Projeler
          </a>
          <a href="#contact" className="hover:text-blue-300 transition-colors">
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
}
