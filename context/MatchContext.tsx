// context/MatchContext.tsx

import React, { createContext, useContext, useState } from 'react';
import { MatchData } from '../models/types';

type MatchContextType = {
  matchData: MatchData;
  setMatchData: React.Dispatch<React.SetStateAction<MatchData>>;
};

const MatchContext = createContext<MatchContextType | undefined>(undefined);

export const MatchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [matchData, setMatchData] = useState<MatchData>({} as MatchData);
  return (
    <MatchContext.Provider value={{ matchData, setMatchData }}>
      {children}
    </MatchContext.Provider>
  );
};

export const useMatch = () => {
  const context = useContext(MatchContext);
  if (!context) throw new Error("MatchContext must be used inside MatchProvider");
  return context;
};
