"use client";

import { PageSection } from "../PageSection";
import { ResumeSection } from "./ResumeSection";
import { ResumeItem } from "./ResumeItem";
import * as resume from "../../data/resumeData";

export const Resume = () => {
  return (
    <PageSection title="resume" bg="#faa006">
      <ResumeSection title="education">
        <ResumeItem data={resume.codesmith}></ResumeItem>
        <ResumeItem data={resume.universityOfWashington}></ResumeItem>
        <ResumeItem data={resume.universityOfMichigan}></ResumeItem>
      </ResumeSection>
      <ResumeSection title="experience">
        <ResumeItem data={resume.riseTheatre}></ResumeItem>
        <ResumeItem data={resume.graphQLOneStopShop}></ResumeItem>
        <ResumeItem data={resume.broadway}></ResumeItem>
      </ResumeSection>
    </PageSection>
  );
};
