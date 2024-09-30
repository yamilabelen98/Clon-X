import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { useEffect } from "react";

// esto es una opción de Next.js, para evitar que cachee de forma
// estática la ruta, y que siempre se ejecute en el servidor
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  //accedemos a la url
  const code = requestUrl.searchParams.get("code");
  //esto es de la plataforma web

  if (code !== null) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
    //usando el código que le pasamos por url
    //nos devuelve la sesion del usuario
  }

  return NextResponse.redirect(requestUrl.origin);
  //devuelve a la página que estaba el usuario
}
