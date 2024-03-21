import { useEffect, useState } from "react";
import { Outlet, useLocation, useOutlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

export const isRoleValid = (userRoles: string[] | undefined, outletRole: string[] | null) => {
  if (!userRoles) return false;
  if (!outletRole) return true;
  return userRoles.some((role) => outletRole.includes(role));
};

function ProtectedRoute() {
  const { user } = useAuth();
  const [locationRoles, setLocationRoles] = useState(null);
  const location = useLocation();
  const getRouteIdFromOutlet = useOutlet();

  useEffect(() => {
    const routeLocationData = getRouteIdFromOutlet?.props.children.props.match.route;
    const locationKey = routeLocationData?.path;
    const locationRolesObj = routeLocationData?.id && JSON.parse(routeLocationData?.id);
    if (locationRolesObj && locationKey) {
      setLocationRoles(locationRolesObj[locationKey]);
    }
    // eslint-disable-next-line
  }, [user, location.pathname]);

  if (!isRoleValid(user?.roles, locationRoles))
    return <ErrorPage errorProp={{ status: 403, message: "role unauthorized" }} />;

  return user ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
