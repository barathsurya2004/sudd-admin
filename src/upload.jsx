import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please enter a title.');
            return;
        }

        if (!image) {
            alert('Please select an image to upload.');
            return;
        }

        setIsLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        if (text) formData.append('text', text);

        try {
            const response = await axios.post(' "http://sudd-backend.vercel.app/api/upload",', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Upload successful!');
            console.log('Response:', response.data);

            setTitle('');
            setText('');
            setImage(null);
            setIsLoading(false);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload. Please try again.');
            setIsLoading(false);
        }
    };

    const handleDeleteAll = async () => {
        if (!window.confirm('Are you sure you want to delete all media records?')) {
            return;
        }

        setIsDeleting(true);

        try {
            const response = await axios.delete('http://localhost:8003/api/delete-all');
            alert('All media records deleted successfully!');
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error deleting all media records:', error);
            alert('Failed to delete media records. Please try again.');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Upload Image, Title, and Text</h1>
            <form onSubmit={handleUpload}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Enter title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Optional Text</label>
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter text (optional)"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Upload Image</label>
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
                    {isLoading ? 'Uploading...' : 'Upload'}
                </button>
            </form>

            <div className="mt-6">
                <button
                    onClick={handleDeleteAll}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-200"
                    disabled={isDeleting}
                >
                    {isDeleting ? 'Deleting...' : 'Delete All Media'}
                </button>
            </div>
        </div>
    );
};

export default Upload;
