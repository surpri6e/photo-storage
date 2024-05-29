import { useEffect } from 'react'

export const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  cbfunction: () => void
): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any): void => {
    if (ref.current && !ref.current.contains(e.target)) cbfunction()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return (): void => {
      document.removeEventListener('mousedown', handleClick)
    }
  })
}
