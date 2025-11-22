import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0b1e]/60 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="tracking-[0.3em]" style={{ 
            color: '#6B9FE8',
            fontSize: '1.25rem',
            fontWeight: '700'
          }}>
            SPARKD
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            About Us
          </a>
          <div className="relative group">
            <button className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
              Products & Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <a href="#orion" className="text-white/80 hover:text-white transition-colors">
            Orion AI
          </a>
          <a href="#blog" className="text-white/80 hover:text-white transition-colors">
            Blog
          </a>
        </div>
        
        <Button 
          className="rounded-full px-6"
          style={{ backgroundColor: '#6B9FE8' }}
        >
          Book Free Consultation
        </Button>
      </nav>
    </header>
  );
}
