import React from 'react';
import type { NewsArticle } from '../types';

interface NewsSectionProps {
  articles: NewsArticle[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ articles }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">News to help choose your car</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 hover:text-[#C70039] transition-colors cursor-pointer mb-2 leading-tight h-14 overflow-hidden">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{article.excerpt}</p>
              <div className="text-xs text-gray-400">
                <span>{article.author}</span> &bull; <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-6 text-center">
        <a href="#" className="text-[#C70039] font-semibold hover:underline">
          View All Latest News →
        </a>
      </div>
    </section>
  );
};

export default NewsSection;