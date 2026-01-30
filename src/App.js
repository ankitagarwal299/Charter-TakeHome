import { useEffect, useState } from "react";
import { fetchTransactions } from "./api/rewardsApi";
import { buildRewardsReport } from "./utils/rewards";
import RewardsTable from "./components/RewardsTable";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showRawData, setShowRawData] = useState(false);

  useEffect(() => {
    async function loadTransactions() {
      setLoading(true);
      setError("");

      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        setError("Failed to load transactions");
      } finally {
        setLoading(false);
      }
    }

    loadTransactions();
  }, []);

  const report = buildRewardsReport(transactions);
  console.log(report);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h1>Rewards Program Dashboard</h1>

      <p>
        Points: 1 point per $ between $50–$100, plus 2 points per $ over $100
        (per transaction).
      </p>

      {loading && <p>Loading transactions...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          <RewardsTable months={report.months} customers={report.customers} />

          <button
            onClick={() => setShowRawData(!showRawData)}
            style={{ marginTop: "20px" }}
          >
            {showRawData ? "Hide raw transactions" : "Show raw transactions"}
          </button>

          {showRawData && (
            <pre style={{ background: "#f6f6f6", padding: "10px" }}>
              {JSON.stringify(transactions, null, 2)}
            </pre>
          )}
        </>
      )}
    </div>
  );
}
