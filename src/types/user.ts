import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

export interface User {
  about: string;
  imgAlt: string;
  name: string;
  title: string;
  addressLine1: string;
  addressLine2: string;
  phoneNumber: string;
  email: string;
  img: FileNode;
  skillsSet: SkillSet[];
}

export interface SkillSet {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  value: number;
}
