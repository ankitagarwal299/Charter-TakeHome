import React from 'react';
import { formatMonthDisplay } from '../../utils/dateUtils';
import { formatPoints } from '../../utils/formatUtils';
import { UI_TEXT } from '../../constants/rewardsConfig';

const RewardsTable = ({ months, customers }) => {
    if (!customers || customers.length === 0) {
        return (
            <div className="table-container" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                {UI_TEXT.NO_DATA}
            </div>
        );
    }

    return (
        <div className="table-container">
            <table className="rewards-table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        {months.map((month) => (
                            <th key={month}>
                                {formatMonthDisplay(month)}
                            </th>
                        ))}
                        <th className="total-cell">Total Points</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.customerId}>
                            <td style={{ fontWeight: 500 }}>{customer.customerName}</td>

                            {months.map((month) => (
                                <td key={month}>
                                    {formatPoints(customer.monthly[month] || 0)}
                                </td>
                            ))}

                            <td className="total-cell">
                                {formatPoints(customer.total)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RewardsTable;
