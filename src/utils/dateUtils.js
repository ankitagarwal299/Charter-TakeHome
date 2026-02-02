import { REWARDS_CONFIG } from '../constants/rewardsConfig';

/**
 * Formats a date string or object into a displayable string
 * @param {string|Date} date - The date to format
 * @returns {string} Formatted date string (e.g., "Jan 2026")
 */
export const formatMonthDisplay = (dateStr) => {
    if (!dateStr) return '';

    // If input is YYYY-MM format from keys
    if (typeof dateStr === 'string' && dateStr.match(/^\d{4}-\d{1,2}$/)) {
        const [year, month] = dateStr.split('-');
        const date = new Date(parseInt(year), parseInt(month) - 1);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }

    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;

    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

/**
 * Gets the month key in YYYY-MM format
 * @param {string|Date} date - The date to process
 * @returns {string} Year-Month key (e.g., "2026-1")
 */
export const getMonthKey = (date) => {
    const d = new Date(date);
    // Ensure valid date
    if (isNaN(d.getTime())) return '';

    const month = d.getMonth() + 1;
    return d.getFullYear() + "-" + month;
};
