import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import "./DotMenu.css";

const DotMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="dot-menu__container">
			<div
				className="dot__container"
				onClick={() => {
					setIsMenuOpen(!isMenuOpen);
				}}
			>
				<MoreVertIcon />
			</div>
			{isMenuOpen && <div className="menu__container">Hey there</div>}
		</div>
	);
};

export default DotMenu;
