"use client";
import React from "react";

const defaultValue = "#";

const Context = React.createContext(defaultValue);
const SetterContext = React.createContext<(link: string) => void>(() => {});

export const useGitHub = () => React.useContext(Context);
export const useGitHubSetter = () => React.useContext(SetterContext);

export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
  const [gitHubLink, setGitHubLink] = React.useState(defaultValue);

  const setterGitHubLink = React.useCallback((link: string) => {
    setGitHubLink(link);
  }, []);

  return (
    <Context.Provider value={gitHubLink}>
      <SetterContext.Provider value={setterGitHubLink}>
        {children}
      </SetterContext.Provider>
    </Context.Provider>
  );
};
