import React from "react";
import "./TeacherHomework.css";
import {
  FaArrowLeft,
  FaFilePdf,
  FaFolder,
  FaFileExcel,
  FaFileImage,
  FaFileWord,
  FaLink,
  FaFolderOpen,
  FaArrowRight,
  FaChevronUp,
  FaSearch,
  FaPlus,
} from "react-icons/fa";

import { CloseSVG } from "../../../../assets/images";
import { Img, Button, Input } from "../../../../components";
import pdfIcon from "../../../../assets/images/pdf.png";
import proPic from "../../../../assets/images/profilePic.png";

const TeacherHomework = () => {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  return (
    <>
      <div className="container">
        <div className="rounded-box-teacher">
          <div className="back-arrow">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="26"
                height="26"
                rx="13"
                fill="#4F81D1"
                fill-opacity="0.2"
              />
              <path
                d="M10.3928 12.3572H18V13.6429H10.3928L13.7452 17.0909L12.8614 18L8 13L12.8614 8L13.7452 8.90909L10.3928 12.3572Z"
                fill="#666666"
              />
            </svg>

            <div style={{ padding: "5px" }}>
              <img src={pdfIcon} alt="PDF Icon" />
            </div>

            <h1 className="study-materials ">Assignment on Chemistry 1</h1>
          </div>

          <div className="teacher">
            <h1>
              Class: <span className="see-more-teacher-homework">10 B</span>{" "}
              <span className="subject">Subject:</span>
              <span className="see-more-teacher-homework">Chemistry</span>
              <div className="container">
                <div className="days-left">3 days left</div>
                <div className="rounded-box-small-new-blue-teacher-homework">
                  <h3>442 Submissions</h3>
                </div>
              </div>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="materials">
            <h1 className="study-materials">Submissions</h1>
          </div>
          <div className="search">
            <div className="lens">
              <FaSearch />
            </div>
            <h3 className="search-materials">Search students</h3>
          </div>
          <div className="three-box">
            <div className="round-box-submitted">Submitted</div>
            <div className="round-box-pending">Pending</div>
            <div className="round-box-graded">Graded</div>
          </div>

          <div className="student-box">
            <div className="round-student-box">
              <div className="inside-student-box">
                <div style={{ height: "40px", width: "40px" }}>
                  <img src={proPic} alt="Student Icon" />
                </div>
              </div>
              <div className="student-details">
                Amith Ram
                <div className="student-class">
                  10 B<div className="sub-date">Submitted:</div>
                  <div className="blue-date">Apr 28 2024</div>
                  <div className="sub-date">File type:</div>
                  <div className="blue-date">PDF</div>
                  <div className="up-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill="#0148B7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="round-student-box">
              <div className="inside-student-box">
                <div style={{ height: "40px", width: "40px" }}>
                  <img src={proPic} alt="Student Icon" />
                </div>
              </div>
              <div className="student-details">
                Amith Ram
                <div className="student-class">
                  10 B<div className="sub-date">Submitted:</div>
                  <div className="blue-date">Apr 28 2024</div>
                  <div className="sub-date">File type:</div>
                  <div className="blue-date">PDF</div>
                  <div className="up-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill="#0148B7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="round-student-box">
              <div className="inside-student-box">
                <div style={{ height: "40px", width: "40px" }}>
                  <img src={proPic} alt="Student Icon" />
                </div>
              </div>
              <div className="student-details">
                Amith Ram
                <div className="student-class">
                  10 B<div className="sub-date">Submitted:</div>
                  <div className="blue-date">Apr 28 2024</div>
                  <div className="sub-date">File type:</div>
                  <div className="blue-date">PDF</div>
                  <div className="up-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill="#0148B7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="round-student-box">
              <div className="inside-student-box">
                <div style={{ height: "40px", width: "40px" }}>
                  <img src={proPic} alt="Student Icon" />
                </div>
              </div>
              <div className="student-details">
                Amith Ram
                <div className="student-class">
                  10 B<div className="sub-date">Submitted:</div>
                  <div className="blue-date">Apr 28 2024</div>
                  <div className="sub-date">File type:</div>
                  <div className="blue-date">PDF</div>
                  <div className="up-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill="#0148B7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="round-student-box">
              <div className="inside-student-box">
                <div style={{ height: "40px", width: "40px" }}>
                  <img src={proPic} alt="Student Icon" />
                </div>
              </div>
              <div className="student-details">
                Amith Ram
                <div className="student-class">
                  10 B<div className="sub-date">Submitted:</div>
                  <div className="blue-date">Apr 28 2024</div>
                  <div className="sub-date">File type:</div>
                  <div className="blue-date">PDF</div>
                  <div className="up-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill="#0148B7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="round-student-box">
              <div className="inside-student-box">
                <div style={{ height: "40px", width: "40px" }}>
                  <img src={proPic} alt="Student Icon" />
                </div>
              </div>
              <div className="student-details">
                Amith Ram
                <div className="student-class">
                  10 B<div className="sub-date">Submitted:</div>
                  <div className="blue-date">Apr 28 2024</div>
                  <div className="sub-date">File type:</div>
                  <div className="blue-date">PDF</div>
                  <div className="up-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill="#0148B7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="round-student-box">
              <div className="inside-student-box">
                <div style={{ height: "40px", width: "40px" }}>
                  <img src={proPic} alt="Student Icon" />
                </div>
              </div>
              <div className="student-details">
                Amith Ram
                <div className="student-class">
                  10 B<div className="sub-date">Submitted:</div>
                  <div className="blue-date">Apr 28 2024</div>
                  <div className="sub-date">File type:</div>
                  <div className="blue-date">PDF</div>
                  <div className="up-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill="#0148B7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="round-student-box">
              <div className="inside-student-box">
                <div style={{ height: "40px", width: "40px" }}>
                  <img src={proPic} alt="Student Icon" />
                </div>
              </div>
              <div className="student-details">
                Amith Ram
                <div className="student-class">
                  10 B<div className="sub-date">Submitted:</div>
                  <div className="blue-date">Apr 28 2024</div>
                  <div className="sub-date">File type:</div>
                  <div className="blue-date">PDF</div>
                  <div className="up-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                        fill="#0148B7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherHomework;
