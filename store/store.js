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

export const useBlogsStore = create((set, get) => ({
  blog: {},
  blogs: [],
  allBlogsCount: 0,
  setBlogs: data => set(state => ({ blogs: data })),
  setBlog: data => set(state => ({ blog: data })),
  setAllBlogsCount: data => set(state => ({ allBlogsCount: data }))
}));
