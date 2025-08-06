import Footer from "./assets/components/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./assets/routes";

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
