import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TicketSystem = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    priority: 'Medium',
    attachment: null,
  });

  const handleSubmit = e => {
    e.preventDefault();

    // Show success toast
    toast.success('Ticket submitted successfully! We will contact you soon.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    // Reset form
    setFormData({
      subject: '',
      description: '',
      priority: 'Medium',
      attachment: null,
    });
  };

  return (
    <div className="p-6 relative">
      <ToastContainer />

      <h1 className="text-2xl font-bold mb-4">Submit a Support Ticket</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={formData.subject}
          onChange={e => setFormData({ ...formData, subject: e.target.value })}
          required
        />

        <textarea
          placeholder="Describe your issue in detail..."
          className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="5"
          value={formData.description}
          onChange={e =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Priority</label>
          <select
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.priority}
            onChange={e =>
              setFormData({ ...formData, priority: e.target.value })
            }
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
            <option value="Critical">Critical (24/7 Support)</option>
          </select>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Attachment {formData.attachment && `(${formData.attachment.name})`}
          </label>
          <input
            type="file"
            className="w-full p-2 border rounded"
            onChange={e =>
              setFormData({ ...formData, attachment: e.target.files[0] })
            }
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full font-medium"
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketSystem;
