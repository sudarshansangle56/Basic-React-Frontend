import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { FaArrowLeft, FaArrowRight, FaQuestion } from "react-icons/fa";
import Box from "./Box";
import "../App.css";

const scrollRight = () => {
  const container = document.querySelector(".imgsection");
  if (container) {
    container.scrollBy({
      left: 150,
      behavior: "smooth",
    });
  }
};

const scrollLeft = () => {
  const container = document.querySelector(".imgsection");
  if (container) {
    container.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  }
};

function Rightbot() {
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  return (
    <div
      className="rightbottom"
      style={{
        backgroundColor: "#363C43",
        marginTop: "30px",
        height: "270px",
        width: "650px",
        display: "flex",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
        flexDirection: "row",
        borderRadius: "16px",
      }}
    >
      <div className="box1">
        <div
          className="rightsideicon"
          style={{
            height: "70%",
            width: "30px",
            color: "#868E99",
            marginLeft: "10px",
            marginTop: "20px",
            fontWeight: "lighter",
            borderRadius: "16px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          <FaQuestion
            style={{
              fontSize: "35px",
              border: "3px solid",
              borderRadius: "30px",
              padding: "5px",
              fontWeight: "-100",
            }}
          />

          <Box />
        </div>
        {/* Closing of rightsideicon */}
      </div>
      {/* Closing for box1 */}
      <div
        className="problem"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          className="box2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            gap: "15px",
            flexDirection: "row",
          }}
        >
         
          {/* Closing of add gallery */}
          <div className="button" style={{ display: "flex", gap: "130px" , color: '#D3D3D3' }}>
          <div className="addimage">
           
            <CustomButton>Gallery</CustomButton>
            
          </div>


          <div className="arrow"  style={{display:'flex', gap:'20px'}}>
            <div style={{ position: "relative" }}>
              <button
                style={{
                  boxShadow:
                  "rgba(0, 0, 0, 0.4) 5px 5px 20px 0px, rgba(0, 0, 0, 0.2) 10px 10px 30px 0px, rgba(0, 0, 0, 0.1) 15px 15px 40px 0px, rgba(255, 255, 255, 0.5) 0 0 15px 0px, rgba(0, 0, 0, 0.4) 5px 5px 10px 0px",
                  width: "150px",
                  touchAction: "manipulation",
                  height: "49px",
                  padding: "10px 24px",
                  gap: "10px",
                  fontSize: "15px",
                  fontWeight: "500",
                  display: "flex",
                  backgroundColor: "#42484E",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "25px",
                  border: "0px solid white",
                  color: "#A3ADB2",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                + ADD IMAGE
              </button>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{
                  opacity: 0,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
              />
            </div>
            
            <button
              onClick={scrollLeft}
              style={{
                background:
                  "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                width: "45px",
                height: "45px",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "0px solid white",
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 5px 5px 10px 0px, rgba(0, 0, 0, 0.2) 10px 10px 20px 0px, rgba(0, 0, 0, 0.1) 15px 15px 30px 0px, rgba(255, 255, 255, 0.5) 0 0 10px 0px",
                backgroundColor: "#1E2022",
               color: '#D3D3D3'
              }}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              style={{
                background:
                  "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                width: "45px",
                height: "45px",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "0px solid white",
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 5px 5px 10px 0px, rgba(0, 0, 0, 0.2) 10px 10px 20px 0px, rgba(0, 0, 0, 0.1) 15px 15px 30px 0px, rgba(255, 255, 255, 0.5) 0 0 10px 0px",
                backgroundColor: "#1E2022",
                color: "#D3D3D3",
              }}
            >
              <FaArrowRight />
            </button>
            </div>{/* Closing of arrow  */}
          </div>
          {/* Closing of buttons */}
        </div>
        {/* Closing for box2 */}
        <div
          className="imgsection custom-scrollbar"
          style={{
            display: "flex",
            gap: "20px",
            height: "180px",
            width: "560px",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{
                height: "169px",
                borderRadius: "10px",
                filter: "grayscale(100%)",
                width: "190px",
              }}
            />
          )}
          <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            alt=""
            srcset=""
            style={{
              height: "169px",
              borderRadius: "10px",
              filter: "grayscale(100%)",
              width: "180px",
            }}
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            alt=""
            srcset=""
            style={{
              height: "169px",
              borderRadius: "10px",
              filter: "grayscale(100%)",
              width: "190px",
            }}
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            alt=""
            srcset=""
            style={{
              height: "169px",
              borderRadius: "10px",
              filter: "grayscale(100%)",
              width: "190px",
            }}
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            alt=""
            srcset=""
            style={{
              height: "169px",
              borderRadius: "10px",
              filter: "grayscale(100%)",
              width: "190px",
            }}
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            alt=""
            srcset=""
            style={{
              height: "169px",
              borderRadius: "10px",
              filter: "grayscale(100%)",
              width: "190px",
            }}
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            alt=""
            srcset=""
            style={{
              height: "169px",
              borderRadius: "10px",
              filter: "grayscale(100%)",
              width: "190px",
            }}
          />
           <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            alt=""
            srcset=""
            style={{
              height: "169px",
              borderRadius: "10px",
              filter: "grayscale(100%)",
              width: "190px",
            }}
          />
           <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            alt=""
            srcset=""
            style={{
              height: "169px",
              borderRadius: "10px",
              filter: "grayscale(100%)",
              width: "190px",
            }}
          />
           <img
            src="https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
            alt=""
            srcset=""
            style={{
              height: "169px",
              borderRadius: "10px",
              filter: "grayscale(100%)",
              width: "190px",
            }}
          />
        </div>
      </div>{" "}
      {/* closeing for problem */}
    </div> //closeing of main page
  );
}

export default Rightbot;
