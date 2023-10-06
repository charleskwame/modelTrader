import { EmailChange } from "../components/changeemail";
import { NameChange } from "../components/changename";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AccountSettings = () => {
	return (
		<main>
			<section className="mt-3 md:mt-5">
				<Link to="/" className="border-[1px] border-black hover:bg-black hover:text-white px-2 py-1 ml-5 md:ml-10 lg:ml-20 text-xs md:text-sm font-semibold rounded-none-0">
					<FontAwesomeIcon icon={faChevronLeft} /> Shop
				</Link>
			</section>
			<NameChange />
			<EmailChange />
		</main>
	);
};

export default AccountSettings;
