import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/MTLogo.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { data } from "../components/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { reduceTextMobile, reduceTextTablet } from "../components/data";
import { useContext, useState } from "react";
import Modal from "react-modal";
import ModelLink from "../components/context";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Shop = () => {
	const isMobile = useMediaQuery("(max-width: 640px)");
	const { setLink, setPoster, setDetails, setName, setPrice, setMaterial, setInfo, info } = useContext(ModelLink);
	const [isModalOpen, setIsModalOpen] = useState(true);

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

	const onSubmit = (data) => {
		setInfo(data);
		closeModal();
	};

	return (
		<main>
			<h1 className="ml-5 md:ml-10 lg:ml-20 mt-5 font-semibold text-xl border-b-[1px] border-black w-fit pb-1 ">Welcome {info.name}</h1>
			{info.length <= 0 ? (
				<Modal ariaHideApp={false} isOpen={isModalOpen} onRequestClose={closeModal} shouldCloseOnOverlayClick={false} className={` fixed inset-0 flex items-center justify-center`}>
					<div className="mx-5 w-full rounded-none-0 md:mx-auto md:w-[400px] bg-white border-[1px] border-black px-5 py-5">
						<form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
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
							<button className="py-2 border-[1px] border-black rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out mt-5 text-center">Submit</button>
						</form>
					</div>
				</Modal>
			) : null}
			<motion.section className="grid grid-cols-2 md:grid-cols-5 items-stretch md:mx-8 mx-4 lg:mx-[72px] place-items-center mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
				{data.map((item) => {
					return (
						<div key={item.name} className="border-[1px] md:border-0 border-black shadow-lg border-opacity-50 md:shadow-none hover:border-[1px] bg-white hover:border-opacity-10 hover:shadow-lg mt-3 md:mt-4 rounded-none-0 md:gap-0 w-[95%]">
							<Link
								to="/productpage"
								onClick={() => {
									setLink(item.model), setPoster(item.image), setDetails(item.description), setName(item.name), setPrice(item.price), setMaterial(item.material);
								}}>
								<div className="border-b-[1px] relative">
									<LazyLoadImage effect="blur" src={item.image} alt={item.name} key={item.name} />
								</div>
							</Link>

							<div className="pt-1 px-2">
								{isMobile ? (
									<div className="flex items-center justify-between">
										<Link
											to="/productpage"
											onClick={() => {
												setLink(item.model), setPoster(item.image), setDetails(item.description), setName(item.name), setPrice(item.price), setMaterial(item.material);
											}}>
											<h3 className="text-sm font-medium">{reduceTextMobile(item.name)}</h3>
										</Link>
									</div>
								) : (
									<div className="flex items-center justify-between">
										<Link
											to="/productpage"
											onClick={() => {
												setLink(item.model), setPoster(item.image), setDetails(item.description), setName(item.name), setPrice(item.price), setMaterial(item.material);
											}}>
											<h3 className="text-sm font-medium">{reduceTextTablet(item.name)}</h3>
										</Link>
									</div>
								)}
							</div>
							<div className="flex items-center justify-between pb-2 pt-1 px-2">
								<p className="font-bold opacity-50">${item.price}</p>
								<Link
									to="/productpage"
									onClick={() => {
										setLink(item.model), setPoster(item.image), setDetails(item.description), setName(item.name), setPrice(item.price), setMaterial(item.material);
									}}>
									<button className="border-[1px] border-black px-2 py-1 text-xs md:text-sm font-semibold hover:bg-black hover:text-white transition-all duration-500 ease-in-out rounded-none-0">
										Buy Now <FontAwesomeIcon icon={faShoppingCart} className="pl-1" />
									</button>
								</Link>
							</div>
						</div>
					);
				})}
			</motion.section>
		</main>
	);
};

export default Shop;
