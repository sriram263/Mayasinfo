import React from 'react';

const subjects = [
  'Computing',
  'Engineering',
  'Healthcare',
  'Business & Management',
  'Energy & Environment',
  'Social Sciences',
];

const SubjectBrowse = () => {
  return (
    <section aria-labelledby="subjects-heading" className="bg-white">
      <h2 id="subjects-heading" className="text-lg font-semibold text-gray-900 mb-3">Browse by subject</h2>
      <div className="grid grid-cols-2 gap-2">
        {subjects.map((s) => (
          <a
            key={s}
            href="#"
            className="border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50 hover:border-gray-300"
          >
            {s}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SubjectBrowse;