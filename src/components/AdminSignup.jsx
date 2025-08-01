import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // for navigation

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("❌ Passwords do not match.");
      setSuccess(false);
      return;
    }

    const validName = import.meta.env.VITE_ADMIN_NAME;
    const validEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (
      formData.name === validName &&
      formData.email === validEmail &&
      formData.password === validPassword
    ) {
      setError("");
      setSuccess(true);
      console.log("✅ Valid Admin User:", formData);

      // Optional: Show success message before navigating
      setTimeout(() => {
        navigate("/testimonials");
      }, 1000); // Delay to allow message display
    } else {
      setError("❌ Invalid credentials. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-neutral-400 to-black-800 flex items-center justify-center px-2 sm:px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-screen max-w-md"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-orange-700 mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Admin Signup
        </motion.h2>

        {error && <div className="text-red-600 text-center mb-4">{error}</div>}
        {success && (
          <div className="text-green-600 text-center mb-4 font-semibold">
            ✅ Valid Admin! You are signed in.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "password", "confirmPassword"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <label className="block text-sm font-semibold text-gray-700 capitalize">
                {field === "confirmPassword" ? "Confirm Password" : field}
              </label>
              <input
                type={
                  field === "password" || field === "confirmPassword"
                    ? "password"
                    : "text"
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
                placeholder={`Enter your ${
                  field === "confirmPassword" ? "password again" : field
                }`}
              />
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-orange-700 transition duration-300"
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminSignup;
