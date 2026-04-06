import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <>
      <div className="navbar">
        <h2>DAO Guardian</h2>
        <div className="nav-links">
          <Link to="/alerts">Alerts</Link>
          <Link to="/treasuries">Treasuries</Link>
          <button className="button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div className="container">
        <h1>Dashboard</h1>

        <div className="card">
          <h3>Status</h3>
          <p>🟢 API connected</p>
          <p>🟢 MongoDB connected</p>
          <p>🟢 Tracker worker active</p>
        </div>
      </div>
    </>
  );
}