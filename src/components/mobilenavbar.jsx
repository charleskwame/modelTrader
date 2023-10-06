import Logo from "../assets/MTLogo.svg";
import Cart from "../assets/cart-4-svgrepo-com.svg";
import Settings from "../assets/settings.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ModelLink from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const MobileNav = () => {
	const { itemsNumber } = useContext(ModelLink);

	const { favCounter } = useContext(ModelLink);

	return (
		<nav className="">
			<div className="flex items-center justify-between mx-5 mt-5">
				<Link to="/">
					<div className="flex items-center border-[1px] border-black rounded-none-0">
						<img src={Logo} alt="" className="sm:w-5 sm:h-5 md:w-10 md:h-10 rounded-none-s-md" />
						<h3 className="text-[16px] lg:text-2xl font-bold px-5">Model Trader</h3>
					</div>
				</Link>

				<div className="flex items-center gap-2">
					<Link to="/cart" className="font-semibold flex items-center lg:text-xl gap-1 md:text-base hover:underline-offset-8 hover:decoration-black hover:underline">
						<div className="relative">
							<img src={Cart} alt="cart icon" className="w-8 h-8" />
							{itemsNumber === 0 ? null : <span className="absolute right-0 bottom-0 bg-red-600 animate-[ping_1s_ease-in-out_1] font-extrabold rounded-full text-xs text-white text-center w-4 h-4">{itemsNumber}</span>}
						</div>
					</Link>
					<Link to="/favorites" className="font-semibold flex items-center lg:text-xl md:text-base hover:underline-offset-8 hover:decoration-black hover:underline relative">
						<FontAwesomeIcon icon={faHeart} className="w-7 h-7" />
						{favCounter === 0 ? null : <span className="absolute bottom-0 right-0 bg-red-600 rounded-full text-xs animate-[ping_1s_ease-in-out_1] font-extrabold text-white w-4 h-4 text-center">{favCounter}</span>}
					</Link>

					<Link to="/accountsettings">
						<img src={Settings} alt="settings icon" className="w-8 h-8" />
					</Link>
				</div>
			</div>
		</nav>
	);
};
