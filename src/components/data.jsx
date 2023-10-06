// importing images
import CAMARO from "../assets/racercamarosquare.png";
import AUDIETRON from "../assets/audietronsquare.png";
import BMWE9 from "../assets/bmw e9square.png";
import AVENTADOR from "../assets/aventadorsquare.png";
import CHARGERINSPIRED from "../assets/chargerinspiredsquare.png";
import FORDMUSCLE from "../assets/fordmusclesquare.png";
import KAWASAKI from "../assets/kawasakisquare.png";
import LAMBOCARTOON from "../assets/lambocartoonsquare.png";
import SUPRA from "../assets/suprasquare.png";
import BOBBER from "../assets/truimphbobbersquare.png";
import FORTUNER from "../assets/fortunersquare.png";

// importing models
import audietron from "../assets/models/audietron.glb";
import bmwe9 from "../assets/models/bmwe9.glb";
import camaro from "../assets/models/racercamaro.glb";
import chargerinspired from "../assets/models/chargerinspired.glb";
import fordmuscle from "../assets/models/fordmuscle.glb";
import kawasaki from "../assets/models/kawasaki.glb";
import lambocartoon from "../assets/models/lambo.glb";
import aventador from "../assets/models/aventador.glb";
import fortuner from "../assets/models/fortuner.glb";
import supra from "../assets/models/supra.glb";
import truimphbobber from "../assets/models/truimphbobber.glb";

export const data = [
	{
		name: "Audi E-tron",
		image: AUDIETRON,
		price: 39.99,
		model: audietron,
		description: "The Audi e-tron is an all-electric SUV with a sleek design, luxurious interior, and impressive performance. Powered by dual electric motors, it offers all-wheel drive and delivers a smooth and exhilarating driving experience. With its advanced technology and long-range capabilities, the e-tron represents Audi's foray into the world of electric mobility.",
		material: "Aluminium and Acrylic Glass",
	},
	{
		name: "Lamborghini Hurrican",
		image: LAMBOCARTOON,
		price: 49.99,
		model: lambocartoon,
		description: "The Lamborghini Hurrican is a high-performance supercar known for its aggressive and futuristic design. It features a powerful V12 engine, all-wheel drive, and advanced aerodynamics. With blistering acceleration and a top speed of over 200 mph, the Hurrican offers an exhilarating driving experience synonymous with the Lamborghini brand.",
		material: "Smooth Plastic",
	},
	{
		name: "Camaro Racer Modified",
		image: CAMARO,
		price: 59.99,
		model: camaro,
		description: "The Chevrolet Camaro is an iconic American muscle car known for its powerful performance, aggressive design, and exhilarating driving experience. With a range of high-performance engine options and distinctive styling, the Camaro continues to capture the hearts of automotive enthusiasts.",
		material: "Aluminium and Acrylic Glass",
	},
	{
		name: "BMW E9",
		image: BMWE9,
		price: 19.99,
		model: bmwe9,
		material: "Textured Plastic",
		description: "The BMW E9 is a classic and iconic coupe produced by BMW from the late 1960s to the mid-1970s. With its timeless design, the E9 offers a perfect blend of elegance and sportiness. It is best known for its high-performance variants, such as the legendary BMW 3.0 CSL, which achieved remarkable success in motorsports.",
	},
	{
		name: "Lamborghini Aventador",
		image: AVENTADOR,
		price: 29.99,
		model: aventador,
		description: "The BMW M6 is a high-performance luxury coupe or convertible that combines style, luxury, and thrilling performance. Powered by a potent turbocharged V8 engine, the M6 delivers impressive power and acceleration. It boasts advanced driving dynamics, luxurious features, and M-specific design elements, making it a standout in the BMW lineup.",
		material: "Textured Plastic",
	},
	{
		name: "Toyota Supra",
		image: SUPRA,
		price: 49.99,
		model: supra,
		description: "The Supra, specifically referring to the Toyota Supra, is a legendary sports car known for its performance and iconic design. With a turbocharged engine, rear-wheel drive, and precise handling, the Supra delivers exhilarating driving dynamics. Its sleek profile and rich heritage make it a favorite among car enthusiasts and performance seekers.",
		material: "Aluminium and Acrylic Glass",
	},
	{
		name: "Dodge Charger",
		image: CHARGERINSPIRED,
		price: 9.99,
		model: chargerinspired,
		description: "The Dodge Charger is an iconic American muscle car that combines bold styling with powerful performance. With its aggressive stance, potent engines ranging from V6 to V8, and rear-wheel drive, the Charger delivers exhilarating acceleration and a thrilling driving experience. It offers spacious seating and a range of modern features, blending performance and practicality.",
		material: "Textured Plastic",
	},
	{
		name: "Ford GT",
		image: FORDMUSCLE,
		price: 29.99,
		model: fordmuscle,
		material: "Textured Plastic",
		description: "The Ford GT is an iconic supercar that pays homage to the legendary Ford GT40 of the 1960s. With its striking design, aerodynamic body, and powerful V6 engine, the GT delivers exceptional performance on both the road and the track. It represents Ford's dedication to engineering excellence and automotive performance.",
	},
	{
		name: "Kawasaki",
		image: KAWASAKI,
		price: 15.99,
		model: kawasaki,
		material: "Aluminium and Acrylic Glass",
		description:
			"Kawasaki motorcycles are renowned for their thrilling performance, cutting-edge technology, and stylish designs. From sport bikes like the Ninja series to versatile models like the Z series, Kawasaki offers a diverse range of motorcycles for different riding preferences. Known for their power, agility, and reliability, Kawasaki motorcycles deliver exhilarating riding experiences for enthusiasts around the world.",
	},
	{
		name: "Triumph Bobber",
		image: BOBBER,
		price: 21.99,
		model: truimphbobber,
		material: "Aluminium and Acrylic Glass",
		description: "The Triumph Bobber motorcycle is a stylish and stripped-down cruiser that pays homage to the classic bobber style of the past. With its minimalist design, low seat height, and distinctive floating single-seat setup, it exudes a retro and rebellious vibe. The Bobber offers a powerful engine, responsive handling, and modern features while maintaining its timeless appeal.",
	},
	{
		name: "Fortuner SUV",
		image: FORTUNER,
		price: 9.99,
		model: fortuner,
		material: "Textured Plastic",
		description: "The Fortuner SUV is a rugged and capable vehicle manufactured by Toyota. It offers a spacious and comfortable interior, advanced safety features, and a powerful engine lineup. With its off-road capabilities and stylish design, the Fortuner is a popular choice for those seeking adventure and versatility.",
	},
];

// concat text
export const reduceTextMobile = (string) => {
	let stringLength = 15;
	if (string.length >= stringLength) {
		return string.substring(0, stringLength) + "...";
	}
	return string;
};
export const reduceTextTablet = (string) => {
	let stringLength = 20;
	if (string.length >= stringLength) {
		return string.substring(0, stringLength) + "...";
	}
	return string;
};
