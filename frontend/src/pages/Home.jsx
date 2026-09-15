import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="hero">
      <div className="hero__inner">
        <span className="eyebrow">Task Manager · MERN</span>
        <h1>
          Keep every task where you can <em>actually</em> find it.
        </h1>
        <p className="hero__lede">
          Ledger is a small, honest task tracker. Register, sign in, and manage a private list of
          tasks with statuses, due dates, and instant updates — no clutter, no noise.
        </p>
        <div className="hero__actions">
          {isAuthenticated ? (
            <Link to="/dashboard" className="btn btn--primary btn--lg">
              Go to your dashboard
            </Link>
          ) : (
            <>
              <Link to="/register" className="btn btn--primary btn--lg">
                Get started
              </Link>
              <Link to="/login" className="btn btn--ghost btn--lg">
                I already have an account
              </Link>
            </>
          )}
        </div>

        <dl className="hero__stats">
          <div>
            <dt>Pending</dt>
            <dd>Not started</dd>
          </div>
          <div>
            <dt>In Progress</dt>
            <dd>Underway</dd>
          </div>
          <div>
            <dt>Completed</dt>
            <dd>Done and dusted</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
