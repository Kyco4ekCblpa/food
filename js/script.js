"use strict";

import tabs from "./modules/tabs";
import cards from "./modules/cards";
import timer from "./modules/timer";
import slider from "./modules/slider";
import forms from "./modules/forms";
import calculator from "./modules/calculator";
import modal from "./modules/modal";
import {openModal} from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 99000);

    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    cards();
    modal("[data-modal]", ".modal", modalTimerId);
    timer(".timer", "2024-06-30");
    slider({
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
        container: ".offer__slider",
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current"

    });
    forms("form", modalTimerId);
    calculator();
});
