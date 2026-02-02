import React from 'react';
import { formatMonthDisplay } from '../../utils/dateUtils';

const MonthFilter = ({ months, selectedMonth, onSelect }) => {
    return (
        <div className="filter-group">
            <label htmlFor="month-select" className="filter-label">
                Filter by Month
            </label>
            <select
                id="month-select"
                className="filter-select"
                value={selectedMonth}
                onChange={(e) => onSelect(e.target.value)}
            >
                <option value="all">All Months</option>
                {months.map((month) => (
                    <option key={month} value={month}>
                        {formatMonthDisplay(month)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MonthFilter;
