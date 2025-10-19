import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000016]/80 backdrop-blur-md border-b border-purple-700/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-purple-200 hover:text-white transition-colors">
            기능 소개
          </a>
          <a href="#terms" className="text-purple-200 hover:text-white transition-colors">
            이용약관
          </a>
          <a href="#privacy" className="text-purple-200 hover:text-white transition-colors">
            개인정보처리방침
          </a>
        </nav>
        
        <Button 
          className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white border-0"
          onClick={() => window.open('https://apps.apple.com/kr/app/%EC%88%A8%EC%88%A8/id6752624555', '_blank')}
        >
          앱 다운로드
        </Button>
      </div>
    </header>
  );
}
