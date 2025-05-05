export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-black py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-white text-lg mb-4">
          &copy; 2025 Hasan Arslan. Tüm Hakları Saklıdır.
        </p>

        {/* Sosyal Medya Linkleri */}
        <div className="flex justify-center space-x-6 text-white text-2xl">
          <a
            href="https://github.com/Hasan-Arslan2779"
            target="_blank"
            className="hover:text-blue-300 transition-colors"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hasan-arslannn"
            target="_blank"
            className="hover:text-blue-300 transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:hasanar2779@gmail.com"
            className="hover:text-blue-300 transition-colors"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Copyright Bilgisi */}
        <p className="text-white text-sm mt-4">
          Bu web sitesi, açık kaynaklı bir proje olarak geliştirilmektedir.
        </p>
      </div>
    </footer>
  );
}
