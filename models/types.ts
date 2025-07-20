// models/types.ts

export type Player = {
  number: number;
  name: string;
  isGoalkeeper: boolean;
  goals: number;
  yellow: boolean;
  twoMinutes: number;
  red: boolean;
  blue: boolean;
};

export type Staff = {
  name: string;
  role: string;
  yellow: boolean;
  twoMinutes: number;
  red: boolean;
};

export type Team = {
  name: string;
  shirtColor: string;
  shortsColor: string;
  players: Player[];
  staff: Staff[];
  isSelection: boolean;
};

export type Category = {
  name: string;
  isSelection: boolean;
  gender?: "M" | "F";
  halves: number;
  halfDuration: number;
  restDuration: number;
  allowsOvertime: boolean;
  allowsPenalties: boolean;
  phases: string[];
};

export type GoalEvent = {
  playerNumber: number;
  team: "A" | "B";
  time: string;
};

export type MatchData = {
  teamA: Team;
  teamB: Team;
  category: Category;
  goals: GoalEvent[];
};

