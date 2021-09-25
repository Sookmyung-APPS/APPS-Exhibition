import React from "react";
import Header from "../Components/Header";
import ProjectList from "../Components/ProjectList";
import "../ProjectPage.css";

function ProjectPage() {
  return (
    <div>
      <Header />
      <div className="ProjectPage">
        <ProjectList />
      </div>
    </div>
  );
}

export default ProjectPage;
