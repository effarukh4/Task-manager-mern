import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTasks, deleteTask as deleteTaskRequest, updateTask } from "../api/tasks";
import { useAuth } from "../context/AuthContext";
import TaskList from "../components/TaskList";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Button from "../components/Button";

const FILTERS = ["All", "Pending", "In Progress", "Completed"];

export default function Dashboard() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");
  const [pendingDelete, setPendingDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const status = filter === "All" ? undefined : filter;
      const data = await fetchTasks(status);
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const counts = useMemo(() => {
    return {
      Pending: tasks.filter((t) => t.status === "Pending").length,
      "In Progress": tasks.filter((t) => t.status === "In Progress").length,
      Completed: tasks.filter((t) => t.status === "Completed").length,
    };
  }, [tasks]);

  const handleQuickStatus = async (id, status) => {
    const prev = tasks;
    setTasks((cur) => cur.map((t) => (t._id === id ? { ...t, status } : t)));
    try {
      await updateTask(id, { status });
    } catch (err) {
      setTasks(prev);
      setError(err.message);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!pendingDelete) return;
    setDeleting(true);
    try {
      await deleteTaskRequest(pendingDelete._id);
      setTasks((cur) => cur.filter((t) => t._id !== pendingDelete._id));
      setPendingDelete(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="page">
      <div className="dashboard-header">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1>Good to see you, {user?.name?.split(" ")[0] || "there"}.</h1>
        </div>
        <Link to="/tasks/new" className="btn btn--primary">
          + New task
        </Link>
      </div>

      <div className="filter-bar" role="tablist" aria-label="Filter tasks by status">
        {FILTERS.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`filter-chip ${filter === f ? "filter-chip--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
            {f !== "All" ? <span className="filter-chip__count">{counts[f]}</span> : null}
          </button>
        ))}
      </div>

      {error ? (
        <div className="form__error" role="alert">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="page page--center">
          <Loader label="Fetching your tasks" />
        </div>
      ) : (
        <TaskList tasks={tasks} onDelete={setPendingDelete} onQuickStatus={handleQuickStatus} />
      )}

      {pendingDelete ? (
        <Modal title="Delete task?" onClose={() => setPendingDelete(null)}>
          <p>
            This will permanently remove <strong>{pendingDelete.title}</strong>. This can't be
            undone.
          </p>
          <div className="modal__actions">
            <Button variant="ghost" onClick={() => setPendingDelete(null)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteConfirm} loading={deleting}>
              Delete task
            </Button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
