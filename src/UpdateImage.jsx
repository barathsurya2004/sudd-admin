import React, { useState } from "react";
import axios from "axios";

const UpdateImage = () => {
  const documentId = "6756d5033e6aa084a076e6b9";
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.put(
        `http://sudd-backend.vercel.app/api/update-image/${documentId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Image updated successfully!");
      console.log("Response:", response.data);

      setImage(null);
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating image:", error);
      alert("Failed to update image. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Update Image</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Upload New Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Image"}
        </button>
      </form>
    </div>
  );
};

export default UpdateImage;
