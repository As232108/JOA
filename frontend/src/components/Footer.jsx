export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 pt-10">
        <div className="container mx-auto px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <img
  src="https://res.cloudinary.com/dwd6bd0zy/image/upload/v1758389671/Sonbhadra_Badminton_mq5j9l.png"
  alt="Olympics Logo"
  className="h-8 scale-225"
/>

            </div>
  
            {/* Olympic Games */}
            <div>
              <h3 className="text-white font-semibold mb-3">Olympic Games</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Milano Cortina 2026</a></li>
                <li><a href="#" className="hover:text-white">Results & Medals</a></li>
                <li><a href="#" className="hover:text-white">Replays & Highlights</a></li>
                <li><a href="#" className="hover:text-white">All Olympic Games</a></li>
              </ul>
            </div>
  
            {/* Olympic Channel */}
            <div>
              <h3 className="text-white font-semibold mb-3">Olympic Channel</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">TV Channel</a></li>
                <li><a href="#" className="hover:text-white">Live Events</a></li>
                <li><a href="#" className="hover:text-white">Original Series</a></li>
                <li><a href="#" className="hover:text-white">Corporate</a></li>
              </ul>
            </div>
  
            {/* News */}
            <div>
              <h3 className="text-white font-semibold mb-3">News</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Podcast</a></li>
                <li><a href="#" className="hover:text-white">Topics</a></li>
              </ul>
            </div>
  
            {/* Explore */}
            <div>
              <h3 className="text-white font-semibold mb-3">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Athletes</a></li>
                <li><a href="#" className="hover:text-white">Sports</a></li>
              </ul>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700 mt-8"></div>
  
          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-gray-400 py-6 space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <a href="#" className="hover:text-white">International Olympic Committee</a>
              <a href="#" className="hover:text-white">Museum</a>
              <a href="#" className="hover:text-white">Shop</a>
              <a href="#" className="hover:text-white">About Us</a>
              <a href="#" className="hover:text-white">Contact Centre</a>
              <a href="#" className="hover:text-white">Sitemap</a>
              <a href="#" className="hover:text-white">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  