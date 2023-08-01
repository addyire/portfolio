import { createContext } from 'react'

export const ScrollContext = createContext({ pageProgress: 0, scroll: () => undefined })
