import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navbar } from "./components/navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

// creating lazy imports
// const Home = lazy(() => import("./pages/homepage"));
const Cart = lazy(() => import("./pages/cart"));
const Favorites = lazy(() => import("./pages/favorites"));
const AccountSettings = lazy(() => import("./pages/accountsettings"));
const Shop = lazy(() => import("./pages/shop"));
const Product = lazy(() => import("./pages/productpage"));
const Checkout = lazy(() => import("./pages/checkout"));
const Payment = lazy(() => import("./pages/payment"));
const Congratulations = lazy(() => import("./pages/congratulations"));

import { ModelLinkProvider } from "./components/context";

function App() {
	return (
		<div>
			<ModelLinkProvider>
				<Router>
					<Navbar />
					<Suspense
						fallback={
							<div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
								<h1 className="text-center text-white px-3 py-3 rounded-none-0 bg-black m-auto animate-[ping_2s_ease-in-out_infinite]">MT</h1>
							</div>
						}>
						<Routes>
							<Route path="/" element={<Shop />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/favorites" element={<Favorites />} />
							<Route path="/accountsettings" element={<AccountSettings />} />
							<Route path="/productpage" element={<Product />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route path="/payment" element={<Payment />} />
							<Route path="/congratulations" element={<Congratulations />} />
						</Routes>
					</Suspense>
				</Router>
			</ModelLinkProvider>
		</div>
	);
}

export default App;
