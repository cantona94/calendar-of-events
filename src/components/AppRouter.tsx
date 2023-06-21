import { Routes, Route, Navigate } from "react-router-dom"
import { RouteNames, privateRoutes, publicRoutes } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const AppRouter = () => {
  const { isAuth } = useTypedSelector(state => state.auth);
  return (
    isAuth
      ? <Routes>
        {privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )}
        <Route
          path="*"
          element={<Navigate to={RouteNames.EVENT} replace />}
        />
      </Routes>
      : <Routes>
        {publicRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )}
        <Route
          path="*"
          element={<Navigate to={RouteNames.LOGIN} replace />}
        />
      </Routes>
  )
}
