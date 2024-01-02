import React from 'react';
import Button from '../componetnts/Button';

const BlogPage = () => {
	return (
		<section className="dark:bg-black dark:text-white">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
					From the blog
				</h1>
				<p className="text-blue-500">
					<Button />
				</p>

				<div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
					<div className="lg:flex bg-amber-100 p-1">
						<img
							className="object-cover w-full h-56 rounded-lg lg:w-64"
							src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>

						<div className="flex flex-col justify-between py-6 lg:mx-6">
							<a
								href="#"
								className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
								How to use sticky note for problem solving
							</a>

							<span className="text-sm text-gray-500 dark:text-gray-300">
								On: 20 October 2023
							</span>
						</div>
					</div>

					<div className="lg:flex bg-amber-100 p-1">
						<img
							className="object-cover w-full h-56 rounded-lg lg:w-64"
							src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>

						<div className="flex flex-col justify-between py-6 lg:mx-6">
							<a
								href="#"
								className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
								How to use sticky note for solving problems
							</a>

							<span className="text-sm text-gray-500 dark:text-gray-300">
								On: 20 October 2013
							</span>
						</div>
					</div>

					<div className="lg:flex bg-amber-100 p-1">
						<img
							className="object-cover w-full h-56 rounded-lg lg:w-64"
							src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>

						<div className="flex flex-col justify-between py-6 lg:mx-6">
							<a
								href="#"
								className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
								Morning routine to boost your mood
							</a>

							<span className="text-sm text-gray-500 dark:text-gray-300">
								On: 25 November 2023
							</span>
						</div>
					</div>

					<div className="lg:flex bg-amber-100 p-1">
						<img
							className="object-cover w-full h-56 rounded-lg lg:w-64"
							src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
							alt=""
						/>

						<div className="flex flex-col justify-between py-6 lg:mx-6">
							<a
								href="#"
								className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
								All the features you want to know
							</a>

							<span className="text-sm text-gray-500 dark:text-gray-300">
								On: 30 September 2023
							</span>
						</div>
					</div>

					<div className="lg:flex bg-amber-100 p-1">
						<img
							className="object-cover w-full h-56 rounded-lg lg:w-64"
							src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
							alt=""
						/>

						<div className="flex flex-col justify-between py-6 lg:mx-6">
							<a
								href="#"
								className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
								Minimal workspace for your inspirations
							</a>

							<span className="text-sm text-gray-500 dark:text-gray-300">
								On: 13 October 2013
							</span>
						</div>
					</div>

					<div className="lg:flex bg-amber-100 p-1">
						<img
							className="object-cover w-full h-56 rounded-lg lg:w-64"
							src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>

						<div className="flex flex-col justify-between py-6 lg:mx-6">
							<a
								href="#"
								className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
								Do you want to know about Blockchain
							</a>

							<span className="text-sm text-gray-500 dark:text-gray-300">
								On: 20 October 2013
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogPage;