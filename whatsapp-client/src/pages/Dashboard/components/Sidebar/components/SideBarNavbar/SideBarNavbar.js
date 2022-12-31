import DropdownItem from "../../../../../../components/DotMenu/components/DropdownItem/DropdownItem";
import DotMenu from "../../../../../../components/DotMenu/DotMenu";
import useAuthContext from "../../../../../../hooks/useAuthContext";
import "./SideBarNavbar.css";

const SideBarNavbar = () => {
	const { dispatch } = useAuthContext();

	const logout = () => {
		localStorage.removeItem("user");
		dispatch({ type: "LOGOUT" });
	};

	return (
		<div className="sidebar__navbar">
			<p>Navbar goes here</p>
			<DotMenu>
				<DropdownItem title={"Logout"} action={logout} />
			</DotMenu>
		</div>
	);
};

export default SideBarNavbar;
