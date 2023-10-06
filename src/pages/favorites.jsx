import { useContext } from "react";
import ModelLink from "../components/context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import NOFAVORITE from "../assets/heartoff.svg";

const Favorites = () => {
	const { favorite, removeFromFavorites } = useContext(ModelLink);

	return (
		<main>
			<ToastContainer autoClose={3000} icon={false} hideProgressBar={true} />

			{favorite.length > 0 ? (
				<section className="mt-3 md:mt-5">
					<Link to="/" className="border-[1px] border-black hover:bg-black hover:text-white px-2 py-1 ml-5 md:ml-10 lg:ml-20 text-xs md:text-sm font-semibold rounded-none-0">
						<FontAwesomeIcon icon={faChevronLeft} /> Shop
					</Link>
				</section>
			) : null}
			<motion.section className="mt-3 md:mt-5 md:justify-center grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
				<section className="md:w-[400px] mx-5 border-b-[1px] border-black pb-1 font-semibold text-xl">
					<h1>
						<FontAwesomeIcon icon={faHeart} className="mr-2" />
						Favorites
					</h1>
				</section>

				{favorite.length > 0 ? (
					favorite.map((favoriteItem, index) => {
						return (
							<section key={index}>
								<section className="flex border-[1px] border-black mx-5 md:w-[400px] rounded-none-0 my-2 shadow-md relative">
									<img src={favoriteItem.poster} alt={favoriteItem.name + " model"} className="w-20 h-20 border-r-[1px] border-black rounded-none-l-md" />
									<div className="pl-3 pt-1">
										<h1 className="font-bold md:text-lg">{favoriteItem.name}</h1>
										<p>${favoriteItem.price}</p>
									</div>
									<button className="px-3 py-1 bg-white text-red-600 font-semibold rounded-none-0 absolute bottom-1 right-1 hover:bg-red-600 border-[1px] border-red-600 hover:text-white transition-all duration-500 ease-in-out" onClick={() => removeFromFavorites(favoriteItem.name)}>
										Remove <FontAwesomeIcon icon={faTrash} className="pl-1" />
									</button>
								</section>
							</section>
						);
					})
				) : (
					<div className="grid gap-5 mt-10">
						<img src={NOFAVORITE} alt="" className="w-28 h-28 mx-auto" />
						<div>
							<h1 className="text-center font-medium text-2xl mb-3">No Favorites</h1>
							<Link to="/" className="grid justify-center">
								<button className="border-[1px] border-black font-semibold px-5 py-2 rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
									<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
									Continue Shopping
								</button>
							</Link>
						</div>
					</div>
				)}
			</motion.section>
		</main>
	);
};

export default Favorites;
