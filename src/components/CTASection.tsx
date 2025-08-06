import React from 'react';
import { Download, Apple } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-custom-teal to-custom-blue text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          📲 حمّل التطبيق الآن واستمتع بطاقة إيجابية يومية! 💖
        </h2>
        <p className="text-xl mb-8 opacity-90">
          لا تفوّت فرصة الحصول على جرعتك اليومية من السعادة والتحفيز! 🚀✨
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-4 mb-8">
          <a 
            href="https://play.google.com/store/apps/details?id=com.jar.happiness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-reverse space-x-3 bg-white text-custom-teal px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-semibold"
            aria-label="تحميل تطبيق برطمان السعادة مجاناً من Google Play"
          >
            <Download className="w-6 h-6" />
            <div className="text-right">
              <div className="text-sm text-gray-600">حمّل مجاناً من</div>
              <div className="font-bold">Google Play</div>
            </div>
          </a>
          <a 
            href="https://apps.apple.com/us/app/%D8%A8%D8%B1%D8%B7%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D8%B3%D8%B9%D8%A7%D8%AF%D8%A9-%D8%B1%D9%81%D9%8A%D9%82%D9%83-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A/id6565808195"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-reverse space-x-3 bg-white text-custom-orange px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-semibold"
            aria-label="تحميل تطبيق برطمان السعادة مجاناً من App Store"
          >
            <Apple className="w-6 h-6" />
            <div className="text-right">
              <div className="text-sm text-gray-600">حمّل مجاناً من</div>
              <div className="font-bold">App Store</div>
            </div>
          </a>
        </div>

        <div className="text-sm opacity-75">
          🎉 حجم صغير (أقل من 10MB) • تصميم أنيق • تجربة استخدام مريحة
        </div>
      </div>
    </section>
  );
};

export default CTASection;