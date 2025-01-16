import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const WorkSheet = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('Sales');
  const [hours, setHours] = useState(0);
  const [date, setDate] = useState(new Date());
  const [editTask, setEditTask] = useState(null);

  // Add a new task
  const addTask = () => {
    const newTask = { id: Date.now(), task, hours, date };
    setTasks([newTask, ...tasks]);
    // Here, you'd send the data to the backend for DB storage.
    setTask('Sales');
    setHours(0);
    setDate(new Date());
  };

  // Edit an existing task
  const updateTask = () => {
    const updatedTasks = tasks.map(t =>
      t.id === editTask.id ? { ...editTask } : t
    );
    setTasks(updatedTasks);
    setEditTask(null);
  };

  // Delete a task
  const deleteTask = id => {
    const filteredTasks = tasks.filter(t => t.id !== id);
    setTasks(filteredTasks);
    // Send delete request to the backend here.
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Work Sheet</h1>

      {/* Form */}
      <div className="flex items-center gap-4 mb-6">
        <select
          value={task}
          onChange={e => setTask(e.target.value)}
          className="border px-3 py-2 rounded w-1/4"
        >
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Content">Content</option>
          <option value="Paper-work">Paper-work</option>
        </select>

        <input
          type="number"
          value={hours}
          onChange={e => setHours(Number(e.target.value))}
          placeholder="Hours Worked"
          className="border px-3 py-2 rounded w-1/4"
        />

        <DatePicker
          selected={date}
          onChange={d => setDate(d)}
          className="border px-3 py-2 rounded w-1/4"
        />

        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add / Submit
        </button>
      </div>

      {/* Table */}
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Task</th>
            <th className="border px-4 py-2">Hours Worked</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(t => (
            <tr key={t.id}>
              <td className="border px-4 py-2">{t.task}</td>
              <td className="border px-4 py-2">{t.hours}</td>
              <td className="border px-4 py-2">{t.date.toDateString()}</td>
              <td className="border px-4 py-2 flex gap-2">
                <button
                  onClick={() => setEditTask(t)}
                  className="text-blue-500 hover:underline"
                >
                  🖊
                </button>
                <button
                  onClick={() => deleteTask(t.id)}
                  className="text-red-500 hover:underline"
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>

            <select
              value={editTask.task}
              onChange={e =>
                setEditTask(prev => ({ ...prev, task: e.target.value }))
              }
              className="border px-3 py-2 rounded w-full mb-4"
            >
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Content">Content</option>
              <option value="Paper-work">Paper-work</option>
            </select>

            <input
              type="number"
              value={editTask.hours}
              onChange={e =>
                setEditTask(prev => ({
                  ...prev,
                  hours: Number(e.target.value),
                }))
              }
              className="border px-3 py-2 rounded w-full mb-4"
            />

            <DatePicker
              selected={new Date(editTask.date)}
              onChange={d => setEditTask(prev => ({ ...prev, date: d }))}
              className="border px-3 py-2 rounded w-full mb-4"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setEditTask(null)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={updateTask}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSheet;
