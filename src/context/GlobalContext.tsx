import { createContext, useContext, useEffect, useState } from "react";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../utils/localStorage";
import {
  GlobalContextType,
  GlobalProviderProps,
  JobsProps,
  ProfileData,
} from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [jobList, setJobList] = useState<JobsProps[]>([]);
  const [profileData, setProfileData] = useState<ProfileData>();

  useEffect(() => {
    const localStorageUserData = getLocalStorageItem("User");
    setProfileData(localStorageUserData);

    const localStorageJobsData = getLocalStorageItem("Jobs");
    setJobList(localStorageJobsData);
  }, []);

  const handleProfileData = (value: ProfileData) => {
    setProfileData(value);
    setLocalStorageItem("User", value);
  };

  const handleJobList = (value: JobsProps[]) => {
    setJobList(value);
    setLocalStorageItem("Jobs", value);
  };

  return (
    <GlobalContext.Provider
      value={{
        jobList,
        profileData,
        handleProfileData,
        handleJobList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
