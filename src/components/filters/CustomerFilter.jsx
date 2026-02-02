import React from 'react';

const CustomerFilter = ({ customers, selectedCustomer, onSelect }) => {
    // Extract unique customers for the dropdown
    // Input 'customers' is already unique by customerId in the report, 
    // but let's ensure we are just using the list provided

    return (
        <div className="filter-group">
            <label htmlFor="customer-select" className="filter-label">
                Filter by Customer
            </label>
            <select
                id="customer-select"
                className="filter-select"
                value={selectedCustomer}
                onChange={(e) => onSelect(e.target.value)}
            >
                <option value="all">All Customers</option>
                {customers.map((customer) => (
                    <option key={customer.customerId} value={customer.customerName}>
                        {customer.customerName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomerFilter;
