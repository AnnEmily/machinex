import { create } from 'zustand';

interface SolverState {
  something: number;

  resetSolver: () => void;
}

export const useSolverStore = create<SolverState>(set => ({
  // Initial values
  something: 0,

  // Actions
  
  resetSolver: () => set( state => ({
    something: 0,
   })),
}));
