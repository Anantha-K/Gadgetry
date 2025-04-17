import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white mt-16 py-12 bottom-0 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              TechBlog
            </h3>
            <p className="text-gray-400">
              Your trusted source for tech reviews, tutorials, and deals.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Explore</h4>
            <ul className="space-y-3">
              {['Gadgets', 'Software', 'Tutorials', 'Reviews'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/category/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick as Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' }
              ].map((a) => (
                <li key={a.name}>
                  <a 
                    href={a.path} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {a.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Stay Updated</h4>
            <p className="text-gray-400">
              Subscribe for the latest tech news and exclusive deals.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
                required
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-400 text-center">
          <p>
            &copy; {new Date().getFullYear()} TechBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer