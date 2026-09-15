import { Link } from "react-router-dom";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks, onDelete, onQuickStatus }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state__mark" aria-hidden="true" />
        <h3>Nothing on the ledger yet</h3>
        <p>Every task you create shows up here, sorted by newest first.</p>
        <Link to="/tasks/new" className="btn btn--primary">
          Create your first task
        </Link>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onDelete={onDelete} onQuickStatus={onQuickStatus} />
      ))}
    </div>
  );
}
