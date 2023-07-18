import type { ImageDataLike } from 'gatsby-plugin-image/dist/src/components/hooks';

export enum NodeType {
  USER_NODE_TYPE = `User`,
  SKILL_SET_TYPE = `SkillSet`,
  SKILL_NODE_TYPE = `Skill`,
  EXPERIENCE_NODE_TYPE = `Experience`,
  EDUCATION_NODE_TYPE = `Education`,
  COMPANY_NODE_TYPE = `Company`,
  DURATION_NODE_TYPE = `Duration`,
  LOCATION_NODE_TYPE = `Location`,
}

export interface User {
  id: string;
  about: string;
  imgAlt: string;
  name: string;
  title: string;
  addressLine1: string;
  addressLine2: string;
  phoneNumber: string;
  email: string;
  img: ImageDataLike;
  skillsSet: SkillSet[];
  experience: Experience[];
  education: Education[];
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

export interface Experience {
  id: string;
  company: Company;
  location?: Location;
  role: string;
  duration: Duration;
  description: string;
}

export interface Education {
  id: string;
  college: string;
  location: Location;
  duration: Duration;
  degree: string;
}

export interface Company {
  name: string;
  website?: string;
}

export interface Location {
  city?: string;
  state?: string;
  country?: string;
}

export interface Duration {
  start: Date;
  end?: Date;
}
