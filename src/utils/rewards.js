import { REWARDS_CONFIG } from '../constants/rewardsConfig';
import { getMonthKey } from './dateUtils';

/**
 * Calculates reward points for a single transaction based on rules:
 * - 2 points for every dollar spent over $100
 * - 1 point for every dollar spent between $50 and $100
 * 
 * @param {number} amount - Transaction amount
 * @returns {number} Calculated reward points
 */
export function calculateRewardPoints(amount) {
  const dollars = Math.floor(amount);
  let points = 0;

  if (dollars > REWARDS_CONFIG.TIER_2_THRESHOLD) {
    points += (dollars - REWARDS_CONFIG.TIER_2_THRESHOLD) * REWARDS_CONFIG.TIER_2_MULTIPLIER;
    // Add points for the 50-100 range (which is filled if > 100)
    points += (REWARDS_CONFIG.TIER_2_THRESHOLD - REWARDS_CONFIG.TIER_1_THRESHOLD) * REWARDS_CONFIG.TIER_1_MULTIPLIER;
  } else if (dollars > REWARDS_CONFIG.TIER_1_THRESHOLD) {
    points += (dollars - REWARDS_CONFIG.TIER_1_THRESHOLD) * REWARDS_CONFIG.TIER_1_MULTIPLIER;
  }

  return points;
}

/**
 * Aggregates transactions into a rewards report by customer and month
 * 
 * @param {Array} transactions - List of transaction objects
 * @returns {Object} Report containing { months: [], customers: [] }
 */
export function buildRewardsReport(transactions) {
  const report = {};
  const monthsSet = new Set();

  transactions.forEach((t) => {
    const month = getMonthKey(t.date);
    monthsSet.add(month);

    if (!report[t.customerId]) {
      report[t.customerId] = {
        customerId: t.customerId,
        customerName: t.customerName,
        monthly: {},
        total: 0,
        transactionCount: 0
      };
    }

    const points = calculateRewardPoints(t.amount);

    if (!report[t.customerId].monthly[month]) {
      report[t.customerId].monthly[month] = 0;
    }

    report[t.customerId].monthly[month] += points;
    report[t.customerId].total += points;
    report[t.customerId].transactionCount += 1;
  });

  // Sort months chronologically
  const months = Array.from(monthsSet).sort();

  // Convert report object to array and ensure all months have entries
  const customers = Object.values(report).map((c) => {
    months.forEach((m) => {
      if (!c.monthly[m]) c.monthly[m] = 0;
    });
    return c;
  });

  // Sort customers by name for better UX
  customers.sort((a, b) => a.customerName.localeCompare(b.customerName));

  return { months, customers };
}
