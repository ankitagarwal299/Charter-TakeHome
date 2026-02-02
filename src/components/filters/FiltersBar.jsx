import CustomerFilter from './CustomerFilter';
import MonthFilter from './MonthFilter';

const FiltersBar = ({
    customers,
    months,
    selectedCustomer,
    selectedMonth,
    onCustomerChange,
    onMonthChange,
    onReset
}) => {
    const hasActiveFilters = selectedCustomer !== 'all' || selectedMonth !== 'all';

    return (
        <div className="filters-bar">
            <CustomerFilter
                customers={customers}
                selectedCustomer={selectedCustomer}
                onSelect={onCustomerChange}
            />

            <MonthFilter
                months={months}
                selectedMonth={selectedMonth}
                onSelect={onMonthChange}
            />

            {hasActiveFilters && (
                <button
                    className="btn-reset"
                    onClick={onReset}
                    aria-label="Clear all filters"
                >
                    Clear Filters
                </button>
            )}
        </div>
    );
};

export default FiltersBar;
