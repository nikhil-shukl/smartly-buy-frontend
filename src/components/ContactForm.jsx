import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Message sent successfully ✅');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(data.message || 'Something went wrong ❌');
      }
    } catch (err) {
      setError('Network error. Please try again later ❌');
    }
  };

  return (
    <div className="mt-10 p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      {/* mt-10 added for gap from top */}
      <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Contact Us</h2>

      {success && (
        <p className="mb-4 text-green-700 bg-green-100 border border-green-300 rounded px-4 py-2">
          {success}
        </p>
      )}
      {error && (
        <p className="mb-4 text-red-700 bg-red-100 border border-red-300 rounded px-4 py-2">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0d183f] focus:border-transparent transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0d183f] focus:border-transparent transition"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-3 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-[#0d183f] focus:border-transparent transition"
        ></textarea>

        <button
          type="submit"
          className="bg-[#0d183f] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#0b142f] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;


