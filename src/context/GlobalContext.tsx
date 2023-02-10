import { createContext, useContext, useState } from "react";
import { GlobalContextType, GlobalProviderProps, JobsProps } from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [profileName, setProfileName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [jobList, setJobList] = useState<JobsProps[]>([]);
  const [useValueHour, setUseValueHour] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        profileName,
        setProfileName,
        profilePhoto,
        setProfilePhoto,
        openModal,
        setOpenModal,
        jobList,
        setJobList,
        useValueHour,
        setUseValueHour,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
