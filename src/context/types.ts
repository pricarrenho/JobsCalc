import { ReactElement } from "react";

export type GlobalContextType = {
  profileName: string;
  setProfileName: (value: string) => void;
  profilePhoto: string;
  setProfilePhoto: (value: string) => void;
  nameJob: string;
  setNameJob: (value: string) => void;
  component: ReactElement[];
  setComponent: ([]) => void;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  deadline: number;
  setDeadline: (value: number) => void;
  valueJob: number;
  setValueJob: (value: number) => void;
  totalJobHours: number;
  setTotalJobHours: (value: number) => void;
};

export type GlobalProviderProps = {
  children: ReactElement;
};
