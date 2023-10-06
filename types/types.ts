import { PersonalProjects, ProjectTags } from "@prisma/client";

export type TimelineData = {
  dateRange: string;
  title: string;
  subtitle: string;
}[];

export interface IpersonalProject extends PersonalProjects {
  projectTags: { tags: { id: string; title: string } }[];
}
