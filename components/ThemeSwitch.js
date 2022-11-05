import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { FaSun, FaMoon } from 'react-icons/fa'
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-fit w-fit rounded-full text-gray-900 dark:text-gray-100"
      onClick={() => setTheme(theme === 'light' || resolvedTheme === 'light' ? 'light' : 'light')}
    >
      {mounted && (theme === 'light' || resolvedTheme === 'light') ? (
        <FaSun size={20} />
      ) : (
        <FaMoon size={20} />
      )}
    </button>
  )
}

export default ThemeSwitch
