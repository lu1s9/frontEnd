import { DarkMode } from "./DarkMode.js";
import { Title } from "./Title.js";

export function Header(){
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.appendChild(Title());
    $header.appendChild(DarkMode());

    return $header;
}
