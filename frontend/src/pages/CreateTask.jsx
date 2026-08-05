import { useNavigate } from "react-router-dom";
import { createTask } from "../api/tasks";
import TaskForm from "../components/TaskForm";

export default function CreateTask() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    await createTask(values);
    navigate("/dashboard");
  };

  return (
    <div className="page page--narrow">
      <span className="eyebrow">New task</span>
      <h1>Add a task</h1>
      <p className="page__lede">It'll show up at the top of your dashboard right away.</p>

      <TaskForm
        submitLabel="Create task"
        onSubmit={handleSubmit}
        onCancel={() => navigate(-1)}
      />
    </div>
  );
}
