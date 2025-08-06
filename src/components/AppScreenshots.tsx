import React from "react";
import screenshot1 from "../assets/images/screenshot1.png";
import screenshot2 from "../assets/images/screenshot2.png";
import screenshot3 from "../assets/images/screenshot3.png";
import screenshot4 from "../assets/images/screenshot4.png";

const AppScreenshots: React.FC = () => {
  const screenshots = [
    {
      src: screenshot1,
      alt: "الواجهة الرئيسية لتطبيق برطمان السعادة",
      title: "رسائل البرطمان",
    },
    {
      src: screenshot2,
      alt: "شاشة أقسام الرسائل في تطبيق برطمان السعادة",
      title: "أقسام البرطمان",
    },
    {
      src: screenshot3,
      alt: "شاشة المفضلة والإشعارات في تطبيق برطمان السعادة",
      title: "إشعارات البرطمان",
    },
    {
      src: screenshot4,
      alt: "شاشة الاقتباسات الملهمة في تطبيق برطمان السعادة",
      title: "اقتباسات البرطمان",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            📱 صور من التطبيق
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           تصميم عصري وتجربة سلسة للمستخدم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-custom-teal/10 to-custom-blue/10 p-4 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-800">{screenshot.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
