import { motion, type Variants } from "framer-motion";
import { skills } from "@/data/skill";
import { capabilityIcons } from "../icons/skillIcons";

export function SkillSection() {
	// Variasi untuk container utama agar anak-anaknya (grup skill) muncul berurutan
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	// Variasi untuk setiap item skill (muncul dari bawah ke atas)
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<section id="skills" className="relative z-20 py-24 md:py-32 bg-[#0f0f1a]">
			<div className="max-w-6xl mx-auto px-6 md:px-12">
				{/* Heading - Muncul dengan Fade Down */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-white">
						{skills?.title}
					</h2>
					<p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
						{skills?.description}
					</p>
				</motion.div>

				{/* Skill Groups - Grid Animasi */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid md:grid-cols-3 gap-12"
				>
					{skills?.groups?.map((group, idx) => (
						<motion.div key={idx} variants={itemVariants} className="space-y-6">
							<h3 className="text-xl font-semibold text-white border-l-4 border-[#4b49ac] pl-4">
								{group?.title}
							</h3>

							<div className="space-y-4">
								{group?.items?.map((skill, i) => {
									const Icon = capabilityIcons[skill?.icon];
									return (
										<motion.div
											key={i}
											whileHover={{
												scale: 1.03,
												x: 5,
												backgroundColor: "rgba(255, 255, 255, 0.12)",
											}}
											whileTap={{ scale: 0.98 }}
											className="flex cursor-pointer items-center gap-4 p-4 rounded-xl 
                                             bg-white/5 border border-white/10
                                             hover:border-[#4b49ac]
                                             transition-colors duration-300"
										>
											<div
												className="w-10 h-10 rounded-lg 
                                                bg-[#4b49ac]/20 text-[#4b49ac]
                                                flex items-center justify-center text-lg shadow-[0_0_15px_rgba(75,73,172,0.3)]"
											>
												<Icon />
											</div>
											<span className="text-gray-200 font-medium">
												{skill.name}
											</span>
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
