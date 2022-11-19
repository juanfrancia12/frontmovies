import { AppRoutes } from "@components/routes/AppRoutes"
import { ReactElement } from "react"
// import { getLastCharacters } from "@services/characters.service";
// import AppMovie from "example/AppMovie"
// import AppExample from "example/AppRoute.example"
import { ToastContainer } from "react-toastify"

const App = (): ReactElement => {
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  )
}

export default App
