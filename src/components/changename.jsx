import { useContext, useState } from "react";
import ModelLink from "./context";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nameChanged } from "./toasts";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export const NameChange = () => {
	const { info, setInfo } = useContext(ModelLink);
	const [newName, setNewName] = useState("");
	const formSchema = yup.object({
		name: yup.string().required("Name cannot be empty").min(3, "Name must have at least 3 characters"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const changeName = () => {
		setInfo({ ...info, name: newName });
		nameChanged(newName);
	};
	return (
		<div className="mx-5 rounded-none-0 md:mx-auto md:w-[400px] py-5">
			<ToastContainer autoClose={3000} icon={false} hideProgressBar={true} />
			<form className="grid gap-3" onSubmit={handleSubmit(changeName)}>
				<div className="flex items-center border-b-[1px] border-black py-1 gap-2">
					<FontAwesomeIcon icon={faUserCircle} className="w-5 h-5" />
					<h1 className="text-xl font-semibold ">Change name</h1>
				</div>
				<div className="grid grid-flow-row gap-1">
					<label htmlFor="name" className="text-sm font-semibold">
						Enter your name
					</label>
					<input type="text" className="px-3 py-2 rounded-none-0 border-[1px] border-black" id="name" {...register("name")} onChange={(e) => setNewName(e.target.value)} />
					{errors.name ? <p className="text-red-600 font-semibold text-xs">{errors.name.message}</p> : null}
				</div>
				<button className="py-2 border-[1px] border-black hover:bg-black hover:text-white transition-all duration-500 ease-in-out text-center">Change your name</button>
			</form>
		</div>
	);
};
