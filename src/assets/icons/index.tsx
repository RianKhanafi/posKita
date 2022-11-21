import IconPlusSvg from "./plus";
import LogoSvg from "./logo";
import ChavronRight from "./chevronRight";
import ChavronLeft from "./chevronLeft";
import MoreSvg from "./more";
import BellSvg from "./bell";
import BoxSvg from "./box";
import GraphSvg from "./graph";
import PieSvg from "./pie";
import LogoutSvg from "./logout";
import ArrowLeft from "./arrowLeft";
import TrashSvg from "./trash";

export enum IconsName {
  logo = "logo",
  plus = "plus",
  chevronRight = "chevronRight",
  chevronLeft = "chevronLeft",
  more = "more",
  bell = "bell",
  box = "box",
  graph = "graph",
  logout = "logout",
  pie = "pie",
  arrowLeft = "arrowLeft",
  trash = "trash",
}
interface IconsComponent {
  name?: IconsName;
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
      case IconsName.bell:
        return <BellSvg {...props} />;
      case IconsName.box:
        return <BoxSvg {...props} />;
      case IconsName.graph:
        return <GraphSvg {...props} />;
      case IconsName.logout:
        return <LogoutSvg {...props} />;
      case IconsName.pie:
        return <PieSvg {...props} />;
      case IconsName.arrowLeft:
        return <ArrowLeft {...props} />;
      case IconsName.trash:
        return <TrashSvg {...props} />;
      default:
        return null;
    }
  };

  return <div>{renderIcon()}</div>;
}
