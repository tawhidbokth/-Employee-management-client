import Swal from 'sweetalert2';
import useTasks from '../../../Hooks/useTasks';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const WorkSheet = () => {
  const [tasks, refetch] = useTasks();
  const { user } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    // Add user email and name to the initialData object
    const finalData = {
      ...initialData,
      email: user?.email || '', // Use user email if available
      employee: user?.displayName || '', // Use user name if available
    };

    console.log(finalData);

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(finalData),
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
    <div className="p-6 mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Work Sheet</h1>
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
                <Link to={`/dashboard/update/${t._id}`}>
                  <button className="btn btn-link text-blue-500 flex items-center justify-center gap-2">
                    🖊
                  </button>
                </Link>
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
      ,
    </div>
  );
};

export default WorkSheet;
