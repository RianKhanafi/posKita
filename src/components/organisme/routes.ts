import { IconsName } from "assets/icons";

export interface IMenus {
  icon: IconsName;
  name: string;
  route: string;
}

export const menusSidebar: IMenus[] = [
  {
    icon: IconsName.graph,
    name: "Dashboard",
    route: "/dashboard",
  },
  {
    icon: IconsName.pie,
    name: "Transaction",
    route: "/dashboard/transaction",
  },
  {
    icon: IconsName.box,
    name: "Product",
    route: "/dashboard/product",
  },
  {
    icon: IconsName.box,
    name: "Kategori",
    route: "/dashboard/category",
  },
  {
    icon: IconsName.box,
    name: "Pelanggan",
    route: "/dashboard/customer",
  },
  {
    icon: IconsName.bell,
    name: "Diskon",
    route: "/dashboard/discount",
  },
  {
    icon: IconsName.box,
    name: "Inventory",
    route: "/Dashboard",
  },
  {
    icon: IconsName.box,
    name: "Inventory",
    route: "/dashboard/users",
  },
];

export const menusHeader: IMenus[] = [
  {
    name: "Pos",
    route: "/pos",
    icon: IconsName.home,
  },
  {
    route: "/dashboard",
    name: "Admin",
    icon: IconsName.admin,
  },
  {
    name: "Stock",
    route: "/dashboard/stok",
    icon: IconsName.stock,
  },
];
