import { useContext } from "react";
import ModelLink from "../components/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Location } from "../components/setlocation";
import { Card } from "../components/setcardnumber";
import { motion } from "framer-motion";

const Payment = () => {
	const { itemsNumber, isCardFilled, isLocationFilled } = useContext(ModelLink);

	return (
		<main>
			<section className="mt-3 md:mt-5">
				<Link to="/" className="border-[1px] border-black hover:bg-black hover:text-white px-2 py-1 ml-5 md:ml-10 lg:ml-20 text-xs md:text-sm font-semibold rounded-none-0">
					<FontAwesomeIcon icon={faChevronLeft} /> Shop
				</Link>
			</section>
			<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
				{itemsNumber > 0 ? (
					<section>
						<ToastContainer autoClose={3000} icon={false} hideProgressBar={true} />

						<Location />
						<Card />
						{isCardFilled && isLocationFilled ? (
							<Link to="/congratulations">
								<p className="mx-5 border-[1px] py-2 border-black md:w-[400px] md:mx-auto text-center rounded-none-0 mt-10 hover:bg-black hover:text-white font-semibold transition-all duration-500 ease-in-out">
									Confirm Payment
									<FontAwesomeIcon icon={faReceipt} className="pl-3" />
								</p>
							</Link>
						) : null}
					</section>
				) : (
					<div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
						<h1 className="text-center font-medium text-2xl mb-3">No Items In Cart To Pay For</h1>
						<Link to="/" className="grid justify-center">
							<button className="border-[1px] border-black font-semibold px-5 py-2 rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
								<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
								Continue Shopping
							</button>
						</Link>
					</div>
				)}
			</motion.section>
		</main>
	);
};

export default Payment;
