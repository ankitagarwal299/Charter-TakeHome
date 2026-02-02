/**
 * Mock data service for the Rewards Application.
 * Simulates an asynchronous API call to fetch transaction history.
 */

const transactions = [
  // January
  {
    id: "t1",
    customerId: "c1",
    customerName: "Alice",
    amount: 120,
    date: "2026-01-05",
  },
  {
    id: "t2",
    customerId: "c1",
    customerName: "Alice",
    amount: 75,
    date: "2026-01-15",
  },
  {
    id: "t3",
    customerId: "c2",
    customerName: "Bob",
    amount: 49,
    date: "2026-01-08",
  },
  {
    id: "t4",
    customerId: "c2",
    customerName: "Bob",
    amount: 110,
    date: "2026-01-22",
  },
  {
    id: "t5",
    customerId: "c3",
    customerName: "Cara",
    amount: 200,
    date: "2026-01-10",
  },

  // February
  {
    id: "t6",
    customerId: "c1",
    customerName: "Alice",
    amount: 95,
    date: "2026-02-02",
  },
  {
    id: "t7",
    customerId: "c2",
    customerName: "Bob",
    amount: 130,
    date: "2026-02-14",
  },
  {
    id: "t8",
    customerId: "c3",
    customerName: "Cara",
    amount: 50,
    date: "2026-02-09",
  },
  {
    id: "t9",
    customerId: "c3",
    customerName: "Cara",
    amount: 51,
    date: "2026-02-19",
  },

  // March
  {
    id: "t10",
    customerId: "c1",
    customerName: "Alice",
    amount: 40,
    date: "2026-03-03",
  },
  {
    id: "t11",
    customerId: "c1",
    customerName: "Alice",
    amount: 180,
    date: "2026-03-18",
  },
  {
    id: "t12",
    customerId: "c2",
    customerName: "Bob",
    amount: 100,
    date: "2026-03-02",
  },
  {
    id: "t13",
    customerId: "c3",
    customerName: "Cara",
    amount: 101,
    date: "2026-03-25",
  },
];

/**
 * Fetches transaction data returning a Promise.
 * Simulates network delay.
 * 
 * @returns {Promise<Array>} Array of transaction objects
 */
export function fetchTransactions() {
  // Simulate async API call + possible network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...transactions]);
    }, 1000); // 1 second delay
  });
}
