import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTasks = () => {
  const tasks = useLoaderData();
  const handleupdate = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    fetch(`http://localhost:5000/tasks/${tasks._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(initialData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          console.log('successfully updated');
          Swal.fire({
            title: 'Success!',
            position: 'top-center',
            text: 'Food updated successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <div className="w-1/2 mx-auto my-8 p-6 bg-white shadow-md rounded-md">
        <form
          onSubmit={handleupdate}
          className=" w-full mx-auto gap-2 items-center"
        >
          <div>
            <label className="block text-sm font-medium">Tasks Category</label>
            <select name="tasks" required className="w-full p-2 border rounded">
              <option value="selected" selected>
                {tasks.tasks}
              </option>
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
              value={tasks.hours}
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
              value={tasks.date}
              className="border px-3 py-2 rounded w-full"
            />
          </div>
          <br />

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Update Tasks
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTasks;
