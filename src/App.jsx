import React from 'react';
import Header from './components/layout/Header';
import FiltersBar from './components/filters/FiltersBar';
import RewardsTable from './components/rewards/RewardsTable';
import Loading from './components/common/Loading';
import ErrorMessage from './components/common/ErrorMessage';
import { useTransactions } from './hooks/useTransactions';
import { useFilters } from './hooks/useFilters';

export default function App() {
  // custom hook for data fetching
  const { data, loading, error } = useTransactions();

  // custom hook for filtering logic
  const {
    selectedCustomer,
    setSelectedCustomer,
    selectedMonth,
    setSelectedMonth,
    filteredData,
    resetFilters
  } = useFilters(data);

  return (
    <div className="app-container">
      <Header />

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <main>
          <FiltersBar
            customers={data.customers}
            months={data.months}
            selectedCustomer={selectedCustomer}
            selectedMonth={selectedMonth}
            onCustomerChange={setSelectedCustomer}
            onMonthChange={setSelectedMonth}
            onReset={resetFilters}
          />


          <RewardsTable
            months={filteredData.months}
            customers={filteredData.customers}
          />
        </main>
      )}
    </div>
  );
}
