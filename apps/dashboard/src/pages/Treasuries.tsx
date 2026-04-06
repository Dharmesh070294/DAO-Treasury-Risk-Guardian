import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";

export default function Treasuries() {
  const [treasuries, setTreasuries] = useState<any[]>([]);

  useEffect(() => {
    api.get("/treasuries").then((res) => setTreasuries(res.data.data));
  }, []);

  return (
    <div className="container">
      <h1>Treasuries</h1>
      <Link to="/">← Back</Link>

      {treasuries.map((t) => (
        <div className="card" key={t.id}>
          <h3>{t.name}</h3>
          <p>🏢 {t.organizationName}</p>
          <p>⛓ Chain ID: {t.chainId}</p>
          <p>👛 {t.walletAddresses.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}