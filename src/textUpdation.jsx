import React, { useState } from "react";
import axios from "axios";

const UpdateTexts = () => {
  const [texts, setTexts] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
  });

  const documentId = "675691b11ba213b1cf3577df";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTexts({ ...texts, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const endpoints = [
        {
          name: "text1",
          endpoint: `http://localhost:8003/api/update-text1/${documentId}`,
        },
        {
          name: "text2",
          endpoint: `http://localhost:8003/api/update-text2/${documentId}`,
        },
        {
          name: "text3",
          endpoint: `http://localhost:8003/api/update-text3/${documentId}`,
        },
        {
          name: "text4",
          endpoint: `http://localhost:8003/api/update-text4/${documentId}`,
        },
      ];

      for (let field of endpoints) {
        if (texts[field.name]) {
          await axios.put(field.endpoint, { [field.name]: texts[field.name] });
        }
      }

      setTexts({
        text1: "",
        text2: "",
        text3: "",
        text4: "",
      });

      alert("Texts updated successfully!");
    } catch (error) {
      console.error("Error updating texts:", error);
      alert("Failed to update texts. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Update Text Fields
      </h1>

      {["text1", "text2", "text3", "text4"].map((field, index) => (
        <div className="mb-4" key={index}>
          <label className="block text-gray-700 font-medium mb-1">{`Update ${field}`}</label>
          <textarea
            name={field}
            value={texts[field]}
            onChange={handleChange}
            placeholder={`Enter ${field}`}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
        </div>
      ))}

      <button
        onClick={handleUpdate}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200"
      >
        Update Texts
      </button>
    </div>
  );
};

export default UpdateTexts;
