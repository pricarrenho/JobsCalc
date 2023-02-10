import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type GlobalContextType = {
  profileName: string;
  setProfileName: (value: string) => void;
  profilePhoto: string;
  setProfilePhoto: (value: string) => void;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  jobList: JobsProps[];
  setJobList: (value: JobsProps[]) => void;
  useValueHour: string;
  setUseValueHour: (value: string) => void;
};

export type JobsProps = {
  id: string;
  name: string;
  daysLeft: number;
  value: number;
};
