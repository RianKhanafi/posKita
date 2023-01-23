import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { IUserAuth, IUserData } from "store/features/auth";
import jwt_decode from "jwt-decode";

const protectedRoutes = "/dashboard";
const authRoutes = "/auth";
const publicRoutes = ["/public/confirmation"];

export function middleware(request: NextRequest) {
  const currentUser: string | undefined =
    request.cookies?.get("postkita")?.value;

  let user: IUserAuth<IUserData> = currentUser ? JSON.parse(currentUser) : null;

  const decode: any = user ? jwt_decode(user.accessToken) : null;
  const exp = user ? decode.exp : null;
  const isExp = exp ? Date.now() >= exp * 1000 : true;

  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.rewrite(
      new URL(request.nextUrl.pathname?.toString(), request.url)
    );
  }

  // if protected route, but have'nt access -> redirect
  if (request.nextUrl.pathname.startsWith(protectedRoutes) && isExp) {
    request.cookies.delete("postkita");
    return NextResponse.redirect(new URL("/auth/signup", request.url));
  }

  // if auth route but have an access -> redirect
  if (request.nextUrl.pathname.startsWith(authRoutes) && !isExp) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}
