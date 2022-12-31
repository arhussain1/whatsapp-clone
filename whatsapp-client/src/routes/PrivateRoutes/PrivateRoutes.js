import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const PrivateRoutes = ({ children, ...rest }) => {
	const { user } = useAuthContext();

	const isAuthenticated = !!user;
	console.log("isAuthenticated", isAuthenticated);

	return isAuthenticated ? (
		<Outlet />
	) : (
		<Navigate
			to={{
				pathname: "/",
			}}
		/>
	);
};

export default PrivateRoutes;
