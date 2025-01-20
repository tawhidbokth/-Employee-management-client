import usePayroll from '../../../../Hooks/usePayroll';

const Payroll = () => {
  const [payroll, refetch] = usePayroll();
  return (
    <div className="p-6   bg-gray-100 shadow-md rounded-lg">
      <h3 className="text-4xl text-center text-yellow-700 font-semibold mb-6">
        Payment Requst
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Salary
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Month
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Year
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Payment Date
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 border-b">
                Pay
              </th>
            </tr>
          </thead>
          <tbody>
            {payroll.map(req => (
              <tr key={req.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.employees}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.salary}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.month}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.year}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 border-b">
                  {req.paymentDate || 'Pending'}
                </td>
                <td className="px-6 py-4 text-center border-b">
                  {req.paid ? (
                    <span className="text-green-600 font-semibold">Paid</span>
                  ) : (
                    <button
                      onClick={() => paySalary(req._id)}
                      className="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                    >
                      Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payroll;
