import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButton } from "./auth-button-client";

export async function AuthButtonServer() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  //recuperamos la sesión
  const userOrganic = cookies().get("organicSession")?.value || null;

  return <AuthButton session={session || userOrganic} />;
  //renderizamos el componente del cliente y le pasamos
  //la sesión del usuario
}
