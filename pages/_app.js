import "tailwindcss/tailwind.css";
import "../styles/global.css";

import Router from "next/router";

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
	size: 4,
	color: "#FE595E",
	className: "bar-of-progress",
	delay: 100,
});

const progressStart = () => {
	progress.start();
};
const progressEnd = () => {
	progress.end();
};

Router.events.on("routeChangeStart", progressStart);
Router.events.on("routerChangeComplete", progressEnd);
Router.events.on("routerChangeError", progressEnd);

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
