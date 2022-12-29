import { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";

const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw Error("useAuthContext must be used inside a AuthContextProvider");
	}

	return context;
};

export default useAuthContext;
