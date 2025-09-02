import React from 'react';

const picks = [
  {
    title: 'Advances in Explainable AI for Healthcare',
    doi: '10.0000/example-doi-1',
    snippet: 'Exploring interpretable models for critical clinical decision-making across diverse datasets.'
  },
  {
    title: 'Serverless Architectures for Scalable Cloud Computing',
    doi: '10.0000/example-doi-2',
    snippet: 'A review of performance, cost, and observability trade-offs in modern cloud-native systems.'
  },
  {
    title: 'FinTech Innovations in Digital Payments',
    doi: '10.0000/example-doi-3',
    snippet: 'Assessing security, regulation, and user adoption across global markets.'
  },
];

const ResearchPicks = () => {
  return (
    <section aria-labelledby="picks-heading" className="bg-white">
      <h2 id="picks-heading" className="text-lg font-semibold text-gray-900 mb-3">Research picks</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {picks.map((p) => (
          <article key={p.doi} className="border border-gray-200 shadow-subtle hover:shadow p-4">
            <h3 className="text-[var(--brand-blue)] font-semibold leading-snug hover:underline">
              <a href="#">{p.title}</a>
            </h3>
            <p className="text-xs text-gray-500 mt-1">DOI: {p.doi}</p>
            <p className="text-sm text-gray-700 mt-2">{p.snippet}</p>
            <div className="mt-3 text-right">
              <a href="#" className="text-sm text-[var(--brand-blue)] hover:underline">Read more »</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResearchPicks;