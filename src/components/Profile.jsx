import { Helmet } from "react-helmet";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div>
                <Helmet>
                        <title>Profile || Ts Gadgets Express</title>
                </Helmet>
        </div>
      <h2 className="text-4xl font-bold mb-6">User Profile</h2>
      <div className="card w-[80%] bg-white shadow-lg p-8">
        <img
          src="https://i.ibb.co.com/p1PQ1Rw/tahmid-removebg-preview.jpg"
          alt="Profile"
          className="rounded-full w-60 h-60 mx-auto mb-6"
        />
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">Tahmid Inzamam Noor</h3>
          <p className="text-gray-600 mb-4">Email: Inzu@example.com</p>
          <button className="btn btn-outline bg-purple-700 text-white font-semibold rounded-full px-6 py-2">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
