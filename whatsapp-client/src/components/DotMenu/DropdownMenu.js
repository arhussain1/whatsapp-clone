import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useRef, useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({ children, iconOveride, menuPosition = "left" }) => {
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
		<div className="menu__container" ref={dropdownRef}>
			<div
				onClick={() => {
					setIsMenuOpen(!isMenuOpen);
				}}
			>
				{iconOveride ? (
					iconOveride
				) : (
					<div className="icon__container">
						<MoreVertIcon />
					</div>
				)}
			</div>
			{isMenuOpen && children && (
				<div className={`menu-list__container--${menuPosition}`}>
					{children}
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
