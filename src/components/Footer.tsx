import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#000016] border-t border-purple-700/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <div id="terms" className="text-center">
            <h3 className="text-white mb-4">약관 및 정책</h3>
            <ul className="space-y-2 text-purple-300 flex justify-center gap-8">
              <li>
                <a href="/soomsoom-homepage/terms" className="hover:text-white transition-colors">
                  이용약관
                </a>
              </li>
              <li id="privacy">
                <a href="/soomsoom-homepage/privacy" className="hover:text-white transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-purple-700 text-center text-purple-400">
          <p>&copy; 2025 숨숨. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
