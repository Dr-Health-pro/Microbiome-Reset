'use client'

import { motion } from 'framer-motion'

interface Video {
  title: string
  description: string
  thumbnail: string
  duration: string
}

export default function VideoSection() {
  const videos: Video[] = [
    {
      title: 'Understanding Your Gut Microbiome',
      description: 'Learn the basics of gut health and why it matters for your overall wellness',
      thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
      duration: '12:30'
    },
    {
      title: 'The Gut-Brain Connection',
      description: 'Discover how your gut bacteria influence your mood and mental health',
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop',
      duration: '15:45'
    },
    {
      title: 'Foods That Heal Your Gut',
      description: 'Essential nutrition strategies for microbiome optimization',
      thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop',
      duration: '18:20'
    },
    {
      title: 'Probiotic vs Prebiotic: What You Need',
      description: 'Understanding the difference and how to use each effectively',
      thumbnail: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&auto=format&fit=crop',
      duration: '10:15'
    }
  ]

  return (
    <section className="py-20 bg-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Educational <span className="text-gradient">Video Library</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn about gut health through our collection of expert-led videos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-microbiome overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Placeholder for video thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/50 to-accent-500/50"></div>
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Access our complete video library with any program package
          </p>
          <a
            href="/packages"
            className="inline-block bg-gradient-to-r from-accent-500 to-primary-500 px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-accent-500/50 transition-all duration-300"
          >
            Explore Packages
          </a>
        </motion.div>
      </div>
    </section>
  )
}
