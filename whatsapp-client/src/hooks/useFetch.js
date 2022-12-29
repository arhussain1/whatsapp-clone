import { useState } from "react";

const useFetch = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async (path, requestType, reqPayload) => {
		setIsLoading(true);
		setError(null);
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
			.then((response) => response.json())
			.then((data) => {
				if (data.error) {
					setError(data.error);
					setIsLoading(false);
					return;
				}
				setData(data);
				setIsLoading(false);
			})
			.catch((error) => setError(error.message));
	};

	return [fetchData, data, isLoading, error];
};

export default useFetch;
