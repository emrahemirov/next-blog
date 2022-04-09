import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useLayoutStore = create(
  devtools(
    persist(
      (set, get) => ({
        themeMode: 'dark',
        footerLinkItems: [
          {
            href: 'https://www.github.com',
            svgTitle: 'github',
            imageAlt: 'github'
          },
          {
            href: 'https://www.github.com',
            svgTitle: 'globe',
            imageAlt: 'website'
          }
        ],
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
