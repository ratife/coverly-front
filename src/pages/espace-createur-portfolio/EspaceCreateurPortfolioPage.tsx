
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BalanceCards from './components/BalanceCards';
import StatCards from './components/StatCards';
import TransactionTable from './components/TransactionTable';
import PaymentMethods from './components/PaymentMethods';

const EspaceCreateurPortfolioPage: React.FC = () => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Navigation Sidebar */}
      <Sidebar />

      {/* Main Scrollable Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar">
        <Header />

        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          {/* Main Balances */}
          <BalanceCards />

          {/* Quick Metrics */}
          <StatCards />

          {/* Activity Logs */}
          <TransactionTable />

          {/* Settings & Extra info */}
          <PaymentMethods />
        </div>
      </main>
    </div>
  );
};

export default EspaceCreateurPortfolioPage;
