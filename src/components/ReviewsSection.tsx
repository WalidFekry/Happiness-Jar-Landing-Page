import React from 'react';
import { Star } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      rating: 5,
      text: "التطبيق ده بجد غيّر حياتي! الرسائل اليومية بتخليني أبدأ يومي بطاقة إيجابية رهيبة.",
      author: "أحمد محمد",
      duration: "مستخدم منذ 8 شهور",
      initial: "أ",
      bgColor: "bg-custom-teal"
    },
    {
      rating: 5,
      text: "الإشعارات التحفيزية بتوصلني في الوقت المناسب تماماً. التطبيق بسيط ومفيد جداً.",
      author: "فاطمة علي",
      duration: "مستخدمة منذ 5 شهور",
      initial: "ف",
      bgColor: "bg-custom-yellow"
    },
    {
      rating: 5,
      text: "أحب قسم الفضفضة والمفضلة. بقدر أحفظ الرسائل اللي عجبتني وأرجعلها وقت ما أحتاجها.",
      author: "مريم حسن",
      duration: "مستخدمة منذ سنة",
      initial: "م",
      bgColor: "bg-custom-orange"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-custom-yellow/10 to-custom-orange/10">
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
            <span className="text-2xl font-bold text-gray-800">4.8</span>
            <span className="text-gray-600">(6,200+ تقييم)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center">
                <div className={`w-10 h-10 ${review.bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
                  {review.initial}
                </div>
                <div className="mr-3">
                  <div className="font-semibold text-gray-800">{review.author}</div>
                  <div className="text-sm text-gray-600">{review.duration}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;