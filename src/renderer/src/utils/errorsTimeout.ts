export const errorTimeout = (
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  ms: number
): void => {
  setError(true)
  setTimeout(() => setError(false), ms)
}

export const errorDoubleTimeout = (
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  ms: number
): void => {
  setTimeout(() => setError(true), ms)
  setTimeout(() => setError(false), ms + 1000)
}
