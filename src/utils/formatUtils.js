/**
 * Formats a number as a currency string
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string (e.g., "$120.00")
 */
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

/**
 * Formats points with thousands separator
 * @param {number} points - The points to format
 * @returns {string} Formatted points string (e.g., "1,234")
 */
export const formatPoints = (points) => {
    return new Intl.NumberFormat('en-US').format(points);
};
