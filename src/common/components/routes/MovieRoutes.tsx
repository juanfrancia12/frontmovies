import CharacterIdPage from "@pages/character-id"
import CharactersPage from "@pages/characters"
import HomePage from "@pages/home"
import AppMovieLayout from "example/AppMovie"
import { ReactElement, Suspense } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const Error404 = (): JSX.Element => {
  return <div>ERROR 404</div>
}

// const LoginPage = () => {
//   return <div>Login page</div>
// }

// const UnauthorizedPage = () => {
//   return <div>Unauthorized page</div>
// }

const Historial = (): JSX.Element => {
  return (
    <div className="pt-20">
      <span>Historial del usuario</span>
      {/* <div>{queryClient.getQueryData(["getLastCarouselCharacters", getLastCarouselCharacters.name])}</div> */}
    </div>
  )
}

export function MovieRoutes(): ReactElement {
  // const getToken = false

  return (
    <Router>
      <Suspense
        fallback={<div className="text-red-700 text-5xl">cargando pagina</div>}
      >
        <AppMovieLayout>
          <Suspense
            fallback={
              <div className="text-blue-700 text-3xl">CARGANDO ....</div>
            }
          >
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/characters/:id" element={<CharacterIdPage />} />
              <Route path="/characters" element={<CharactersPage />} />
              <Route path="/historial" element={<Historial />} />
              {/* <Route index element={<div>Landing Page (Public)</div>} /> */}
              {/* <Route index element={<HomePage />} /> */}
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </AppMovieLayout>
      </Suspense>
    </Router>
  )
}
