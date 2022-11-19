import { AppRoutes } from "@components/routes/AppRoutes"
// import { getLastCharacters } from "@services/characters.service";
import AppMovie from "example/AppMovie"
import AppExample from "example/AppRoute.example"
import { useEffect } from "react"
import { ToastContainer } from "react-toastify"

function App() {
  const apikey =
    "https://gateway.marvel.com:443/v1/public/characters?apikey=872922e0218baf83ccf8b78bbc9675f4"

  const getData = async () => {
    // const items = await fetch(apikey);
    // const response = await items.json();
    const response = await getLastCharacters()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  )
}

export default App
function getLastCharacters() {
  throw new Error("Function not implemented.")
}
