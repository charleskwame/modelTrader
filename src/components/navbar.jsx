import { MobileNav } from "./mobilenavbar";
import { TabletAndDesktopNav } from "./tabletanddesktopnavbar";
import { useMediaQuery } from "@react-hook/media-query";

export const Navbar = () => {
	const isMobile = useMediaQuery("(max-width: 640px)");
	return <>{isMobile ? <MobileNav /> : <TabletAndDesktopNav />}</>;
};
