import React from 'react';

const journals = [
  'Journal of AI Research',
  'Journal of Cloud Computing',
  'Journal of Finance & Economics',
  'Journal of Sustainable Engineering',
  'Journal of Healthcare Informatics',
  'Journal of Data Science Applications',
];

const JournalList = () => {
  return (
    <section aria-labelledby="journals-heading" className="bg-white">
      <h2 id="journals-heading" className="text-lg font-semibold text-gray-900 mb-3">Journals</h2>
      <ul className="divide-y divide-gray-200 border border-gray-200">
        {journals.map((title) => (
          <li key={title} className="px-4 py-3 hover:bg-gray-50 flex items-center justify-between">
            <a href="#" className="text-[var(--brand-blue)] hover:underline">{title}</a>
            <span className="text-xs text-gray-500">View »</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 text-right">
        <a href="#" className="text-sm text-[var(--brand-blue)] hover:underline">View all journals</a>
      </div>
    </section>
  );
};

export default JournalList;