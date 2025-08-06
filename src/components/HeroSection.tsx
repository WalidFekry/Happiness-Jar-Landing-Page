import React from 'react';
import { Download, Apple, Star, MessageCircle, Bell, Smartphone } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-custom-teal/20 to-custom-blue/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://walid-fekry.com/img/happiness-jar-logo.png" 
              alt="برطمان السعادة - تطبيق الرسائل التحفيزية والإيجابية اليومية" 
              className="w-24 h-24 mx-auto rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-teal to-custom-blue">
              🌟 برطمان السعادة
            </span>
            <br />
            <span className="text-gray-700 text-3xl md:text-4xl">رسائل يومية تمنحك طاقة إيجابية وتحفيزًا مستمرًا!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            هل تبحث عن طريقة لبدء يومك بتفاؤل وسعادة؟ 😊 "برطمان السعادة" هو تطبيقك المثالي للحصول على جرعة يومية من التحفيز، الإيجابية، والاقتباسات الملهمة التي تساعدك على تحسين حالتك المزاجية وزيادة ثقتك بنفسك!
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-4 mb-12">
            <a 
              href="https://play.google.com/store/apps/details?id=com.jar.happiness"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-custom-teal to-custom-blue text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-all duration-300 flex items-center space-x-reverse space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="تحميل تطبيق برطمان السعادة مجاناً من Google Play"
            >
              <Download className="w-6 h-6" />
              <div className="text-right">
                <div className="text-sm">حمّل من</div>
                <div className="font-bold text-lg">Google Play</div>
              </div>
            </a>
            <a 
              href="https://apps.apple.com/us/app/%D8%A8%D8%B1%D8%B7%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D8%B3%D8%B9%D8%A7%D8%AF%D8%A9-%D8%B1%D9%81%D9%8A%D9%82%D9%83-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A/id6565808195"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-custom-orange to-custom-yellow text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-all duration-300 flex items-center space-x-reverse space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="تحميل تطبيق برطمان السعادة مجاناً من App Store"
            >
              <Apple className="w-6 h-6" />
              <div className="text-right">
                <div className="text-sm">حمّل من</div>
                <div className="font-bold text-lg">App Store</div>
              </div>
            </a>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <MessageCircle className="w-8 h-8 text-custom-teal mb-3 mx-auto" />
              <h3 className="font-bold text-gray-800 mb-2">4 رسائل يومية</h3>
              <p className="text-gray-600 text-sm">دفعة تحفيزية في أوقات مختلفة</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <Bell className="w-8 h-8 text-custom-yellow mb-3 mx-auto" />
              <h3 className="font-bold text-gray-800 mb-2">إشعارات تحفيزية</h3>
              <p className="text-gray-600 text-sm">تصلك تلقائياً دون فتح التطبيق</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <Smartphone className="w-8 h-8 text-custom-orange mb-3 mx-auto" />
              <h3 className="font-bold text-gray-800 mb-2">يعمل بدون إنترنت</h3>
              <p className="text-gray-600 text-sm">رفيقك الدائم أينما كنت</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-custom-teal mb-2">100,000+</div>
              <div className="text-gray-600">مستخدم سعيد</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-custom-blue mb-2">4.8</div>
              <div className="text-gray-600 flex items-center justify-center space-x-reverse space-x-1">
                <span>تقييم</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-custom-orange mb-2">5000+</div>
              <div className="text-gray-600">رسالة ملهمة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-custom-yellow mb-2">&lt;10MB</div>
              <div className="text-gray-600">حجم صغير</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;