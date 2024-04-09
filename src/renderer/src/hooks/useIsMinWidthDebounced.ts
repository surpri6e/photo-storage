import { sidebarDelay } from '@renderer/utils/constants'
import { useEffect, useState } from 'react'

export const useIsMinWidthDebounced = (isMinWidth: boolean): boolean => {
  const [isMinWidthHere, setIsMinWidthHere] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isMinWidth) {
      timeout = setTimeout(() => {
        setIsMinWidthHere(isMinWidth)
      }, sidebarDelay)
    } else {
      setIsMinWidthHere(isMinWidth)
    }

    return () => clearTimeout(timeout)
  }, [isMinWidth])

  return isMinWidthHere
}
