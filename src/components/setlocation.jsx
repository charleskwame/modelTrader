import ModelLink from "./context";
import { useContext } from "react";
import { locationset, locationreset } from "./toasts";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Location = () => {
	const { setLocation, setIsLocationFilled } = useContext(ModelLink);

	// setting location
	function formValidator(data) {
		setLocation(data.location);
		locationset(data.location);
		setIsLocationFilled(true);
	}

	// location reset
	function locationReset() {
		reset({ location: "" });
		setIsLocationFilled(false);
		locationreset();
	}

	const schema = yup.object({
		location: yup.string().required("Location cannot be empty").min(4, "Location must be at least 4 characters"),
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
		<section className="mx-5 md:w-[400px] md:mx-auto mt-5">
			{/* <ToastContainer autoClose={3000} icon={false} hideProgressBar={true} /> */}
			<form onSubmit={handleSubmit(formValidator)}>
				<div className="flex items-center gap-2 border-b-[1px] pb-1 border-black">
					<FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
					<label className="font-semibold" htmlFor="location input field">
						Enter Delivery Location
					</label>
				</div>
				<input type="text" className="border-[1px] border-black w-full h-10 px-3 py-3 rounded-none-0 mt-4" id="location input field" placeholder="Address - City, Region/State" {...register("location")} />
				{errors.location ? <p className="font-semibold text-red-600 text-xs md:text-sm mt-1">{errors.location.message}</p> : null}
				<div className="flex items-center gap-2">
					<button className="border-[1px] border-black mx-auto block w-full mt-3 rounded-none-0 py-2 text-sm font-semibold hover:bg-black hover:text-white transition-all duration-500">Confirm Location</button>
					<button
						className="border-[1px] border-black mx-auto block w-full mt-3 rounded-none-0 basis-2/4 py-2 px-2 text-sm font-semibold transition-all duration-500 hover:border-red-500 hover:text-white hover:bg-red-500"
						onClick={() => {
							locationReset();
						}}>
						Reset
					</button>
				</div>
			</form>
		</section>
	);
};
