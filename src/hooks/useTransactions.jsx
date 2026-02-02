
import { useState, useEffect } from 'react';
import { fetchTransactions } from '../api/rewardsApi';
import { buildRewardsReport } from '../utils/rewards';

/**
 * Custom hook to fetch transactions and build the rewards report.
 * Manages loading, error, and data states.
 */
export const useTransactions = () => {
    const [data, setData] = useState({ months: [], customers: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [rawTransactions, setRawTransactions] = useState([]);

    useEffect(() => {
        let mounted = true;

        async function loadData() {
            setLoading(true);
            setError('');
            try {
                const transactions = await fetchTransactions();
                if (mounted) {
                    setRawTransactions(transactions);
                    const report = buildRewardsReport(transactions);
                    setData(report);
                }
            } catch (err) {
                if (mounted) {
                    setError('Failed to load transaction data. Please try again later.');
                    console.error(err);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        loadData();

        return () => {
            mounted = false;
        };
    }, []);

    return { data, rawTransactions, loading, error };
};
