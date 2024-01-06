export function DarkMode(){
    const $DarkMode = document.createElement("div");
    const $DarkModeImage = document.createElement("img");
    $DarkModeImage.classList.add("dark-mode");
    $DarkModeImage.src = "app/assets/dark-theme.svg";
    $DarkMode.appendChild($DarkModeImage);
    return $DarkMode;
}
