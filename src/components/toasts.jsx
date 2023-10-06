import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faCheckCircle, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const notifysuccess = (name) =>
	toast.success(
		<div className="flex items-center gap-5 justify-center">
			<FontAwesomeIcon icon={faCheckCircle} className="text-green-600 w-7 h-7" />
			<h1 className="font-semibold text-green-600">{name} has been added to cart successfully</h1>
		</div>
	);
export const notifyduplicate = (name) =>
	toast.info(
		<div className="flex items-center gap-5 justify-center">
			<FontAwesomeIcon icon={faExclamationCircle} className="text-blue-600 w-7 h-7" />
			<h1 className="font-semibold text-blue-600">{name} is already in your cart</h1>
		</div>
	);
export const notifyremoved = (name) =>
	toast.info(
		<div className="flex items-center gap-5 justify-center">
			<FontAwesomeIcon icon={faXmarkCircle} className="text-blue-600 w-7 h-7" />
			<h1 className="font-semibold text-blue-600">{name} has been removed from cart</h1>
		</div>
	);

export const favoritesuccess = (name) =>
	toast(
		<div className="flex items-center gap-5 justify-center">
			<FontAwesomeIcon icon={faHeart} className="text-red-600 w-7 h-7" />
			<h1 className="font-semibold text-red-600">{name} has been added to favorites</h1>
		</div>
	);
export const favoriteremoved = (name) =>
	toast.info(
		<div className="flex items-center gap-5 justify-center">
			<FontAwesomeIcon icon={faHeartCrack} className="text-blue-600 w-7 h-7" />
			<h1 className="font-semibold text-blue-600">{name} has been removed from favorites</h1>
		</div>
	);

export const nameChanged = (name) =>
	toast.info(
		<div className="flex items-center gap-5 justify-center">
			<FontAwesomeIcon icon={faUserCircle} className="text-green-600 w-7 h-7" />
			<h1 className="font-semibold text-green-600">Your name has been changed to {name}</h1>
		</div>
	);

export const emailChanged = (email) =>
	toast.info(
		<div className="flex items-center gap-5 justify-center">
			<FontAwesomeIcon icon={faAt} className="text-green-600 w-7 h-7" />
			<h1 className="font-semibold text-green-600">Your email has been changed to {email}</h1>
		</div>
	);

export const locationset = (location) =>
	toast.info(
		<div>
			<div className="flex items-center gap-5 justify-center">
				<FontAwesomeIcon icon={faLocationDot} className="text-green-600 w-7 h-7" />
				<h1 className="font-semibold text-green-600">Your delivery location is {location}</h1>
			</div>
		</div>
	);

export const locationreset = () =>
	toast.info(
		<div>
			<div className="flex items-center gap-5 justify-center">
				{/* <FontAwesomeIcon icon={faLocation} /> */}
				<FontAwesomeIcon icon={faLocationDot} className="text-red-600 w-7 h-7" />
				<h1 className="font-semibold text-red-600">Your delivery location is has been reset</h1>
			</div>
		</div>
	);

export const cardset = (card) =>
	toast.info(
		<div>
			<div className="flex items-center gap-5 justify-center">
				<FontAwesomeIcon icon={faCreditCard} className="text-green-600 w-7 h-7" />
				<h1 className="font-semibold text-green-600">Your card is {card}</h1>
			</div>
		</div>
	);

export const cardreset = () =>
	toast.info(
		<div>
			<div className="flex items-center gap-5 justify-center">
				<FontAwesomeIcon icon={faCreditCard} className="text-red-600 w-7 h-7" />
				<h1 className="font-semibold text-red-600">Your card number has been reset</h1>
			</div>
		</div>
	);

// export const paymentsuccess = () =>
// 	toast.info(
// 		<div>
// 			<div className="flex items-center gap-5 justify-center">
// 				<FontAwesomeIcon icon={faMoneyBill1} className="text-green-600 w-7 h-7" />
// 				<h1 className="font-semibold text-green-600">Your payment has been successful</h1>
// 			</div>
// 		</div>
// 	);
