import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import navItems from '../utilites/navFun';

const NavBar = ({ children }) => {
	return (
		<>
			<div className="min-h-screen bg-black text-white">
				<div className="navbar bg-black sticky top-0">
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
								{navItems()}
							</ul>
						</div>
						<Link to={'/'}>
							<img
								src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1024%2F1*N7UqfIryUo3niVovCWvHjA.png&tbnid=PPGfRYOJZ2tGVM&vet=12ahUKEwit68iz9b6DAxW0TGwGHQB3CpEQMygBegQIARBR..i&imgrefurl=https%3A%2F%2Fmedium.com%2F%40sergeychikin%2Fsshub-ssh-key-storage-and-sharing-4b4bb3931cfb&docid=0LuSO_gYLmKV-M&w=1024&h=309&q=sshub&ved=2ahUKEwit68iz9b6DAxW0TGwGHQB3CpEQMygBegQIARBR"
								className="h-14"
							/>
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							{navItems()}
						</ul>
					</div>
					<div className="navbar-end">
						<Link to="/Authentication">
							<button className="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800">
								Sign Up
							</button>
						</Link>
						<Link to="/Authentication">
							<button className="px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700">
								Sign In
							</button>
						</Link>
					</div>
				</div>
				{children}
				<Footer />
			</div>
		</>
	);
};

export default NavBar;
