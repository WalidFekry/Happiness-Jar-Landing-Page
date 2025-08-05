import React from 'react';
import { Star, Download, Smartphone, Shield, Bell, Calendar, Pen, Heart, Users, Award, MessageCircle, BookOpen, Target, Edit3, Smile, Sun, Zap, Brain, Apple, TrendingUp, Moon, Share2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-yellow-50 to-orange-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-reverse space-x-3">
              <img 
                src="https://walid-fekry.com/img/happiness-jar-logo.png" 
                alt="برطمان السعادة" 
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-xl font-bold text-gray-800">برطمان السعادة</h1>
            </div>
            <div className="flex items-center space-x-reverse space-x-3">
              <a 
                href="https://play.google.com/store/apps/details?id=com.jar.happiness"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-reverse space-x-2 text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Android</span>
              </a>
              <a 
                href="https://apps.apple.com/us/app/%D8%A8%D8%B1%D8%B7%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D8%B3%D8%B9%D8%A7%D8%AF%D8%A9-%D8%B1%D9%81%D9%8A%D9%82%D9%83-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A/id6565808195"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-300 flex items-center space-x-reverse space-x-2 text-sm"
              >
                <Apple className="w-4 h-4" />
                <span>iOS</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-300/20 to-blue-400/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://walid-fekry.com/img/happiness-jar-logo.png" 
                alt="برطمان السعادة" 
                className="w-24 h-24 mx-auto rounded-full shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                🌟 برطمان السعادة
              </span>
              <br />
              <span className="text-gray-700 text-3xl md:text-4xl">رسائل يومية تمنحك طاقة إيجابية</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              هل تبحث عن طريقة لبدء يومك بتفاؤل وسعادة؟ 😊 "برطمان السعادة" هو تطبيقك المثالي للحصول على جرعة يومية من التحفيز والإيجابية
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-4 mb-12">
              <a 
                href="https://play.google.com/store/apps/details?id=com.jar.happiness"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-2xl hover:from-teal-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-reverse space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
                className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-2xl hover:from-orange-500 hover:to-orange-600 transition-all duration-300 flex items-center space-x-reverse space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
                <MessageCircle className="w-8 h-8 text-teal-500 mb-3 mx-auto" />
                <h3 className="font-bold text-gray-800 mb-2">4 رسائل يومية</h3>
                <p className="text-gray-600 text-sm">دفعة تحفيزية في أوقات مختلفة</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <Bell className="w-8 h-8 text-yellow-500 mb-3 mx-auto" />
                <h3 className="font-bold text-gray-800 mb-2">إشعارات تحفيزية</h3>
                <p className="text-gray-600 text-sm">تصلك تلقائياً دون فتح التطبيق</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <Smartphone className="w-8 h-8 text-orange-500 mb-3 mx-auto" />
                <h3 className="font-bold text-gray-800 mb-2">يعمل بدون إنترنت</h3>
                <p className="text-gray-600 text-sm">رفيقك الدائم أينما كنت</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">50,000+</div>
                <div className="text-gray-600">مستخدم سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.7</div>
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
                <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                <div className="text-gray-600">رسالة ملهمة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">&lt;10MB</div>
                <div className="text-gray-600">حجم صغير</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ✨ مميزات التطبيق بالتفصيل
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              كل ما تحتاجه للحصول على جرعة يومية من السعادة والتحفيز
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">📩 رسائل البرطمان</h3>
              <p className="text-gray-600">رسائل يومية تمنحك تحفيزًا وإيجابية طوال اليوم</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">🔔 إشعارات تحفيزية</h3>
              <p className="text-gray-600">إشعارات تلقائية تذكرك بأن تكون متفائلًا وسعيدًا</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">⭐ مفضلة البرطمان</h3>
              <p className="text-gray-600">احفظ رسائلك المفضلة للوصول إليها لاحقًا</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">💬 اقتباسات البرطمان</h3>
              <p className="text-gray-600">شارك واقرأ اقتباسات ملهمة، وتفاعل معها</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 نصيحة اليوم</h3>
              <p className="text-gray-600">نصائح يومية تحفّزك على تطوير نفسك</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">📝 قسم الفضفضة</h3>
              <p className="text-gray-600">دوّن مشاعرك، عبّر عن أفكارك بحرية تامة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-teal-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              📚 أقسام متنوعة تشمل
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              محتوى شامل يغطي جميع جوانب الحياة الإيجابية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Smile className="w-8 h-8 text-teal-500 ml-3" />
                <h3 className="text-xl font-bold text-gray-800">السعادة 😊</h3>
              </div>
              <p className="text-gray-600">رسائل لتعزيز الشعور بالفرح والرضا</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Sun className="w-8 h-8 text-yellow-500 ml-3" />
                <h3 className="text-xl font-bold text-gray-800">التفاؤل 🌅</h3>
              </div>
              <p className="text-gray-600">اقتباسات تساعدك على التفكير بإيجابية</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-orange-500 ml-3" />
                <h3 className="text-xl font-bold text-gray-800">تحفيز الذات 🚀</h3>
              </div>
              <p className="text-gray-600">نصائح لتحقيق النجاح والإنجاز</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-500 ml-3" />
                <h3 className="text-xl font-bold text-gray-800">الثقة بالنفس 💪</h3>
              </div>
              <p className="text-gray-600">محتوى يساعدك على بناء شخصية قوية</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Apple className="w-8 h-8 text-green-500 ml-3" />
                <h3 className="text-xl font-bold text-gray-800">النصائح الصحية 🍏</h3>
              </div>
              <p className="text-gray-600">إرشادات لحياة أكثر صحة ونشاطًا</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-purple-500 ml-3" />
                <h3 className="text-xl font-bold text-gray-800">التنمية الذاتية 📈</h3>
              </div>
              <p className="text-gray-600">تطوير مهاراتك وإدارة وقتك بفعالية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            مميزات إضافية تجعل تجربتك أفضل
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-3xl shadow-lg">
              <Moon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">وضع ليلي مريح</h3>
              <p className="text-gray-600 leading-relaxed">
                تجربة قراءة ممتعة ومريحة للعين في أي وقت من اليوم أو الليل
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl shadow-lg">
              <Brain className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💭 بماذا تشعر؟</h3>
              <p className="text-gray-600 leading-relaxed">
                اختر حالتك المزاجية واحصل على رسائل تناسب شعورك الحالي
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              آراء المستخدمين
            </h2>
            <div className="flex items-center justify-center space-x-reverse space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">4.7</span>
              <span className="text-gray-600">(3,200+ تقييم)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "التطبيق ده بجد غيّر حياتي! الرسائل اليومية بتخليني أبدأ يومي بطاقة إيجابية رهيبة."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  أ
                </div>
                <div className="mr-3">
                  <div className="font-semibold text-gray-800">أحمد محمد</div>
                  <div className="text-sm text-gray-600">مستخدم منذ 8 شهور</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "الإشعارات التحفيزية بتوصلني في الوقت المناسب تماماً. التطبيق بسيط ومفيد جداً."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  ف
                </div>
                <div className="mr-3">
                  <div className="font-semibold text-gray-800">فاطمة علي</div>
                  <div className="text-sm text-gray-600">مستخدمة منذ 5 شهور</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "أحب قسم الفضفضة والمفضلة. بقدر أحفظ الرسائل اللي عجبتني وأرجعلها وقت ما أحتاجها."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  م
                </div>
                <div className="mr-3">
                  <div className="font-semibold text-gray-800">مريم حسن</div>
                  <div className="text-sm text-gray-600">مستخدمة منذ سنة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
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
              className="inline-flex items-center space-x-reverse space-x-3 bg-white text-teal-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-semibold"
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
              className="inline-flex items-center space-x-reverse space-x-3 bg-white text-orange-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-semibold"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-reverse space-x-3 mb-6">
              <img 
                src="https://walid-fekry.com/img/happiness-jar-logo.png" 
                alt="برطمان السعادة" 
                className="w-12 h-12 rounded-full"
              />
              <h3 className="text-2xl font-bold">برطمان السعادة</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              رفيقك اليومي للحصول على جرعة من السعادة والتحفيز. ابدأ رحلتك نحو حياة أكثر إيجابية اليوم!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-reverse md:space-x-8 text-sm text-gray-400 mb-6">
              <a href="mailto:walid_fekry@hotmail.com" className="hover:text-white transition-colors">
                📧 walid_fekry@hotmail.com
              </a>
              <a 
                href="https://sites.google.com/view/happinessjar/home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                🔒 سياسة الخصوصية
              </a>
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
    </div>
  );
}

export default App;