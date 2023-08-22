import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext({
  theme: 'light' // Cambio aquí
})

export function StoreProvider ({ children }) {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      localStorage.setItem('theme', 'light') // Cambio aquí
      setTheme('light') // Cambio aquí
    }
  }, [])

  useEffect(() => {
    if (theme) {
      const root = document.documentElement
      root.setAttribute('data-theme', theme)
      root.classList.toggle('dark', theme === 'dark')
    }
  }, [theme])

  useEffect(() => {
    function saveThemeBeforeUnload () {
      localStorage.setItem('theme', theme)
    }

    window.addEventListener('beforeunload', saveThemeBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', saveThemeBeforeUnload)
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
