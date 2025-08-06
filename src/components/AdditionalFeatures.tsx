import React from 'react';
import { Moon, Brain } from 'lucide-react';

const AdditionalFeatures: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          مميزات إضافية تجعل تجربتك أفضل
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-custom-teal/10 to-custom-blue/10 p-8 rounded-3xl shadow-lg">
            <Moon className="w-12 h-12 text-custom-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">وضع ليلي مريح</h3>
            <p className="text-gray-600 leading-relaxed">
              تجربة قراءة ممتعة ومريحة للعين في أي وقت من اليوم أو الليل
            </p>
          </div>
          <div className="bg-gradient-to-br from-custom-yellow/10 to-custom-orange/10 p-8 rounded-3xl shadow-lg">
            <Brain className="w-12 h-12 text-custom-orange mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">💭 بماذا تشعر؟</h3>
            <p className="text-gray-600 leading-relaxed">
              اختر حالتك المزاجية واحصل على رسائل تناسب شعورك الحالي
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;