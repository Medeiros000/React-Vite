import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-content">
					<div>
						<h1>jrmedeiros.dev</h1>
					</div>
					<div>
						<Link to="/">home</Link>
						<Link to="/login">login</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
