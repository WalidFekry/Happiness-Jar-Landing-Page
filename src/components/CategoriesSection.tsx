import React from 'react';
import { Smile, Sun, Zap, Award, Apple, TrendingUp } from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: Smile,
      title: 'السعادة 😊',
      description: 'رسائل لتعزيز الشعور بالفرح والرضا',
      color: 'text-custom-teal'
    },
    {
      icon: Sun,
      title: 'التفاؤل 🌅',
      description: 'اقتباسات تساعدك على التفكير بإيجابية',
      color: 'text-custom-yellow'
    },
    {
      icon: Zap,
      title: 'تحفيز الذات 🚀',
      description: 'نصائح لتحقيق النجاح والإنجاز',
      color: 'text-custom-orange'
    },
    {
      icon: Award,
      title: 'الثقة بالنفس 💪',
      description: 'محتوى يساعدك على بناء شخصية قوية',
      color: 'text-custom-blue'
    },
    {
      icon: Apple,
      title: 'النصائح الصحية 🍏',
      description: 'إرشادات لحياة أكثر صحة ونشاطًا',
      color: 'text-green-500'
    },
    {
      icon: TrendingUp,
      title: 'التنمية الذاتية 📈',
      description: 'تطوير مهاراتك وإدارة وقتك بفعالية',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-custom-teal/10 to-custom-yellow/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            📚 أقسام متنوعة تشمل
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            محتوى شامل يغطي جميع جوانب الحياة الإيجابية والتطوير الذاتي والثقة بالنفس
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <category.icon className={`w-8 h-8 ${category.color} ml-3`} />
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;