import { useState } from "react";

const useFetch = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async (path, requestType, reqPayload) => {
		setIsLoading(true);
		const payload = reqPayload
			? {
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(reqPayload),
			  }
			: {};

		fetch(path, {
			method: requestType ?? "GET",
			...payload,
		})
			.then((response) => {
				if (!response.ok) throw Error("Failed to fetch resource");
				return response.json();
			})
			.then((data) => {
				setData(data);
				setIsLoading(false);
			})
			.catch((error) => setError(error.message));
	};

	return [fetchData, data, isLoading, error];
};

export default useFetch;
