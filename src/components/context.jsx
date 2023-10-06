import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import { notifysuccess, notifyduplicate, notifyremoved, favoriteremoved, favoritesuccess } from "./toasts";

const ModelLink = createContext();

export const ModelLinkProvider = ({ children }) => {
	// states for context
	const [link, setLink] = useState();
	const [poster, setPoster] = useState();
	const [details, setDetails] = useState();
	const [name, setName] = useState();
	const [price, setPrice] = useState();
	const [material, setMaterial] = useState();
	const [items, setItems] = useState([]);
	const [itemsNumber, setItemsNumber] = useState(0);
	const [favorite, setFavorite] = useState([]);
	const [favCounter, setFavCounter] = useState(0);
	const [notified, setNotified] = useState(false);
	const [costs, setCosts] = useState([]);
	const [total, setTotal] = useState(0);
	const [location, setLocation] = useState("");
	const [cardNumber, setCardNumber] = useState();
	const [info, setInfo] = useState([]);
	const [isLocationFilled, setIsLocationFilled] = useState(false);
	const [isCardFilled, setIsCardFilled] = useState(false);

	// updating cart by adding
	function addToCart(name, poster, price) {
		const id = uuidv4();
		const itemExists = items.some((item) => item.name === name);
		if (itemExists) {
			notifyduplicate(name);
			return;
		}
		setItems((previousItems) => [{ id, name, poster, price }, ...previousItems]);
		setItemsNumber(itemsNumber + 1);
		setNotified(!notified);
		notifysuccess(name);
	}
	// updating cart by removing
	function removeFromCart(id) {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
		setItemsNumber(itemsNumber - 1);
		items.some((item) => notifyremoved(item.name));
	}

	function addToFavorites(name, poster, price) {
		const favId = uuidv4();
		setFavorite((previousFavorites) => [{ favId, name, poster, price, isFavorite: true }, ...previousFavorites]);
		setFavCounter(favCounter + 1);
		favoritesuccess(name);
	}

	function removeFromFavorites(name) {
		const newFavorites = favorite.filter((favItem) => favItem.name !== name);
		setFavorite(newFavorites);
		setFavCounter(favCounter - 1);
		favoriteremoved(name);
	}

	const value = {
		link,
		setLink,
		poster,
		setPoster,
		name,
		setName,
		details,
		setDetails,
		price,
		setPrice,
		material,
		setMaterial,
		items,
		setItems,
		addToCart,
		itemsNumber,
		removeFromCart,
		favorite,
		setFavorite,
		addToFavorites,
		removeFromFavorites,
		favCounter,
		notified,
		costs,
		setCosts,
		total,
		setTotal,
		location,
		setLocation,
		setCardNumber,
		cardNumber,
		info,
		setInfo,
		setItemsNumber,
		isLocationFilled,
		setIsLocationFilled,
		isCardFilled,
		setIsCardFilled,
	};

	return <ModelLink.Provider value={value}>{children}</ModelLink.Provider>;
};

export default ModelLink;
