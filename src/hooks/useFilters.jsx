import { useState, useMemo } from 'react';
import { filterRewardsData } from '../utils/filterUtils';

/**
 * Custom hook for managing reward filters (customer, month).
 * 
 * @param {Object} initialData - The full rewards report { months, customers }
 * @returns {Object} Filter state, setters, and filtered data
 */
export const useFilters = (initialData) => {
    const [selectedCustomer, setSelectedCustomer] = useState('all');
    const [selectedMonth, setSelectedMonth] = useState('all');

    // Memoize filtered results to prevent unnecessary recalculations
    const filteredData = useMemo(() => {
        return filterRewardsData(initialData, selectedCustomer, selectedMonth);
    }, [initialData, selectedCustomer, selectedMonth]);

    // Reset filters helper
    const resetFilters = () => {
        setSelectedCustomer('all');
        setSelectedMonth('all');
    };

    return {
        selectedCustomer,
        setSelectedCustomer,
        selectedMonth,
        setSelectedMonth,
        filteredData,
        resetFilters,
    };
};
