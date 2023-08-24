import Logo from "../ui/Logo";
import LanguageMenu from "./i18n/LanguageMenu";
import ThemeSwitchButton from "./theme/ThemeSwitchButton";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <div className="flex gap-2">
        <LanguageMenu />
        <ThemeSwitchButton />
      </div>
    </div>
  );
}

export default Header;
