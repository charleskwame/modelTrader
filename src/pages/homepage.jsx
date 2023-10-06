import Logo from "../assets/MTLogo.svg";
import HeroImage from "../assets/heroimg.png";
import { useMediaQuery } from "@react-hook/media-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModelLink from "../components/context";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState, useContext, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Home = () => {
	const { info, setInfo } = useContext(ModelLink);
	const isMobile = useMediaQuery("(max-width: 640px)");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const formSchema = yup.object({
		name: yup.string().required("Name cannot be empty").min(3, "Name must have at least 3 characters"),
		email: yup.string().email("Email is not valid").required("Email is required"),
	});

	const {
		register,
		handleSubmit,
		trigger,
		watch,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const setDetails = (data) => {
		console.log(data);
		closeModal();
	};

	// useEffect(() => {
	// 	console.log(info);
	// }, [info]);
	// const handleInputChange = (fieldName) => {
	// 	trigger(fieldName);
	// };
	return (
		<>
			<main className="mt-10 md:flex items-center justify-between mx-5 md:mx-10 lg:mx-20 gap-5">
				<motion.section className="md:max-w-lg grid gap-2 md:gap-5 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
					<h1 className="font-semibold text-2xl md:text-3xl lg:text-6xl text-center md:text-left">
						Welcome to Model Trader <sup className="text-xs md:text-[15px] lg:text-3xl">TM</sup>
					</h1>

					<p className="font-medium text-lg md:text-xl lg:text-2xl text-center md:text-left">Your one stop shop for all things model cars. All car models are inspired by real world vehicles.</p>

					<motion.button className="block w-2/4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} onClick={() => openModal()}>
						<Link className="font-semibold border-[1px] rounded-none-0 border-black  hover:bg-black hover:text-white hover:font-semibold transition-all duration-500 ease-in-out px-3 py-1 lg:px-4 lg:py-3 mx-auto md:mx-0 hidden md:block">
							Get Started <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
						</Link>
					</motion.button>
				</motion.section>

				<section>
					<motion.div className="border-[1px] border-black border-opacity-5 rounded-none-0 p-5 shadow-md mt-5 md:mt-0" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2, duration: 1 }}>
						<LazyLoadImage effect="blur" src={HeroImage} alt="hero image of three model cars" />
						{isMobile && (
							<motion.button className="font-semibold border-[1px] rounded-none-0 border-black  hover:bg-black hover:text-white hover:font-semibold transition-all duration-500 ease-in-out px-3 py-2 mx-auto block mt-5 w-full" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.4, duration: 1 }} onClick={() => openModal()}>
								<Link>
									Get Started <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
								</Link>
							</motion.button>
						)}
					</motion.div>
				</section>
				<Modal ariaHideApp={false} isOpen={isModalOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={false} className={` fixed inset-0 flex items-center justify-center`}>
					<div className="mx-5 w-full rounded-none-0 md:mx-auto md:w-[400px] bg-white border-[1px] border-black px-5 py-5">
						<form className="grid gap-3" onSubmit={handleSubmit(setDetails)}>
							<div className="flex items-center border-b-[1px] border-black py-1 gap-2">
								<img src={Logo} alt="" />
								<h1 className="text-xl font-semibold ">Create an account</h1>
							</div>
							<div className="grid grid-flow-row gap-1">
								<label htmlFor="name" className="text-sm font-semibold">
									Enter your name
								</label>
								<input type="text" className="px-3 py-2 rounded-none-0 border-[1px] border-black" id="name" {...register("name")} />
								{errors.name ? <p className="text-red-600 font-semibold text-xs">{errors.name.message}</p> : null}
							</div>
							<div className="grid grid-flow-row gap-1">
								<label htmlFor="email" className="text-sm font-semibold">
									Enter your email
								</label>
								<input type="email" id="email" className="px-3 py-2 rounded-none-0 border-[1px] border-black" {...register("email")} />
								{errors.email ? <p className="text-red-600 font-semibold text-xs">{errors.email.message}</p> : null}
							</div>
							{/* {isValid ? (
								<Link to="/" className="py-2 border-[1px] border-black rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out mt-5 text-center">
									<button type="submit">Submit</button>
								</Link>
							) : (
							)} */}
							<button className="py-2 border-[1px] border-black rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out mt-5 text-center">Submit</button>
						</form>
					</div>
				</Modal>
			</main>
			<footer className="absolute bottom-0 flex items-center gap-2">
				<div className="flex items-center justify-center w-fit  ml-5 md:ml-10 lg:ml-20 mb-5 border-black border-[1px] rounded-none-0">
					<img src={Logo} alt="" className="rounded-none-s-md" />
					<h3 className="px-2 text-xs md:text-sm font-semibold">Model Trader</h3>
				</div>
				<p className="text-xs md:text-sm font-semibold">&copy;2023</p>
			</footer>
		</>
	);
};

export default Home;
