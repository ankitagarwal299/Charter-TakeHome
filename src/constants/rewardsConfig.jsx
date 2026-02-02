/**
 * Configuration constants for the Rewards Program application
 */
export const REWARDS_CONFIG = {
  // Reward tiers
  TIER_1_THRESHOLD: 50,  // Minimum amount to earn 1x points
  TIER_2_THRESHOLD: 100, // Minimum amount to earn 2x points
  
  // Point multipliers
  TIER_1_MULTIPLIER: 1, // Points per dollar between TIER_1 and TIER_2
  TIER_2_MULTIPLIER: 2, // Points per dollar above TIER_2
  
  // API and Simulation
  API_DELAY_MS: 1000,    // Simulated network delay
  
  // Date Formats
  DISPLAY_DATE_FORMAT: 'MMM dd, yyyy',
  DISPLAY_MONTH_FORMAT: 'MMMM yyyy', // e.g. January 2026
};

export const UI_TEXT = {
  LOADING: 'Loading transactions...',
  ERROR_FETCH: 'Failed to load transaction data directly from the server. Please try again later.',
  NO_DATA: 'No transactions found for the selected criteria.',
  TITLE: 'Rewards Dashboard',
  SUBTITLE: 'Track customer reward points monthly and annually based on transaction history.',
};
