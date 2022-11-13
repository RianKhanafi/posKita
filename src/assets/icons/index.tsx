import IconPlusSvg from "./plus";
import LogoSvg from "./logo";

export enum IconsName {
  logo = "logo",
  plus = "plus",
}
interface IconsComponent {
  name: IconsName;
  height?: number;
  color?: string;
  width?: number;
}
export default function Icons({ name, width, height, color }: IconsComponent) {
  const renderIcon = () => {
    switch (name) {
      case IconsName.logo:
        return <LogoSvg width={width} height={height} />;
      case IconsName.plus:
        return <IconPlusSvg fill={color} width={width} height={height} />;
      default:
        return null;
    }
  };

  return <div>{renderIcon()}</div>;
}
