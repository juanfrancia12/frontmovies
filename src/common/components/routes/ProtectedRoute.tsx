import { Navigate, Outlet } from "react-router-dom"

interface Props {
  isAllowed: boolean | null
  redirectTo?: string
  children?: any
}

// JSX.Element | JSX.Element[]

export const ProtectedRoute = ({
  isAllowed = false,
  redirectTo = "/login",
  children,
}: Props): React.ReactNode => {
  if (!(isAllowed ?? false)) {
    return <Navigate to={redirectTo} replace />
  }

  return Boolean(children) || <Outlet />
}
