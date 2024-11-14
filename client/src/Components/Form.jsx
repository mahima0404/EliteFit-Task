import React, { useState } from "react";
import toast from "react-hot-toast";

const Form = ({ closeForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const data = {
      id,
      title,
      description,
      dueDate,
      priority,
      iscompleted: false,
    };
    const existingTasks = JSON.parse(localStorage.getItem("taskData")) || [];
    existingTasks.push(data);
    localStorage.setItem("taskData", JSON.stringify(existingTasks));
    toast.success("Task Added Successfully !");
    closeForm(false);
  };
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="bg-white p-3 border-gray-500  border rounded-l shadow-2xl w-full max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="mb-3">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter Title"
            maxLength={50}
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="2"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter Description"
            maxLength={120}
          />
        </div>

        {/* Due Date Field */}
        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            onFocus={(e) => e.target.showPicker()}
            required
            min={today}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            style={{ userSelect: "none" }}
          />
        </div>

        {/* Priority Level Field */}
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700"
          >
            Priority Level
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-700 focus:outline-none transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
