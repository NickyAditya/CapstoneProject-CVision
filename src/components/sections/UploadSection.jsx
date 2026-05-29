import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadSection.css";

export default function UploadSection() {
  const navigate = useNavigate();
  const [dragging, setDragging] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const [isResumeAnalyzing, setIsResumeAnalyzing] = useState(false);

  const [isProfileAnalyzing, setIsProfileAnalyzing] = useState(false);

  const fileInputRef = useRef(null);

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

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const handleAnalyzeCV = () => {
    if (!selectedFile) {
      alert(
        "Please upload your CV first!"
      );
      return;
    }
    /* START LOADING */
    setIsResumeAnalyzing(true);
    /* SIMULASI PROSES ANALISIS */
    setTimeout(() => {
      setIsResumeAnalyzing(false);
      navigate("/resume-analysis", {
        state: {
          fileName: selectedFile.name,
          fileSize: (
            selectedFile.size / 1024
          ).toFixed(0),
        },
      });
    }, 3000);
  };

  const handleAnalyzeProfile = () => {
    const profileText =
      document.querySelector(".profile-input").value;

    if (!profileText.trim()) {
      alert(
        "Please complete your profile data first!"
      );
      return;
    }

    setIsProfileAnalyzing(true);

    setTimeout(() => {

      setIsProfileAnalyzing(false);

      navigate("/profile-analysis", {
        state: { profileText },
      });

    }, 3000);
  };
  
  return (
    <div className="upload-container">
      {/* Upload Card */}
      <div className="upload-card">
        <h2 className="upload-card-title">Upload Your CV</h2>
        <p className="upload-card-description">
          Upload CV in PDF format for analysis by the system.
        </p>

        <input
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          onChange={handleInputChange}
          style={{ display: "none" }}
        />

        <div
          className={`upload-drop-zone ${dragging ? "dragging" : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
        >
          <div className="upload-icon">☁️</div>
          <div className="upload-text-main">Drag & drop your CV here</div>
          <div className="upload-text-secondary">or</div>
          <button
            type="button"
            className="upload-button"
            onClick={openFilePicker}
          >
            Choose File
          </button>

         <div className="upload-formats">
            🛡️ Supported formats: PDF Only
          </div>
        </div>

        <div className="selected-file">
          {selectedFile ? (
            <>📄 {selectedFile.name}</>
          ) : (
            <span className="empty-file-text">
              No file uploaded yet
            </span>
          )}
        </div>

        {/* Analyze Button */}
        <button className="analyze-button"
          onClick={handleAnalyzeCV}>
          {isResumeAnalyzing
            ? "Analyzing CV ..."
            : "Analyze CV"}
        </button>
      </div>

      <div className="upload-divider">
        <span>OR</span>
      </div>

      {/* Input Description Card */}
      <div className="upload-card">
        <h2 className="upload-card-title">Describe your profile</h2>
        
        <p className="upload-card-description">
          Don't have a CV? Write your profile, experience, skills, and career interests here.
        </p>

        {/* Description Input */}
        <textarea
          className="profile-input"
          placeholder="E.g., Software Engineer with 5 years of experience in web development, skilled in JavaScript, React, and Node.js."
        />           

        {/* Analyze Button */}
        <button className="analyze-button"
          onClick={handleAnalyzeProfile}
        >
          {isProfileAnalyzing
            ? "Analyzing Profile ..."
            : "Analyze Profile"}
        </button>
      </div>
    </div>
  );
}
