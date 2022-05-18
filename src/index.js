// запускает все модули
import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import regular from "./modules/regular";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import helpers from "./modules/helpers";

timer("05.25.2022");
menu();
modal();
regular();
tabs();
slider();
calc(100);
helpers();
