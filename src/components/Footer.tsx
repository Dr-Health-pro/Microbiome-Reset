import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-secondary-400 flex items-center justify-center">
                <span className="text-2xl">🦠</span>
              </div>
              <span className="text-xl font-bold text-gradient">Microbiome Reset</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Transform your health from within. Science-backed virtual programs to optimize your gut microbiome and restore balance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Virtual Consultations</li>
              <li>Available Worldwide</li>
              <li>
                <a href="mailto:info@microbiomereset.com" className="hover:text-accent-400 transition-colors">
                  info@microbiomereset.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {currentYear} Microbiome Reset. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This is not medical advice. Consult with a healthcare professional before starting any new health program.
          </p>
        </div>
      </div>
    </footer>
  )
}
