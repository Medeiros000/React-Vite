interface FeatureCardProps {
	title: string;
	description: string;
	icon?: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
	return (
		<div className="feature-card">
			<div className="feature-icon-title">
				{icon && <img src={icon} alt={title} />}
				<h3>{title}</h3>
			</div>
			<p>{description}</p>
		</div>
	);
}
