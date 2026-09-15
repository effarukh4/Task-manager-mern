import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTask, updateTask } from "../api/tasks";
import TaskForm from "../components/TaskForm";
import Loader from "../components/Loader";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTask(id)
      .then(setTask)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (values) => {
    await updateTask(id, values);
    navigate("/dashboard");
  };

  if (loading) {
    return (
      <div className="page page--center">
        <Loader label="Loading task" />
      </div>
    );
  }

  if (error || !task) {
    return (
      <div className="page page--narrow">
        <div className="form__error" role="alert">
          {error || "Task not found."}
        </div>
      </div>
    );
  }

  return (
    <div className="page page--narrow">
      <span className="eyebrow">Edit task</span>
      <h1>{task.title}</h1>

      <TaskForm
        initialValues={task}
        submitLabel="Save changes"
        onSubmit={handleSubmit}
        onCancel={() => navigate(-1)}
      />
    </div>
  );
}
