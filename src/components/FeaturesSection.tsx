import React from 'react';
import { MessageCircle, Bell, Heart, Share2, Target, Edit3 } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: '📩 رسائل البرطمان',
      description: 'رسائل يومية تمنحك تحفيزًا وإيجابية طوال اليوم',
      gradient: 'from-custom-teal to-custom-blue'
    },
    {
      icon: Bell,
      title: '🔔 إشعارات تحفيزية',
      description: 'إشعارات تلقائية تذكرك بأن تكون متفائلًا وسعيدًا',
      gradient: 'from-custom-yellow to-custom-orange'
    },
    {
      icon: Heart,
      title: '⭐ مفضلة البرطمان',
      description: 'احفظ رسائلك المفضلة للوصول إليها لاحقًا',
      gradient: 'from-custom-orange to-red-400'
    },
    {
      icon: Share2,
      title: '💬 اقتباسات البرطمان',
      description: 'شارك واقرأ اقتباسات ملهمة، وتفاعل معها',
      gradient: 'from-custom-blue to-purple-400'
    },
    {
      icon: Target,
      title: '🎯 نصيحة اليوم',
      description: 'نصائح يومية تحفّزك على تطوير نفسك',
      gradient: 'from-green-400 to-custom-teal'
    },
    {
      icon: Edit3,
      title: '📝 قسم الفضفضة',
      description: 'دوّن مشاعرك، عبّر عن أفكارك بحرية تامة',
      gradient: 'from-purple-400 to-pink-400'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ✨ مميزات التطبيق بالتفصيل
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            كل ما تحتاجه للحصول على جرعة يومية من السعادة والتحفيز والاقتباسات الملهمة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;