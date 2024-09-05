import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import CustomButton from "./CustomButton"; // Import your CustomButton component
import "../App.css";
import Box from "./Box";


function Righttop() {
  const [selectedSection, setSelectedSection] = useState("About Me");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div
      className="righttopbox"
      style={{
        backgroundColor: "#363C43",
        height: "270px",
        width: "650px",
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)',
        display: "flex",
        borderRadius: "16px",
      }}
    >
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

      <div className="both" style={{ marginLeft: "12px" }}>
        <div
          className="box"
          style={{
            backgroundColor: "#171717",
            marginTop: "10px",
            marginLeft: "15px",
            height: "60px",
            width: "90%",
            paddingLeft: "12px",
            paddingRight: "12px",
            color: "#A3ADB2",
            borderRadius: "22px",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <CustomButton onClick={() => handleSectionChange("About Me")}>
            About Me
          </CustomButton>
          <CustomButton onClick={() => handleSectionChange("Experiences")}>
            Experiences
          </CustomButton>
          <CustomButton onClick={() => handleSectionChange("Recommends")}>
            Recommends
          </CustomButton>
        </div>

        <div
          className="text custom-scrollbar" 
          style={{
            backgroundColor: "#363C43",
            height: "180px",
            width: "560px",
            paddingRight: "10px",
            overflowY: "auto",
            overflowX: "hidden",
            fontSize: "16px",
            padding: "16px",
            borderRadius: "8px",
            color: "#969696",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {selectedSection === "About Me" && (
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now. <br /> <br /> I was born and
              raised in Albany, NY, and have been living in Santa Carla for the
              past 10 years with my wife Tiffany and our 4-year-old twin
              daughters, Emma and Ella. Both of them are just starting school, so
              my calendar is usually blocked between 9-10 AM for their drop-off
              and morning routines. Outside of work, I enjoy hiking and exploring
              the beautiful landscapes around Santa Carla. I also have a passion
              for cooking and often spend my weekends trying out new recipes and
              experimenting with different cuisines. My family and I love spending
              time outdoors, whether it’s a day at the beach or a picnic in the
              park. I’m here to assist you with any questions or needs you might
              have regarding Salesforce products and services. Whether you’re
              looking for a new solution, need assistance with an existing
              product, or simply want to learn more about what we offer, I’m here
              to help. Salesforce is a fantastic company with a strong focus on
              innovation and customer satisfaction. We offer a range of solutions
              designed to help businesses streamline their operations, improve
              customer relationships, and drive growth. Our team is dedicated to
              providing exceptional support and ensuring that our clients get the
              most out of our products. If you need to schedule a
            </p>
          )}

          {selectedSection === "Experiences" && (
            <p>
              I have worked in various roles across different industries, starting
              my career in the tech industry as a software developer. Over the
              years, I’ve gained extensive experience in project management,
              product development, and customer relationship management. My
              experience in tech has given me a solid foundation in understanding
              the challenges and opportunities faced by businesses today.
              Transitioning into a sales role, I’ve been able to leverage my
              technical background to provide insightful solutions to clients,
              ensuring they get the most value out of the products and services
              we offer. I’ve led multiple teams and projects, and I’m passionate
              about delivering results that exceed expectations.
            </p>
          )}

          {selectedSection === "Recommends" && (
            <p>
              Based on our discussions and your needs, I would recommend exploring
              Salesforce’s suite of tools tailored for your industry. These
              solutions are designed to help businesses like yours optimize
              operations, enhance customer engagement, and drive growth. I can
              provide a more detailed overview of each product and how it can be
              customized to meet your specific requirements. Let’s schedule a
              follow-up meeting where we can dive deeper into these
              recommendations and discuss the next steps.
            </p>
          )}
        </div>
      </div>

      <div className="leftsideicon"></div>
    </div>
  );
}

export default Righttop;
