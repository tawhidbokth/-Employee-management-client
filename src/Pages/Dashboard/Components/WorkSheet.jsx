import Swal from 'sweetalert2';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import useTasks from '../../../Hooks/useTasks';

const WorkSheet = () => {
  const [tasks, refetch] = useTasks();

  const [formData, setFormData] = useState({
    date: new Date().toISOString().substr(0, 10), // Default current date
  });

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(initialData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Food Has been added.',
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'The food item has been deleted.',
                icon: 'success',
              });
            }
          })
          .catch(error => {
            Swal.fire({
              title: 'Error!',
              text: 'Failed to delete the food item.',
              icon: 'error',
            });
          });
        refetch();
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Work Sheet{tasks.length}</h1>

      <div className="max-w-full mx-auto my-8 p-6 bg-white shadow-md rounded-md">
        <form
          onSubmit={handleSubmit}
          className=" grid grid-cols-4 gap-2 items-center"
        >
          <div>
            <label className="block text-sm font-medium">Tasks Category</label>
            <select name="tasks" required className="w-full p-2 border rounded">
              <option value="Sales">Sales</option>
              <option value="Support">Support</option>
              <option value="Content">Content</option>
              <option value="Paper-work">Paper-work</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Hours</label>
            <input
              type="number"
              name="hours"
              required
              placeholder="Enter quantity"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              className="border px-3 py-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Submit Tasks</label>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit Tasks
            </button>
          </div>
        </form>
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
            <tr key={t._id}>
              <td className="border px-4 py-2">{t.tasks}</td>
              <td className="border px-4 py-2">{t.hours}</td>
              <td className="border px-4 py-2">{t.date}</td>
              <td className="border px-4 py-2 flex gap-2">
                <button
                  onClick={() => setEditTask(t)}
                  className="text-blue-500 hover:underline"
                >
                  🖊
                </button>
                <button
                  onClick={() => handleDelete(t._id)}
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
      {/* {editTask && (
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
        </div> */}
      {/* )} */}
    </div>
  );
};

export default WorkSheet;
