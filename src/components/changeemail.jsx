import { useContext, useState } from "react";
import ModelLink from "./context";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import { emailChanged } from "./toasts";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EmailChange = () => {
	const { info, setInfo } = useContext(ModelLink);
	const [newEmail, setNewEmail] = useState("");
	const formSchema = yup.object({
		email: yup.string().email("Email is not valid").required("Email is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const changeEmail = () => {
		setInfo({ ...info, email: newEmail });
		emailChanged(newEmail);
	};
	return (
		<div className="mx-5 rounded-none-0 md:mx-auto md:w-[400px] py-5">
			<ToastContainer autoClose={3000} icon={false} hideProgressBar={true} />
			<form className="grid gap-3" onSubmit={handleSubmit(changeEmail)}>
				<div className="flex items-center border-b-[1px] border-black py-1 gap-2">
					<FontAwesomeIcon icon={faAt} className="w-5 h-5" />
					<h1 className="text-xl font-semibold ">Change E-mail</h1>
				</div>
				<div className="grid grid-flow-row gap-1">
					<label htmlFor="email" className="text-sm font-semibold">
						Enter your new email
					</label>
					<input type="text" className="px-3 py-2 rounded-none-0 border-[1px] border-black" id="email" {...register("email")} onChange={(e) => setNewEmail(e.target.value)} />
					{errors.email ? <p className="text-red-600 font-semibold text-xs">{errors.email.message}</p> : null}
				</div>
				<button className="py-2 border-[1px] border-black rounded-none-0 hover:bg-black hover:text-white transition-all duration-500 ease-in-out text-center">Change your email</button>
			</form>
		</div>
	);
};
