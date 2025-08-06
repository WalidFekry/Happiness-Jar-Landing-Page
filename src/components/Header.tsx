import React from 'react';
import { Download, Apple } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-reverse space-x-3">
            <img 
              src="https://walid-fekry.com/img/happiness-jar-logo.png" 
              alt="برطمان السعادة - تطبيق الرسائل التحفيزية اليومية" 
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-xl font-bold text-gray-800">برطمان السعادة</h1>
          </div>
          <div className="flex items-center space-x-reverse space-x-3">
            <a 
              href="https://play.google.com/store/apps/details?id=com.jar.happiness"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-custom-teal to-custom-blue text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300 flex items-center space-x-reverse space-x-2 text-sm"
              aria-label="تحميل تطبيق برطمان السعادة من Google Play"
            >
              <Download className="w-4 h-4" />
              <span>Android</span>
            </a>
            <a 
              href="https://apps.apple.com/us/app/%D8%A8%D8%B1%D8%B7%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D8%B3%D8%B9%D8%A7%D8%AF%D8%A9-%D8%B1%D9%81%D9%8A%D9%82%D9%83-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A/id6565808195"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-custom-orange to-custom-yellow text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300 flex items-center space-x-reverse space-x-2 text-sm"
              aria-label="تحميل تطبيق برطمان السعادة من App Store"
            >
              <Apple className="w-4 h-4" />
              <span>iOS</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;