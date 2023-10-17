"use client";
import React from "react";

const defaultValue = "#";

const context = React.createContext(defaultValue);
const setterContext = React.createContext<(link: string) => void>(() => {});

export const useGitHub = () => React.useContext(context);
export const useGitHubSetter = () => React.useContext(setterContext);

export const GitHubProvider = ({ children }: { children: React.ReactNode }) => {
  const [gitHubLink, setGitHubLink] = React.useState(defaultValue);

  const setterGitHubLink = React.useCallback((link: string) => {
    setGitHubLink(link);
  }, []);

  return (
    <context.Provider value={gitHubLink}>
      <setterContext.Provider value={setterGitHubLink}>
        {children}
      </setterContext.Provider>
    </context.Provider>
  );
};
