import ModelLink from "../components/context";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
	const { items, costs, setCosts, total, setTotal, itemsNumber } = useContext(ModelLink);

	useEffect(() => {
		const prices = items.map((item) => item.price);
		setCosts(prices);
	}, [items]);
	useEffect(() => {
		const totalCost = costs.reduce((a, b) => a + b, 0);
		setTotal(totalCost.toFixed(2));
	}, [costs]);

	return (
		<main>
			<section className="mt-3 md:mt-5">
				{itemsNumber > 0 ? (
					<Link to="/cart" className="border-[1px] border-black hover:bg-black hover:text-white px-2 py-1 ml-5 md:ml-10 lg:ml-20 text-xs md:text-sm font-semibold rounded-none-0">
						<FontAwesomeIcon icon={faChevronLeft} /> Cart
					</Link>
				) : null}
				<motion.section className="mt-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
					<div className="flex items-center justify-between mx-5 md:mx-auto border-b-[1px] border-black md:w-[400px]">
						<h1 className="text-xl font-semibold">
							<FontAwesomeIcon icon={faBox} className="pr-2" />
							Checkout Item(s) : {itemsNumber}
						</h1>
						<h1 className="text-xl font-semibold">Price</h1>
					</div>
					{itemsNumber > 0 ? (
						<section>
							<div className="flex items-center justify-between mx-5 md:mx-auto md:w-[400px] py-3">
								<div className="grid gap-1">
									{items.map((item, index) => {
										return <p key={index}>{item.name}</p>;
									})}
								</div>
								<div className="grid gap-1">
									{items.map((item, index) => {
										return <p key={index}>$ {item.price}</p>;
									})}
								</div>
							</div>
							<div className="border-t-[1px] border-black md:w-[400px] md:mx-auto flex items-center justify-between mx-5 pt-2">
								<h1 className="text-xl font-semibold">Total:</h1>
								<h1 className="text-xl font-semibold">$ {total}</h1>
							</div>
							<Link to="/payment">
								<p className="mx-5 border-[1px] py-2 border-black md:w-[400px] md:mx-auto text-center rounded-none-0 mt-10 hover:bg-black hover:text-white font-semibold transition-all duration-500 ease-in-out">
									Proceed to payment
									<FontAwesomeIcon icon={faArrowRight} className="pl-3" />
								</p>
							</Link>
						</section>
					) : (
						<div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
							<h1 className="text-center font-medium text-2xl mb-3">No Items In Cart To Checkout</h1>
							<Link to="/" className="grid justify-center">
								<button className="border-[1px] border-black font-semibold px-5 py-2 rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
									<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
									Continue Shopping
								</button>
							</Link>
						</div>
					)}
				</motion.section>
			</section>
		</main>
	);
};

export default Checkout;
