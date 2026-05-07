import { philosophy } from "@/data/philosophy";

export function PersonalPhilosophySection() {
	return (
		<section id="philosophy" className="relative py-32 md:py-40 bg-[#0f0f1a]">
			<div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
				<p className="text-3xl md:text-5xl font-bold text-white leading-tight">
					{philosophy?.title}
				</p>

				<p className="mt-8 text-xl md:text-2xl text-gray-400 leading-relaxed">
					{philosophy?.description}
				</p>
			</div>
		</section>
	);
}
