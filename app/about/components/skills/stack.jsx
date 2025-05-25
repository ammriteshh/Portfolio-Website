import { motion } from "framer-motion";

export default function Stack() {
  return (
		<motion.div
			className="flex justify-center items-center flex-col mb-5 "
			initial={{
				opacity: 0,
				x: -200,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				delay: 0.5,

				type: "spring",
			}}>
			<h2 className="text-2xl md:text-xl font-bold mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
				Language & Framework
			</h2>
			<p className="text-gray-500 text-center tracking-widest md:px-5">
				<span className="text-black font-medium">HTML</span> |{" "}
				<span className="text-black font-medium">CSS</span> |{" "}
				<span className="text-black font-medium">Javascript</span> |{" "}
				<span className="text-black font-medium">Typescript</span> |{" "}
				<span className="text-black font-medium">React</span> |{" "}
				<span className="text-black font-medium">NextJS</span> |{" "}
				<span className="text-black font-medium">TailwindCSS</span> |{" "}
				<span className="text-black font-medium">Bootstrap</span> |{" "}
				<span className="text-black font-medium">C</span> |{" "}
				<span className="text-black font-medium">C++</span> |{" "}
				<span className="text-black font-medium">Java</span> |{" "}
				<span className="text-black font-medium">Selenium WebDriver</span> |{" "}
				<span className="text-black font-medium">REST-assured</span> |{" "}
				<span className="text-black font-medium">JUnit</span> |{" "}
				<span className="text-black font-medium">PHP</span> |{" "}
				<span className="text-black font-medium">Laravel</span> |{" "}
				<span className="text-black font-medium">Python</span>
			</p>
		</motion.div>
  );
}