import "./DropdownItem.css";

const DropdownItem = ({ title, action }) => {
	return (
		<div className="dropdown-item-container" onClick={action}>
			{title}
		</div>
	);
};

export default DropdownItem;
