import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext({
  token: null,
  user: null
})

export function StoreProvider ({ children }) {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme')
      if (theme) {
        setTheme(theme)
      } else {
        localStorage.setItem('theme', 'dark')
        setTheme('dark')
      }
    }
  }, [])

  useEffect(() => {
    if (theme !== '' && typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.add(theme)
        localStorage.setItem('theme', theme)
      } else {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', theme)
      }
    }
  }, [theme])

  return (
    <Context.Provider value={{ theme, setTheme }}>
      {children}
    </Context.Provider>
  )
}

export function useStore () {
  return useContext(Context)
}
