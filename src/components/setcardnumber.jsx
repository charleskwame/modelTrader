import { cardset, cardreset } from "./toasts";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import ModelLink from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

export const Card = () => {
	const { setIsCardFilled, setCardNumber } = useContext(ModelLink);

	// setting location
	function formValidator(data) {
		setCardNumber(data.card);
		cardset(data.card);
		setIsCardFilled(true);
	}

	// card reset
	function cardNumberReset() {
		reset({ card: "" });
		setIsCardFilled(false);
		cardreset();
	}

	const schema = yup.object({
		card: yup.string("Must be a number").required("Card number cannot be empty").min(13, "Number length must not be less than 13").max(16, "Number length must not be more than 16"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<section className="mx-5 md:w-[400px] md:mx-auto mt-10">
			<form onSubmit={handleSubmit(formValidator)}>
				<div className="flex items-center gap-2 border-b-[1px] pb-1 border-black">
					<FontAwesomeIcon icon={faCreditCard} className="w-5 h-5" />
					<label className="font-semibold" htmlFor="card input field">
						Enter Card Number
					</label>
				</div>
				<input type="text" className="border-[1px] border-black w-full h-10 px-3 py-3 rounded-none-0 mt-4" id="card input field" placeholder="xxx-xxxx-xxxx-xxxx" {...register("card")} />
				{errors.card ? <p className="font-semibold text-red-600 text-xs md:text-sm mt-1">{errors.card.message}</p> : null}
				<div className="flex items-center gap-2">
					<button className="border-[1px] border-black mx-auto block w-full mt-3 rounded-none-0 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-500">Confirm Card Number</button>
					<button
						className="border-[1px] border-black mx-auto block w-full mt-3 rounded-none-0 basis-2/4 py-2 px-2 text-sm font-semibold transition-all duration-500 hover:border-red-500 hover:text-white hover:bg-red-500"
						onClick={() => {
							cardNumberReset();
						}}>
						Reset
					</button>
				</div>
			</form>
		</section>
	);
};
