import React from "react";

import { NavbarComponente } from "./NavbarComponente";
import { JumbotronComponente } from "./JumbotronComponente";
import { CardsComponente } from "./CardsComponente";


//create your first component
const Home = () => {
	return (
		<>
		<div className="justify-content-center">
			<div>
				<NavbarComponente />
			</div>
			<div>
				<JumbotronComponente />
				<CardsComponente />
			</div>
			</div>
		</>
	);
};

export default Home;
