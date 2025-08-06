import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import NavBar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<AppRoutes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
