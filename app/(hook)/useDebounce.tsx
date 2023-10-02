import React from "react"
import { debounce } from "lodash"

export const useDebounce = <T extends (...arg:any[]) => any>(callback:T, delay: number) => {
    
    const callbackRef = React.useRef(callback)
    React.useLayoutEffect(() => {
      callbackRef.current = callback
    })
    return React.useMemo(
      () => debounce((...args) => callbackRef.current(...args), delay),
      [delay],
    )
  }
