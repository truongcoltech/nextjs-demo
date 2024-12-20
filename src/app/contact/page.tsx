// app/contact/page.tsx

'use client';  // This tells Next.js that this file is a Client Component
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show sending status
    setStatus("Sending...");

    try {
      // Send form data to the API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        setStatus(data.message); // Display success message
        setFormData({ name: "", email: "", message: "" }); // Clear form data
      } else {
        setStatus("There was an error submitting the form.");
      }
    } catch (error) {
      console.error(error);
      setStatus("There was an error submitting the form.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We&apos;d love to hear from you! Please fill out the form below, and we&apos;ll get back to you as soon as possible.
        </p>

        {status && <p className="text-green-600 text-xl">{status}</p>}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-md border-gray-300  text-gray-700"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-md border-gray-300  text-gray-700"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-md border-gray-300  text-gray-700"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
