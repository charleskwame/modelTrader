import Logo from "../assets/MTLogo.svg";
import Cart from "../assets/cart-4-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ModelLink from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Settings from "../assets/settings.svg";

export const TabletAndDesktopNav = () => {
	const { itemsNumber, favCounter } = useContext(ModelLink);
	return (
		<nav className="flex items-center justify-between md:mx-10 lg:mx-20 mt-5 md:mt-10">
			<Link to="/">
				<div className="flex items-center border-[1px] rounded-none-0 border-black">
					<img src={Logo} alt="" className="md:w-7 md:h-7 rounded-none-s-md" />
					<h3 className="text-lg font-bold px-3">Model Trader</h3>
				</div>
			</Link>

			{/* tablet and desktop menu */}
			<div className="hidden md:flex items-center gap-5">
				<Link to="/cart" className="font-semibold flex items-center gap-1 md:text-base hover:underline-offset-8 hover:decoration-black hover:underline relative">
					<img src={Cart} alt="cart icon" className="w-8 h-8" />
					{itemsNumber === 0 ? null : <span className=" bg-red-600 rounded-full text-xs w-5 text-center h-5 text-white font-extrabold absolute top-0 -right-2 animate-[ping_1s_ease-in-out_1]">{itemsNumber}</span>}
				</Link>
				<Link to="/favorites" className="font-semibold flex items-center gap-1 md:text-base hover:underline-offset-8 hover:decoration-black hover:underline relative">
					<FontAwesomeIcon icon={faHeart} className="w-7 h-7" />
					{favCounter === 0 ? null : <span className="absolute top-0 -right-2 bg-red-600 rounded-full text-xs animate-[ping_1s_ease-in-out_1] font-extrabold text-white w-5 h-5 text-center">{favCounter}</span>}
				</Link>
				<Link to="/accountsettings" className="font-semibold flex items-center  gap-1 md:text-base hover:underline-offset-8 hover:decoration-black hover:underline">
					<img src={Settings} alt="settings icon" className="w-8 h-8" />
				</Link>
			</div>
		</nav>
	);
};
