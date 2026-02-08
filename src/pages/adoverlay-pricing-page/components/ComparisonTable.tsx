import React from 'react';
import { COMPARISON_DATA } from '../constants';

const ComparisonTable: React.FC = () => {
  return (
    <section className="mb-32">
      <h2 className="text-3xl font-bold text-center mb-12">Comparaison détaillée des fonctionnalités</h2>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-border-dark">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 dark:border-border-dark">
              <th className="text-left p-6 font-bold text-slate-900 dark:text-white">Fonctionnalité</th>
              <th className="text-center p-6 font-bold text-slate-500 dark:text-slate-400">Starter</th>
              <th className="text-center p-6 font-bold text-primary">Pro</th>
              <th className="text-center p-6 font-bold text-slate-900 dark:text-white">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="border-b border-slate-100 dark:border-border-dark/50">
                <td className="p-6 font-medium text-slate-900 dark:text-white">{row.feature}</td>
                <td className="text-center p-6">
                  {typeof row.starter === 'boolean' ? (
                    row.starter ? '✓' : '✗'
                  ) : (
                    row.starter
                  )}
                </td>
                <td className="text-center p-6">
                  {typeof row.pro === 'boolean' ? (
                    row.pro ? '✓' : '✗'
                  ) : (
                    row.pro
                  )}
                </td>
                <td className="text-center p-6">
                  {typeof row.enterprise === 'boolean' ? (
                    row.enterprise ? '✓' : '✗'
                  ) : (
                    row.enterprise
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;