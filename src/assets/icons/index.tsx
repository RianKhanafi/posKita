import IconPlusSvg from "./plus";
import LogoSvg from "./logo";
import ChavronRight from "./chevronRight";
import ChavronLeft from "./chevronLeft";
import MoreSvg from "./more";

export enum IconsName {
  logo = "logo",
  plus = "plus",
  chevronRight = "chevronRight",
  chevronLeft = "chevronLeft",
  more = "more",
}
interface IconsComponent {
  name: IconsName;
  height?: number;
  color?: string;
  width?: number;
}
export default function Icons({ name, width, height, color }: IconsComponent) {
  const renderIcon = () => {
    const props = { width, height, fill: color };
    switch (name) {
      case IconsName.logo:
        return <LogoSvg {...props} />;
      case IconsName.plus:
        return <IconPlusSvg {...props} />;
      case IconsName.chevronRight:
        return <ChavronRight {...props} />;
      case IconsName.chevronLeft:
        return <ChavronLeft {...props} />;
      case IconsName.more:
        return <MoreSvg {...props} />;
      default:
        return null;
    }
  };

  return <div>{renderIcon()}</div>;
}
