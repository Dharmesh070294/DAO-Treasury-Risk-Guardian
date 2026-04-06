import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

export default function Alerts() {
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    api.get("/alerts").then((res) => setAlerts(res.data.data));
  }, []);

  function getBadge(severity: string) {
    if (severity === "HIGH") return "badge badge-high";
    if (severity === "MEDIUM") return "badge badge-medium";
    return "badge badge-low";
  }

  return (
    <div className="container">
      <h1>Alerts</h1>
      <Link to="/">← Back</Link>

      {alerts.map((alert) => (
        <div className="card" key={alert.id}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{alert.type}</strong>
            <span className={getBadge(alert.severity)}>
              {alert.severity}
            </span>
          </div>

          <p>{alert.message}</p>
          <p>🏦 {alert.treasuryName}</p>
          <p>👛 {alert.walletAddress}</p>
          <small>{new Date(alert.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}