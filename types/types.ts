import { PersonalProjects, ProjectTags } from "@prisma/client";

export type TimelineData = {
  dateRange: string;
  title: string;
  subtitle: string;
}[];

export interface IpersonalProject {
  projectTags: { tags: { id: string; title: string } }[];
  imageUri: string;
  title: string;
  desc: string;
  subtitle: string;
  sourceCode: string;
  livePreviewLink: string;
}
