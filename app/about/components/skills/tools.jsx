import { motion } from "framer-motion";

export default function Tools() {
	return (
		<motion.div
			className="flex justify-start items-center flex-col mb-5 "
			initial={{
				opacity: 0,
				x: 200,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				delay: 0.6,

				type: "spring",
			}}>
			<h2 className="text-2xl md:text-xl font-bold mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase">
				Tools
			</h2>
			<p className="text-gray-500 text-center tracking-wider md:px-">
				<span className="text-black font-medium">Visual Studio Code</span> |{" "}
				<span className="text-black font-medium">Eclipse</span> |{" "}
				<span className="text-black font-medium">Jenkins</span> |{" "}
				<span className="text-black font-medium">Katalon Studio</span> |{" "}
				<span className="text-black font-medium">Postman</span> |{" "}
				<span className="text-black font-medium">SoapUI</span> |{" "}
				<span className="text-black font-medium">Apache JMeter</span> |{" "}
				<span className="text-black font-medium">Bugzilla</span> |{" "}
				<span className="text-black font-medium">Sauce Labs</span>{" "}
				|{" "}
				<span className="text-black font-medium">
					Git
				</span>{" "}
				|{" "}
				<span className="text-black font-medium">
					GitHub
				</span>{" "}
				{" "}
			</p>
		</motion.div>
	);
}
