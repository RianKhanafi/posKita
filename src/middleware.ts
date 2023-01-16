import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { IUserAuth, IUserData } from "store/features/users";
import jwt_decode from "jwt-decode";

const protectedRoutes = "/dashboard";
const authRoutes = "/auth";

export function middleware(request: NextRequest) {
  const currentUser: string | undefined =
    request.cookies?.get("postkita")?.value;

  let user: IUserAuth<IUserData> = currentUser ? JSON.parse(currentUser) : null;

  const decode: any = user ? jwt_decode(user.accessToken) : null;
  const exp = user ? new Date(decode.exp).getMilliseconds() : null;
  const now = new Date().getMilliseconds();

  const isExp = !exp || (exp && exp > now);

  // if protected route, but have'nt access -> redirect
  if (request.nextUrl.pathname.startsWith(protectedRoutes) && isExp) {
    request.cookies.delete("postkita");
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // if auth route but have an access -> redirect
  if (request.nextUrl.pathname.startsWith(authRoutes) && !isExp) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}
