import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav id="navbar">
				<div>
					<h1>NavBar</h1>
				</div>
				<div>
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
				</div>
			</nav>
		</>
	);
}
