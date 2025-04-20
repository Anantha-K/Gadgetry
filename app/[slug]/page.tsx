'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, Calendar, Tag, ChevronRight } from 'lucide-react';

export default function BlogPost() {
  const post = {
    title: "The Ultimate Guide to Mechanical Keyboards in 2025",
    slug: "ultimate-guide-mechanical-keyboards-2025",
    excerpt: "Discover the best mechanical keyboards for programmers, gamers, and typists with our comprehensive guide to switches, keycaps, and features.",
    coverImage: "https://random-image-pepebigotes.vercel.app/api/random-image", 
    publishedAt: "April 2, 2025", 
    readingTime: "8 min read",
    author: {
      name: "Tech Enthusiast",
      avatar: "https://avatar.iran.liara.run/public", 
    },
    content: `
      <p class="text-lg text-black leading-relaxed mb-6">Mechanical keyboards have come a long way since their inception, and in 2025, they're more versatile and feature-rich than ever. Whether you're looking for the satisfying click of a Blue switch or the smooth action of a Red, there's something for everyone in today's market.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Understanding Keyboard Switches</h2>
      
      <p class="leading-relaxed mb-6">The heart of any mechanical keyboard is its switches. These determine how the keyboard feels when you type, how loud it is, and even how quickly you can press keys repeatedly.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Linear Switches</h3>
      
      <p class="leading-relaxed mb-6">Linear switches like Cherry MX Reds and Blacks have a smooth keystroke without tactile feedback or audible clicks. They're popular among gamers for their fast actuation and lack of resistance.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Tactile Switches</h3>
      
      <p class="leading-relaxed mb-6">Tactile switches provide a bump you can feel when the key actuates. Cherry MX Browns are the classic example, offering tactile feedback without being too loud.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Clicky Switches</h3>
      
      <p class="leading-relaxed mb-6">For those who love auditory feedback, clicky switches like Cherry MX Blues produce a distinct click sound when pressed. They're satisfying to use but can be loud in shared environments.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Our Top Picks for 2025</h2>
      
    `,
    relatedPosts: [
      {
        title: "How to Customize Your Mechanical Keyboard",
        slug: "how-to-customize-mechanical-keyboard",
        image: "https://random-image-pepebigotes.vercel.app/api/random-image",
      },
      {
        title: "Wireless vs. Wired: Which Keyboard is Right for You?",
        slug: "wireless-vs-wired-keyboards",
        image: "https://random-image-pepebigotes.vercel.app/api/random-image",
      },
      {
        title: "Best Budget Mechanical Keyboards Under $100",
        slug: "best-budget-mechanical-keyboards",
        image: "https://random-image-pepebigotes.vercel.app/api/random-image",
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <nav className="flex mb-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-gray-700 font-bold">Mechanical Keyboards</span>
            </nav>

            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-600 mb-6 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </header>
            
            <div className="relative rounded-xl overflow-hidden mb-8 h-96">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            
            <article className="prose prose-lg max-w-none text-black">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link 
                  key={tag} 
                  href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 hover:bg-indigo-100 px-3 py-1 rounded-full text-sm text-gray-800 hover:text-indigo-800 transition-colors"
                >
                  <Tag className="inline h-3 w-3 mr-1" />
                  {tag}
                </Link>
              ))}
            </div>
            
    
          </div>
          
          <aside className="lg:col-span-4">
            
            
 
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Related Posts</h3>
              <div className="space-y-1">
                {post.relatedPosts.map((relatedPost, index) => (
                  <Link 
                    key={index} 
                    href={`/blog/${relatedPost.slug}`}
                    className="group block py-4 border-t-2 border-gray-100"
                  >
                    <div className="flex items-start">
                      <div className="relative w-24 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">Read more</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900 to-purple-800 text-white rounded-2xl shadow-lg p-8 mt-12 max-w-md mx-auto transition-transform  duration-300">
  <h3 className="font-bold text-2xl mb-3">📬 Join Our Newsletter</h3>
  <p className="text-indigo-200 mb-6 leading-relaxed">
    Stay ahead in tech. Get the freshest reviews, dev tips, and exclusive deals delivered weekly.
  </p>
  <form className="space-y-4">
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="w-full text-white px-4 py-3 rounded-lg placeholder-gray-500 focus:ring-1 focus:none focus:outline-none border-[0.5px] transition duration-200"
    />
    <button 
      type="submit"
      className="w-full bg-white text-indigo-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:bg-indigo-50 shadow-md hover:shadow-lg"
    >
      🚀 Subscribe Now
    </button>
  </form>
</div>

          </aside>
        </div>
        
        <section className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">More Articles</h2>
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              View all <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hover:cursor-pointer">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-white group rounded-xl shadow-sm overflow-hidden transition-transform  hover:translate-y-[-4px]">
                <div className="relative h-48">
                  <Image
                    src={`https://random-image-pepebigotes.vercel.app/api/random-image`}
                    alt="Article thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 hover:text-indigo-600 transition-colors">
                    <Link href="/blog/sample-post">
                      {i === 0 ? "Best Ergonomic Keyboards for Programmers" : 
                       i === 1 ? "Mechanical vs. Membrane: Which is Better?" : 
                                "How to Clean Your Mechanical Keyboard"}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {i === 0 ? "Protect your wrists and improve your coding efficiency with these top ergonomic keyboards for developers." : 
                     i === 1 ? "A detailed comparison of mechanical and membrane keyboards with pros and cons of each technology." : 
                              "Step-by-step guide to properly clean and maintain your mechanical keyboard for longer lifespan."}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {`${5 + i} min read`}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* Footer */}

    </div>
  );
}