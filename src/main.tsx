import ReactDOM from "react-dom/client"
// import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import "@styles/style.scss"
import "react-toastify/dist/ReactToastify.css"
import "swiper/css/bundle"
import { MovieRoutes } from "@components/routes/MovieRoutes"
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    {/* <App /> */}
    <MovieRoutes />
    <ReactQueryDevtools />
  </QueryClientProvider>
)
