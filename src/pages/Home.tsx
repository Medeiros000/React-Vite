import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  interface Feature {
    title: string;
    description: string;
  }
	const [features, setFeatures] = useState<Feature[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simular carregamento de dados
		const loadFeatures = async () => {
			// Aqui você faria uma chamada à API
			const data = [
				{ title: "Node.js", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", icon: "/react.svg" },
				{ title: "Vite", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", icon: "/vite.svg" },
				{ title: "TypeScript", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", icon: "/ts.svg" },
			];
			setFeatures(data);
			setLoading(false);
		};

		loadFeatures();
	}, []);

	if (loading) {
		return <div>Carregando...</div>;
	}

	return (
		<main>
			<Hero />
			<section className="features">
				<h2>Recursos</h2>
				<div className="features-grid">
					{features.map((feature, index) => (
						<FeatureCard key={index} {...feature} />
					))}
				</div>
			</section>
		</main>
	);
}
