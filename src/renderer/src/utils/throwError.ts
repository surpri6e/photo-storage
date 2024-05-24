export const throwError = (error: unknown): void => {
  if (error && typeof error === 'string') throw new Error(error)
}
