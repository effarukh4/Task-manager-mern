const Task = require("../models/Task");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");

const VALID_STATUSES = ["Pending", "In Progress", "Completed"];

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
const createTask = asyncHandler(async (req, res) => {
  const { title, description, status, dueDate } = req.body;

  if (!title) {
    throw new ApiError(400, "Title is required");
  }

  if (status && !VALID_STATUSES.includes(status)) {
    throw new ApiError(400, `Status must be one of: ${VALID_STATUSES.join(", ")}`);
  }

  const task = await Task.create({
    title,
    description,
    status,
    dueDate,
    user: req.user._id,
  });

  res.status(201).json({ success: true, data: task });
});

// @desc    Get all tasks belonging to the logged-in user
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
  const filter = { user: req.user._id };

  // Optional filtering by status via query string, e.g. /api/tasks?status=Pending
  if (req.query.status) {
    if (!VALID_STATUSES.includes(req.query.status)) {
      throw new ApiError(400, `Status must be one of: ${VALID_STATUSES.join(", ")}`);
    }
    filter.status = req.query.status;
  }

  const tasks = await Task.find(filter).sort({ createdAt: -1 });

  res.status(200).json({ success: true, count: tasks.length, data: tasks });
});

// @desc    Get a single task by id
// @route   GET /api/tasks/:id
// @access  Private
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized to access this task");
  }

  res.status(200).json({ success: true, data: task });
});

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  let task = await Task.findById(req.params.id);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized to update this task");
  }

  if (req.body.status && !VALID_STATUSES.includes(req.body.status)) {
    throw new ApiError(400, `Status must be one of: ${VALID_STATUSES.join(", ")}`);
  }

  task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: task });
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Not authorized to delete this task");
  }

  await task.deleteOne();

  res.status(200).json({ success: true, data: {} });
});

module.exports = { createTask, getTasks, getTask, updateTask, deleteTask };
