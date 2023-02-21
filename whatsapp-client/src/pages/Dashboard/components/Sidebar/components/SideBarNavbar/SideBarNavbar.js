import DropdownItem from "../../../../../../components/DotMenu/components/DropdownItem/DropdownItem";
import DropdownMenu from "../../../../../../components/DotMenu/DropdownMenu";
import useAuthContext from "../../../../../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import "./SideBarNavbar.css";

const SideBarNavbar = () => {
	const [profileImageUrl, setProfileImageUrl] = useState();
	const { user, dispatch } = useAuthContext();

	useEffect(() => {
		if (!user) return;
		fetch(`/media/${user.user.profileImageUrlS3}`)
			.then((response) => response.blob())
			.then((data) => {
				setProfileImageUrl(URL.createObjectURL(data));
			});
	}, [user]);

	const logout = () => {
		localStorage.removeItem("user");
		dispatch({ type: "LOGOUT" });
	};

	const profileImage = (
		<div className="sidebar__navbar-profile-image-container">
			<img className="sidebar__navbar-profile-image" src={profileImageUrl} />
		</div>
	);

	return (
		<div className="sidebar__navbar">
			<DropdownMenu
				iconOveride={profileImage}
				menuPosition="right"
			></DropdownMenu>
			<DropdownMenu>
				<DropdownItem title={"Logout"} action={logout} />
			</DropdownMenu>
		</div>
	);
};

export default SideBarNavbar;
