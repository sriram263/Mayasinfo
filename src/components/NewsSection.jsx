import React from 'react';

const news = [
  { date: '12 Aug 2025', title: 'New journal launch: Journal of Sustainable Engineering', snippet: 'Call for papers now open for Volume 1, Issue 1.' },
  { date: '02 Aug 2025', title: 'Open access policy update', snippet: 'Revised guidelines for authors and institutions.' },
  { date: '24 Jul 2025', title: 'Editorial board expansion', snippet: 'Welcoming new experts across AI, Cloud, and Finance.' },
];

const NewsSection = () => {
  return (
    <section aria-labelledby="news-heading" className="bg-white">
      <h2 id="news-heading" className="text-lg font-semibold text-gray-900 mb-3">Latest news</h2>
      <ul className="divide-y divide-gray-200 border border-gray-200">
        {news.map((n) => (
          <li key={n.title} className="px-4 py-3">
            <p className="text-xs text-gray-500">{n.date}</p>
            <a href="#" className="text-[var(--brand-blue)] font-semibold hover:underline">{n.title}</a>
            <p className="text-sm text-gray-700">{n.snippet}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsSection;