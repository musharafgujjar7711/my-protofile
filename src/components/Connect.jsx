import React, { useState } from 'react';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the form data to an email service
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section id='contact' className="bg-about text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Connect with Me</h2>
        <p className="text-center mb-10 text-gray-400">
          I'd love to hear from you! Fill out the form below, and I'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="bg-zinc-700 p-6 rounded-lg shadow-lg space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-3 rounded bg-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-3 rounded bg-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-2">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows="5"
              className="p-3 rounded bg-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Connect;
