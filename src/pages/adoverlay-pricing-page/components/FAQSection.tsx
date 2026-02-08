import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-32">
      <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_DATA.map((faq, idx) => (
          <div 
            key={idx} 
            className="border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden"
          >
            <button
              className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              onClick={() => toggleFAQ(idx)}
            >
              <span className="font-bold text-lg">{faq.question}</span>
              <span className="material-symbols-outlined text-primary transition-transform duration-300">
                {openIndex === idx ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {openIndex === idx && (
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-border-dark/50">
                <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;