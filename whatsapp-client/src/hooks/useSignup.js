import { useState } from "react";
import useAuthContext from "./useAuthContext";

export const useSignup = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useAuthContext();

	const signup = async (formData) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch("/users/signup", {
			method: "POST",
			body: formData,
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
	return [signup, isLoading, error];
};
