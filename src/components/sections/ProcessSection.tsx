import { process } from "@/data/process";

export function ProcessSection() {
	return (
		<section id="process" className="relative py-24 md:py-32 bg-gray-50">
			<div className="max-w-6xl mx-auto px-6 md:px-12">
				{/* Heading */}
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
						{process?.title}
					</h2>
					<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
						{process?.description}
					</p>
				</div>

				{/* Steps */}
				<div className="grid md:grid-cols-5 gap-10">
					{process?.items?.map((step, index) => (
						<div key={index} className="space-y-4">
							<div className="text-5xl font-bold text-[#4b49ac]/20">
								{String(index + 1).padStart(2, "0")}
							</div>

							<h3 className="text-xl font-semibold text-gray-900">
								{step?.title}
							</h3>

							<p className="text-gray-600 leading-relaxed">
								{step?.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
