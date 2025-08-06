import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav id="navbar">
				<div>
					<h1>NavBar</h1>
				</div>
				<div>
					<Link to="/">home</Link>
					<Link to="/login">login</Link>
				</div>
			</nav>
		</>
	);
}
