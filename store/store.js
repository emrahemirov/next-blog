import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useLayoutStore = create(
  devtools(
    persist(
      (set, get) => ({
        themeMode: 'dark',

        toggleMode: () =>
          set(state => ({
            themeMode: state.themeMode === 'dark' ? 'light' : 'dark'
          }))
      }),
      {
        name: 'layout-storage',
        getStorage: () => localStorage
      }
    )
  )
);
