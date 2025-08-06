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
				{ title: "Recurso 1", description: "Descrição 1", icon: "./public/vite.svg" },
				{ title: "Recurso 2", description: "Descrição 2", icon: "./public/react.svg" },
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
