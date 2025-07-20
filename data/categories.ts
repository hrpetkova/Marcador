// data/categories.ts

import { Category } from "../models/types";

export const categories: Category[] = [
  {
    name: "Alevín Masculino",
    isSelection: false,
    gender: "M",
    halves: 2,
    halfDuration: 20,
    restDuration: 10,
    allowsOvertime: false,
    allowsPenalties: false,
    phases: ["Amistoso", "Liga", "Copa"]
  },
  {
    name: "2ª Nacional Masculina",
    isSelection: false,
    halves: 2,
    halfDuration: 30,
    restDuration: 10,
    allowsOvertime: true,
    allowsPenalties: true,
    phases: ["Amistoso", "Liga", "Copa", "Fase Ascenso", "Final A4"]
  },
  {
    name: "ASOBAL",
    isSelection: false,
    halves: 2,
    halfDuration: 30,
    restDuration: 10,
    allowsOvertime: true,
    allowsPenalties: true,
    phases: ["Amistoso", "Liga", "Copa del Rey", "EHF"]
  },
  // Añadir el resto siguiendo esta estructura
];
