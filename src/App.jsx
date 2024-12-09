import React from "react";
import UpdateTexts from "./textUpdation";
import Upload from "./upload";
import ImageUpload from "./imageUpload";
import UpdateImage from "./UpdateImage";
function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <UpdateTexts />
      <Upload />
      <ImageUpload />
      <UpdateImage />
    </div>
  );
}
export default App;
