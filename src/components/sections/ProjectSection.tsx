import { motion, type Variants } from "framer-motion";
import { projects } from "@/data/projects";
import { capabilityIcons } from "@/components/icons/skillIcons";

export function ProjectSection() {
	// Variasi untuk container grid agar kartu muncul berurutan
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	// Variasi untuk tiap kartu proyek
	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section
			id="projects"
			className="relative py-24 md:py-32 bg-gray-50 overflow-hidden"
		>
			<div className="max-w-6xl mx-auto px-6 md:px-12">
				{/* Heading dengan Fade In Up */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
						{projects.title}
					</h2>
					<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
						{projects.description}
					</p>
				</motion.div>

				{/* Project Cards Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					className="grid md:grid-cols-2 gap-10"
				>
					{projects.items.map((project, idx) => (
						<motion.div
							key={idx}
							variants={cardVariants}
							whileHover={{
								y: -10,
								boxShadow:
									"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
							}}
							className="p-8 bg-white rounded-2xl border border-gray-100 transition-colors hover:border-primary/20"
						>
							<motion.span
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
								className="text-sm font-medium text-primary uppercase tracking-wider"
							>
								{project.category}
							</motion.span>

							<h3 className="mt-2 text-2xl font-bold text-gray-900">
								{project.title}
							</h3>

							<p className="mt-4 text-gray-600 leading-relaxed">
								{project.description}
							</p>

							{/* Technologies - Muncul dengan animasi kecil */}
							<div className="mt-6 flex flex-wrap gap-3">
								{project.technologies.map((tech, i) => {
									const Icon = capabilityIcons[tech?.icon];

									return (
										<motion.div
											key={i}
											whileHover={{ scale: 1.1 }}
											className="flex items-center gap-2 px-3 py-1.5
                                             text-sm rounded-full bg-primary/10 text-primary border border-primary/5"
										>
											<Icon className="text-sm" />
											<span>{tech.name}</span>
										</motion.div>
									);
								})}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
