import React, { useState } from "react";
import axios from "axios";

const UpdateTexts = () => {
  const [fields, setFields] = useState({
    text1: "",
    primary1: "",
    secondary1: "",
    text2: "",
    primary2: "",
    secondary2: "",
    text3: "",
    primary3: "",
    secondary3: "",
    text4: "",
    primary4: "",
    secondary4: "",
    text5: "",
    primary5: "",
    secondary5: "",
    text6: "",
    primary6: "",
    secondary6: "",
    text7: "",
    primary7: "",
    secondary7: "",
    text8: "",
    primary8: "",
    secondary8: "",
  });

  const documentId = "675691b11ba213b1cf3577df";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const endpoints = [
        {
          name: "text1",
          endpoint: `http://sudd-backend.vercel.app/api/update-text1/${documentId}`,
          payload: {
            text1: fields.text1,
            primary1: fields.primary1,
            secondary1: fields.secondary1,
          },
        },
        {
          name: "text2",
          endpoint: `http://sudd-backend.vercel.app/api/update-text2/${documentId}`,
          payload: {
            text2: fields.text2,
            primary2: fields.primary2,
            secondary2: fields.secondary2,
          },
        },
        {
          name: "text3",
          endpoint: `http://sudd-backend.vercel.app/api/update-text3/${documentId}`,
          payload: {
            text3: fields.text3,
            primary3: fields.primary3,
            secondary3: fields.secondary3,
          },
        },
        {
          name: "text4",
          endpoint: `http://sudd-backend.vercel.app/api/update-text4/${documentId}`,
          payload: {
            text4: fields.text4,
            primary4: fields.primary4,
            secondary4: fields.secondary4,
          },
        },
        {
          name: "text5",
          endpoint: `http://sudd-backend.vercel.app/api/update-text5/${documentId}`,
          payload: {
            text5: fields.text5,
            primary5: fields.primary5,
            secondary5: fields.secondary5,
          },
        },
        {
          name: "text6",
          endpoint: `http://sudd-backend.vercel.app/api/update-text6/${documentId}`,
          payload: {
            text6: fields.text6,
            primary6: fields.primary6,
            secondary6: fields.secondary6,
          },
        },
        {
          name: "text7",
          endpoint: `http://sudd-backend.vercel.app/api/update-text7/${documentId}`,
          payload: {
            text7: fields.text7,
            primary7: fields.primary7,
            secondary7: fields.secondary7,
          },
        },
        {
          name: "text8",
          endpoint: `http://sudd-backend.vercel.app/api/update-text8/${documentId}`,
          payload: {
            text8: fields.text8,
            primary8: fields.primary8,
            secondary8: fields.secondary8,
          },
        },
      ];

      for (let field of endpoints) {
        if (fields[field.name] || fields[`primary${field.name.slice(-1)}`] || fields[`secondary${field.name.slice(-1)}`]) {
          await axios.put(field.endpoint, field.payload);
        }
      }

      setFields({
        text1: "",
        primary1: "",
        secondary1: "",
        text2: "",
        primary2: "",
        secondary2: "",
        text3: "",
        primary3: "",
        secondary3: "",
        text4: "",
        primary4: "",
        secondary4: "",
        text5: "",
        primary5: "",
        secondary5: "",
        text6: "",
        primary6: "",
        secondary6: "",
        text7: "",
        primary7: "",
        secondary7: "",
        text8: "",
        primary8: "",
        secondary8: "",
      });

      alert("Texts and colors updated successfully!");
    } catch (error) {
      console.error("Error updating texts and colors:", error);
      alert("Failed to update texts and colors. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Update Text Fields and Colors
      </h1>

      {[...Array(8)].map((_, index) => {
        const fieldIndex = index + 1;
        return (
          <div className="mb-6" key={fieldIndex}>
            <label className="block text-gray-700 font-medium mb-1">{`Update text${fieldIndex}`}</label>
            <textarea
              name={`text${fieldIndex}`}
              value={fields[`text${fieldIndex}`]}
              onChange={handleChange}
              placeholder={`Enter text${fieldIndex}`}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />

            <label className="block text-gray-700 font-medium mt-2">Primary Color</label>
            <input
              type="text"
              name={`primary${fieldIndex}`}
              value={fields[`primary${fieldIndex}`]}
              onChange={handleChange}
              placeholder={`Enter primary color for text${fieldIndex}`}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block text-gray-700 font-medium mt-2">Secondary Color</label>
            <input
              type="text"
              name={`secondary${fieldIndex}`}
              value={fields[`secondary${fieldIndex}`]}
              onChange={handleChange}
              placeholder={`Enter secondary color for text${fieldIndex}`}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      })}

      <button
        onClick={handleUpdate}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200"
      >
        Update Texts and Colors
      </button>
    </div>
  );
};

export default UpdateTexts;
