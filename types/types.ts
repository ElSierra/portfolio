
export type TimelineData = {
  dateRange: string;
  title: string;
  subtitle: string;
}[];

export interface IPersonalProject {
  projectTags: { tags: { id: string; title: string } }[];
  id: string;
  title: string;
  subtitle: string | null;
  livePreviewLink: string | null;
  youtubeLink: string | null;
  sourceCode: string;
  imageUri: string;
  mobileImageUri: string | null;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
}
