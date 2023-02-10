import { createContext, useContext, useState } from "react";
import { CardJob } from "../components/CardJob";
import { GlobalContextType, GlobalProviderProps } from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [profileName, setProfileName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [nameJob, setNameJob] = useState("");
  const [component, setComponent] = useState([<CardJob />]);
  const [openModal, setOpenModal] = useState(false);
  const [deadline, setDeadline] = useState(0);
  const [valueJob, setValueJob] = useState(0);
  const [totalJobHours, setTotalJobHours] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        profileName,
        setProfileName,
        profilePhoto,
        setProfilePhoto,
        nameJob,
        setNameJob,
        component,
        setComponent,
        openModal,
        setOpenModal,
        deadline,
        setDeadline,
        valueJob,
        setValueJob,
        totalJobHours,
        setTotalJobHours,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
