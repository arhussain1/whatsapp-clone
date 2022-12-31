import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useRef, useState } from "react";
import "./DotMenu.css";

const DotMenu = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		function handleClick(event) {
			if (!dropdownRef.current.contains(event.target)) {
				setIsMenuOpen(false);
			}
		}

		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<div className="dot-menu__container" ref={dropdownRef}>
			<div
				className="dot__container"
				onClick={() => {
					setIsMenuOpen(!isMenuOpen);
				}}
			>
				<MoreVertIcon />
			</div>
			{isMenuOpen && <div className="menu__container">{children}</div>}
		</div>
	);
};

export default DotMenu;
