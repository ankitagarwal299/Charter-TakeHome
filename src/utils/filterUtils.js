/**
 * Filters transaction data based on customer and date range
 * @param {Object} report - The full rewards report { months, customers }
 * @param {string} customerFilter - Selected customer name or ID
 * @param {string} monthFilter - Selected month key
 * @returns {Object} Filtered report
 */
export const filterRewardsData = (report, customerFilter, monthFilter) => {
    if (!report || !report.customers) return { months: [], customers: [] };

    // Filter customers
    let filteredCustomers = report.customers;

    if (customerFilter && customerFilter !== 'all') {
        filteredCustomers = filteredCustomers.filter(
            c => c.customerName === customerFilter || c.customerId === customerFilter
        );
    }

    // Filter months (columns)
    let filteredMonths = report.months;

    if (monthFilter && monthFilter !== 'all') {
        filteredMonths = report.months.filter(m => m === monthFilter);
    }

    // If we filtered months, we might want to recalculate totals for the view, 
    // but usually requirements say "Total" implies total for the period.
    // For this exercise, let's keep the customer objects as is but maybe we only show specific columns.
    // However, usually detailed breakdown implies we might want to adjust the 'total' to reflect the view.
    // Let's create a *view* copy of customers if months are filtered.

    if (monthFilter && monthFilter !== 'all') {
        filteredCustomers = filteredCustomers.map(customer => {
            // Calculate total only for the selected month(s)
            const visibleTotal = filteredMonths.reduce((sum, month) => {
                return sum + (customer.monthly[month] || 0);
            }, 0);

            return {
                ...customer,
                total: visibleTotal // Update total to reflect visible columns
            };
        });
    }

    return {
        months: filteredMonths,
        customers: filteredCustomers
    };
};
