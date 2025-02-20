import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        👤 User Profile
      </h2>

      <div className="flex flex-col items-center mt-4">
        <img
          src={user?.photoURL || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <h3 className="text-xl font-semibold mt-2">
          {user?.displayName || 'No Name'}
        </h3>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      <div className="mt-6">
        <p className="text-lg font-semibold">📞 Phone:</p>
        <p className="text-gray-700">{user?.phoneNumber || 'Not Provided'}</p>

        <p className="text-lg font-semibold mt-4">📍 Address:</p>
        <p className="text-gray-700">{'User address Not Provided'}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
