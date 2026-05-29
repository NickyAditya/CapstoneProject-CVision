import { useState } from "react";

export default function useFileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFile = (file) => {
    if (!file) return;

    const allowedTypes = [
        "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
        alert("Only PDF files are allowed!");
        return;
    }

    setSelectedFile(file);
};

  return {
    selectedFile,
    handleFile,
  };
}