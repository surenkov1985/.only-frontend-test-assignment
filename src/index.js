import "/assets/scss/main.scss"

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./assets/js/stores/store";
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container);

import App from "./assets/js/components/App"

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
);