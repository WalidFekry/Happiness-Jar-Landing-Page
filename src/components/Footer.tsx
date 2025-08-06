import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-reverse space-x-3 mb-6">
            <img 
              src="https://walid-fekry.com/img/happiness-jar-logo.png" 
              alt="برطمان السعادة - تطبيق الرسائل التحفيزية اليومية" 
              className="w-12 h-12 rounded-full"
            />
            <h3 className="text-2xl font-bold">برطمان السعادة</h3>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            رفيقك اليومي للحصول على جرعة من السعادة والتحفيز. ابدأ رحلتك نحو حياة أكثر إيجابية اليوم!
          </p>
          
          {/* Developer Info */}
          <div className="bg-gray-800 p-6 rounded-2xl max-w-2xl mx-auto mb-6">
            <h4 className="text-lg font-bold text-white mb-3">👨‍💻 من تطوير</h4>
            <a 
              href="https://walid-fekry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-reverse space-x-2 text-custom-teal hover:text-white transition-colors font-semibold"
              aria-label="موقع المطور وليد فكري"
            >
              <span>Walid Fekry</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-reverse md:space-x-8 text-sm text-gray-400 mb-6">
            <a 
              href="https://www.facebook.com/App.Happiness"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="صفحة فيسبوك تطبيق برطمان السعادة"
            >
              📘 تابعنا على فيسبوك
            </a>
            <a 
              href="mailto:walid_fekry@hotmail.com" 
              className="hover:text-white transition-colors"
              aria-label="التواصل عبر البريد الإلكتروني"
            >
              📧 walid_fekry@hotmail.com
            </a>
            <a 
              href="https://play.google.com/store/apps/dev?id=6257553101128037563"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="تطبيقات مجانية أخرى من المطور"
            >
              📱 تطبيقات مجانية أخرى
            </a>
            <a 
              href="https://sites.google.com/view/happinessjar/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="سياسة الخصوصية لتطبيق برطمان السعادة"
            >
              🔒 سياسة الخصوصية
            </a>
          </div>

          {/* Template Source Section */}
          <div className="border-t border-gray-800 pt-6 mb-6">
            <div className="bg-gray-800 p-6 rounded-2xl max-w-2xl mx-auto">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center justify-center">
                <Github className="w-5 h-5 ml-2" />
                احصل على هذا القالب
              </h4>
              <p className="text-gray-300 mb-4 text-sm">
                هل أعجبك تصميم هذه الصفحة؟ يمكنك الحصول على الكود المصدري مجاناً!
              </p>
              <a 
                href="https://github.com/WalidFekry/Happiness-Jar-Landing-Page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-reverse space-x-2 bg-gradient-to-r from-custom-teal to-custom-blue text-white px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 font-semibold"
                aria-label="تحميل قالب صفحة الهبوط من GitHub"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex items-center justify-center space-x-reverse space-x-6 text-sm text-gray-400">
              <div>جميع الحقوق محفوظة © 2025</div>
              <div>•</div>
              <div>برطمان السعادة</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;