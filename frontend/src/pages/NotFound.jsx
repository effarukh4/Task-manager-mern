import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page page--center page--narrow">
      <span className="eyebrow">404</span>
      <h1>This page isn't on the ledger.</h1>
      <p className="page__lede">The link might be broken, or the page may have moved.</p>
      <Link to="/" className="btn btn--primary">
        Back to home
      </Link>
    </div>
  );
}
