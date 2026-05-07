import { motion, type Variants } from "framer-motion";
import { reasons } from "@/data/reasons";

export function WhyWorkMeSection() {
	// Variasi untuk daftar checklist agar muncul berurutan
	const listContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.3 },
		},
	};

	const listItemVariants: Variants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<section
			id="reasons"
			className="relative py-24 md:py-32 bg-white overflow-hidden"
		>
			<div className="max-w-6xl mx-auto px-6 md:px-12">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					{/* LEFT SIDE - Heading & Desc */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
							{reasons?.title}
						</h2>
						<p className="mt-6 text-lg text-gray-600 leading-relaxed">
							{reasons?.description}
						</p>
					</motion.div>

					{/* RIGHT SIDE - Checklist dengan Staggered Animation */}
					<motion.div
						variants={listContainerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="space-y-6"
					>
						{reasons?.items?.map((item, idx) => (
							<motion.div
								key={idx}
								variants={listItemVariants}
								className="flex items-start gap-4 group"
							>
								{/* Animasi dot/titik saat hover */}
								<motion.div
									whileHover={{ scale: 1.2 }}
									className="w-6 h-6 mt-1 rounded-full bg-[#4b49ac]/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#4b49ac]/30"
								>
									<div className="w-2.5 h-2.5 rounded-full bg-[#4b49ac]" />
								</motion.div>

								<p className="text-gray-700 text-lg transition-colors group-hover:text-gray-900">
									{item}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
