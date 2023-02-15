import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  jobList: JobsProps[];
  profileData?: ProfileData;
  handleProfileData: (value: ProfileData) => void;
  handleJobList: (value: JobsProps[]) => void;
};

export type JobsProps = {
  id: string;
  name: string;
  daysLeft: number;
  value: number;
  hoursPerDay: string;
  totalHours: string;
  jobsStatus: "pendent" | "started" | "done";
};

export type ProfileData = {
  name: string;
  photo: string;
  valueMonth: string;
  hoursPerDay: string;
  daysWeek: string;
  vacationWeeks: string;
  valuePerDay: string;
};
