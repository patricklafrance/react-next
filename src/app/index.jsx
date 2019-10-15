import { Router } from "./features/routing";
import { render } from "react-dom";

const element = document.getElementById("app-container");

render(<Router />, element);
