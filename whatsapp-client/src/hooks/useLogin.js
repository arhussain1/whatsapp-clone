import { useState } from "react";
import useAuthContext from "./useAuthContext";

export const useLogin = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch("/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
			return;
		}
		localStorage.setItem("user", JSON.stringify(json));
		dispatch({
			type: "LOGIN",
			payload: {
				token: json.token,
				...json.user,
			},
		});

		setIsLoading(false);
	};
	return [login, isLoading, error];
};
