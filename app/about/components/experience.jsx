import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,

						type: "spring",
					}}>
					Professional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
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
				<section className="grid gap-8 md:gap-12">
					<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
						{children}
					</div>
				</section>
			</motion.div>
		</div>
	);
}

export default function Experience() {
	return (
		<>
			<Title/>
			<Wrapper>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2023 - Present</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Lovely Professional University
						</h3>
						<h4 className=" font-light text-md mb-4">
							Student
						</h4>
						<p className="text-justify">
						I am currently pursuing my studies at Lovely Professional University, 
						where I have been growing both technically and personally. During my time here, 
						I have worked on real-world projects, especially in web development and API testing. 
						The university has a diverse and collaborative environment has helped me build strong 
						problem-solving skills and stay up-to-date with modern technologies. 
						I am passionate about learning and always eager to take on new challenges.
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Web Development
							</div>
							{/* <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Next.js
							</div> */}
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Data Structures
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								API Testing
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">October 2024 - November 2024</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							ShadowFox
						</h3>
						<h4 className=" font-light text-md mb-4">
							Web Development Intern
						</h4>
						<p className="text-justify">
						During my internship at Shadowfox, I worked on crafting and fine-tuning chatbot prompts using 
						prompt engineering and reinforcement learning with human feedback (RLHF). 
						My focus was on improving the quality and relevance of AI responses in both English and Indonesian. 
						This experience helped me understand how thoughtful prompt design can lead to more natural 
						and accurate conversations between users and AI. It also strengthened my ability to work in a fast-paced, 
						innovative environment.
						</p>

						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								React JS
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								JavaScript
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Problem Solving
							</div>
						</div>
					</div>
				</div>
				{/* <div className="grid gap-4 relative">
					<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
					<div className="font-medium text-lg">2023 - Present</div>
					<div>
						<h3 className="font-semibold text-xl text-black">
							Self-Employed
						</h3>
						<h4 className=" font-light text-md mb-4">
							Web Developer | Freelance
						</h4>
						<p className="text-justify">
							Specialized in crafting innovative solutions using
							Laravel and Next.js, enhancing client satisfaction
							and project efficiency. Contributed expertise in
							both frontend and backend development during
							collaborative team projects, leading to successful
							project completions
						</p>
						<div className="flex flex-wrap gap-2 mt-4 text-sm">
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								React
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Next.js
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								Laravel
							</div>
							<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
								MySql
							</div>
						</div>
					</div>
				</div> */}
			</Wrapper>
		</>
	);
}
