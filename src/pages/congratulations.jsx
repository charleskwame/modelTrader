import { useContext } from "react";
import ModelLink from "../components/context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Congratulations = () => {
	const { items, itemsNumber, total, cardNumber, location, info, setItems, setItemsNumber } = useContext(ModelLink);
	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
			{itemsNumber > 0 ? (
				<section className="mt-3 md:mt-5">
					<h1 className="mx-5 md:mx-auto border-b-[1px] pb-1 border-black md:w-[400px] text-xl font-semibold">
						<FontAwesomeIcon icon={faReceipt} className="pr-2" />
						Summary for {itemsNumber} item(s)
					</h1>
					<div className="flex items-center justify-between mx-5 md:mx-auto border-b-[1px] border-black md:w-[400px] py-2">
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
					<div className="flex items-center justify-between mx-5 md:mx-auto border-b-[1px] py-2 border-black md:w-[400px]">
						<p>Email</p>
						<p>{info.email}</p>
					</div>
					<div className="flex items-center justify-between mx-5 md:mx-auto border-b-[1px] py-2 border-black md:w-[400px]">
						<p>Total </p>
						<p className="font-bold">$ {total}</p>
					</div>
					<div className="flex items-center justify-between mx-5 md:mx-auto border-b-[1px] py-2 border-black md:w-[400px]">
						<p>Payment method </p>
						<p>Card</p>
					</div>
					<div className="flex items-center justify-between mx-5 md:mx-auto border-b-[1px] py-2 border-black md:w-[400px]">
						<p>Card Number </p>
						<p className="font-bold">{cardNumber}</p>
					</div>
					<div className="flex items-center justify-between mx-5 md:mx-auto border-b-[1px] py-2 border-black md:w-[400px]">
						<p>Delivery Location</p>
						<p className="font-bold uppercase">{location}</p>
					</div>

					<section className="flex items-center gap-2 justify-center mx-5 md:mx-auto md:w-[400px] mt-5 ">
						<FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-10 h-10" />
						<h1 className="font-semibold text-lg">
							Thank You For Shopping With Us <span className="font-bold text-xl">{info.name}</span>
						</h1>
					</section>
					<Link
						to="/"
						className="grid justify-center"
						onClick={() => {
							setItems([]), setItemsNumber(0);
						}}>
						<button className="border-[1px] border-black font-semibold mt-5 px-5 py-2 rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
							<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
							Back to shop
						</button>
					</Link>
				</section>
			) : (
				<div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
					<h1 className="text-center font-medium text-2xl mb-3">No Items Have Been Purchased</h1>
					<Link to="/" className="grid justify-center">
						<button className="border-[1px] border-black font-semibold px-5 py-2 rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out">
							<FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
							Continue Shopping
						</button>
					</Link>
				</div>
			)}
		</motion.main>
	);
};

export default Congratulations;
