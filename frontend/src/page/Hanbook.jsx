import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Hanbook.css";

const Hanbook = () => {
  return (
    <>
      <Header />
      {/* PDF Viewer Using iframe - Full width */}
      <div className="pdf-viewer-container">
        <iframe
          src="/ADHD hanbook .pdf"
          className="pdf-iframe"
          title="ADHD Handbook"
        >
          <p>
            Trình duyệt của bạn không hỗ trợ hiển thị PDF. 
            <a href="/ADHD hanbook .pdf" download="ADHD_Handbook.pdf">
              Nhấp vào đây để tải xuống
            </a>
          </p>
        </iframe>
      </div>
      <Footer />
    </>
  );
};

export default Hanbook;