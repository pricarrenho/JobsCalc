import { createContext, ReactElement, useContext, useState } from "react";
import { CardJob } from "../components/CardJob";

export type GlobalContextType = {
  profileName: string;
  setProfileName: (value: string) => void;
  profilePhoto: string;
  setProfilePhoto: (value: string) => void;
  nameJob: string;
  setNameJob: (value: string) => void;
  component: ReactElement[];
  setComponent: ([]) => void;
};

export type GlobalProviderProps = {
  children: ReactElement;
};

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [profileName, setProfileName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [nameJob, setNameJob] = useState("");
  const [component, setComponent] = useState([<CardJob />]);

  console.log(component);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
