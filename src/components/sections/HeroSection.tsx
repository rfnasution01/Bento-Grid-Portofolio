import { profile } from "@/data/profile";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { FaMailBulk } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";

export function HeroSection() {
	// Variants
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item: Variants = {
		hidden: { opacity: 0, y: 40 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<>
			<section
				id="hero"
				className="min-h-screen bg-neutral-950 flex items-center"
			>
				<div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* LEFT */}
						<motion.div variants={container} initial="hidden" animate="show">
							<motion.h1
								variants={item}
								className="text-4xl md:text-6xl font-bold text-white leading-tight"
							>
								{profile?.headline}
								<span className="block text-[#4b49ac]">
									{profile?.subHeadline}
								</span>
							</motion.h1>

							<motion.p
								variants={item}
								className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed"
							>
								{profile?.description}
							</motion.p>

							<motion.div
								variants={item}
								className="mt-12 flex flex-col sm:flex-row gap-4"
							>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => smoothScrollTo("projects")}
									className="px-8 flex items-center gap-2 py-4 rounded-xl bg-[#4b49ac] hover:bg-[#4b49ac]/80 text-white font-semibold text-lg transition-colors"
								>
									<FaRocket /> View My Work
								</motion.button>

								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => smoothScrollTo("contact")}
									className="px-8 flex items-center justify-center gap-2 py-4 rounded-xl border border-white/20 hover:bg-neutral-800 text-white font-semibold text-lg transition-colors"
								>
									<FaMailBulk /> Let's Work Together
								</motion.button>
							</motion.div>
						</motion.div>

						{/* RIGHT */}
						<motion.div
							className="flex justify-center"
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<motion.img
								src={profile?.image}
								alt="Hero Image"
								className="w-[30rem]"
								animate={{
									y: [0, -20, 0],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* WAVE */}
			<div className="bg-neutral-950">
				<motion.svg
					viewBox="0 0 1440 320"
					className="w-full h-52"
					preserveAspectRatio="none"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<path
						fill="#ffffff"
						d="M0,200 C300,260 900,80 1440,180 L1440,320 L0,320 Z"
					/>
				</motion.svg>
			</div>
		</>
	);
}
