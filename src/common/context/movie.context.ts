import { useState } from "react"

export const movieContext = (): unknown => {
  const [data, setData] = useState([])
  return { data, setData }
}
