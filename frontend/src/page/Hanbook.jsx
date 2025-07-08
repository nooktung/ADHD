import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const Hanbook = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "80vh", background: "#fff", padding: 24 }}>
        <Document
          file="/ADHD hanbook .pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Đang tải file PDF...</div>}
          error={<div>Không thể tải file PDF.</div>}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={800}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>
      <Footer />
    </>
  );
};

export default Hanbook; 