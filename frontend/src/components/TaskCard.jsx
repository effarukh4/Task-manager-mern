import { Link } from "react-router-dom";

const STATUS_CLASS = {
  Pending: "status--pending",
  "In Progress": "status--progress",
  Completed: "status--done",
};

function formatDate(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export default function TaskCard({ task, onDelete, onQuickStatus }) {
  const due = formatDate(task.dueDate);
  const isOverdue =
    task.dueDate && task.status !== "Completed" && new Date(task.dueDate) < new Date();

  return (
    <article className={`task-card ${STATUS_CLASS[task.status] || ""}`}>
      <div className="task-card__rule" aria-hidden="true" />

      <div className="task-card__main">
        <div className="task-card__top">
          <h3 className="task-card__title">{task.title}</h3>
          <span className={`badge ${STATUS_CLASS[task.status] || ""}`}>{task.status}</span>
        </div>

        {task.description ? <p className="task-card__desc">{task.description}</p> : null}

        <div className="task-card__meta">
          {due ? (
            <span className={`task-card__due ${isOverdue ? "task-card__due--late" : ""}`}>
              {isOverdue ? "Overdue · " : "Due "}
              {due}
            </span>
          ) : (
            <span className="task-card__due task-card__due--muted">No due date</span>
          )}
        </div>
      </div>

      <div className="task-card__actions">
        <select
          className="task-card__quick-status"
          value={task.status}
          onChange={(e) => onQuickStatus(task._id, e.target.value)}
          aria-label={`Change status for ${task.title}`}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <Link to={`/tasks/${task._id}/edit`} className="btn btn--ghost btn--sm">
          Edit
        </Link>
        <button className="btn btn--danger-ghost btn--sm" onClick={() => onDelete(task)}>
          Delete
        </button>
      </div>
    </article>
  );
}
