export default function RewardsTable({ months, customers }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={headerStyle}>Customer</th>

            {months.map((month) => (
              <th key={month} style={headerStyle}>
                {month}
              </th>
            ))}

            <th style={headerStyle}>Total</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerId}>
              <td style={cellStyle}>{customer.customerName}</td>

              {months.map((month) => (
                <td key={month} style={cellStyle}>
                  {customer.monthly[month]}
                </td>
              ))}

              <td style={{ ...cellStyle, fontWeight: "bold" }}>
                {customer.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const headerStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  background: "#f6f6f6",
  textAlign: "left",
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: "10px",
};
