import React from "react";
import data from "./data/data.json";
import Header from "./Header";
import Section from "./Section";

const Resume = () => {
  return (
    <div className="resume">
      <Header data={data.contact} />
      <Section title={"Work Experience"} data={data.work} id="work" />
      <Section title={"Education"} data={data.education} id="education" />
      <Section title={"Skills"} data={data.skills} id="skills" />
    </div>
  );
};

export default Resume;
