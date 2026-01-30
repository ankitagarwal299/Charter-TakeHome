// Calculate points for one transaction
export function calculateRewardPoints(amount) {
  const dollars = Math.floor(amount);
  let points = 0;

  if (dollars > 100) {
    points += (dollars - 100) * 2;
    points += 50; // points for 50–100
  } else if (dollars > 50) {
    points += dollars - 50;
  }

  return points;
}

// Get month key like "2026-01"
export function getMonthKey(date) {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  return d.getFullYear() + "-" + month;
}

// Build rewards report by customer and month
export function buildRewardsReport(transactions) {
  const report = {};
  const months = [];

  transactions.forEach((t) => {
    const month = getMonthKey(t.date);

    if (!months.includes(month)) {
      months.push(month);
    }

    if (!report[t.customerId]) {
      report[t.customerId] = {
        customerId: t.customerId,
        customerName: t.customerName,
        monthly: {},
        total: 0,
      };
    }

    const points = calculateRewardPoints(t.amount);

    if (!report[t.customerId].monthly[month]) {
      report[t.customerId].monthly[month] = 0;
    }

    report[t.customerId].monthly[month] += points;
    report[t.customerId].total += points;
  });

  // Fill missing months with 0
  const customers = Object.values(report).map((c) => {
    months.forEach((m) => {
      if (!c.monthly[m]) c.monthly[m] = 0;
    });
    return c;
  });

  return { months, customers };
}
