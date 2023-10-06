import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import SCENE from "../assets/environment/scene.hdr";
import "@google/model-viewer";
import { useContext } from "react";
import ModelLink from "../components/context";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
	const { link, poster, details, name, price, material, addToCart, addToFavorites, favorite, removeFromFavorites } = useContext(ModelLink);
	return (
		<main>
			<section className="mt-3 md:mt-5">
				<Link to="/" className="border-[1px] border-black hover:bg-black hover:text-white px-2 py-1 ml-5 md:ml-10 lg:ml-20 text-xs md:text-sm font-semibold rounded-none-0">
					<FontAwesomeIcon icon={faChevronLeft} /> Shop
				</Link>
			</section>

			{name !== undefined ? (
				<motion.section className="grid md:flex justify-between md:mx-10 mt-5 gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
					<model-viewer
						poster={poster}
						src={link}
						loading="eager"
						camera-controls
						disable-tap
						disable-pan
						auto-rotate
						rotation-per-second="90deg"
						environment-image={SCENE}
						shadow-intensity="1.5"
						shadow-softness="1"
						exposure="1.52"
						camera-orbit="0deg 90deg 8m"
						// field-of-view="23.17deg"
						min-camera-orbit="auto 50deg auto"
						disable-dragging="true"
						max-camera-orbit="auto 90deg auto"
						min-field-of-view="30deg"
						className="bg-blue-800"></model-viewer>

					<section className="md:w-[45vw] mx-5 md:mr-10 md:border-[1px] border-black border-opacity-10 md:p-5 mt-2 md:mt-0 rounded-none-0">
						<section className="flex justify-between items-center md:items-baseline mb-2">
							<h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">{name + " Model"}</h1>
							{favorite.some((favItem) => favItem.name === name && favItem.isFavorite) ? (
								<div>
									<FontAwesomeIcon icon={faHeart} className="cursor-pointer w-7 h-7 text-red-700" onClick={() => removeFromFavorites(name)} />
								</div>
							) : (
								<div>
									<FontAwesomeIcon icon={faHeartOutline} className="cursor-pointer w-7 h-7" onClick={() => addToFavorites(name, poster, price)} />
								</div>
							)}
						</section>
						<p className="text-justify">{details}</p>
						<p className="font-bold text-sm mt-5">Material: {material}</p>
						<ToastContainer autoClose={3000} icon={false} hideProgressBar={true} />
						<section className="mt-5 flex items-center gap-5">
							<button
								className="flex items-center gap-5 border-[1px] border-black w-full justify-center md:w-2/4 py-2 rounded-none-0 transition-all duration-500 ease-in-out hover:text-white hover:bg-black"
								onClick={() => {
									addToCart(name, poster, price);
								}}>
								<p className="font-semibold">Add to cart</p>
								<FontAwesomeIcon icon={faCartPlus} />
							</button>
							<p className="text-3xl font-bold">${price}</p>
						</section>
					</section>
				</motion.section>
			) : (
				<motion.section className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
					<h1 className="text-center font-medium text-2xl mb-3">Page has been refreshed. Model cannot be found</h1>
					<Link to="/" className="grid justify-center">
						<button className="border-[1px] border-black font-semibold text-lg px-5 py-2 rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
							<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
							Back to shop
						</button>
					</Link>
				</motion.section>
			)}
		</main>
	);
};

export default Product;
