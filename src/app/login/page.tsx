import { AuthButtonServer } from "@/app/components/auth-button-server";
import LoginModal from "../components/loginModal";
import LoginPage from "../components/loginPage";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../types/database";

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.auth.getSession();
  const organicSession = cookies().get("organicSession")?.value;
  console.log(organicSession, "la sesion organica");
  const parsedOrganicSession = organicSession
    ? JSON.parse(organicSession)
    : null;
  if (!data.session || !parsedOrganicSession) {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="flex-1 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-90 h-1/2 text-white"
        >
          <g>
            <path
              fill="currentColor"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            ></path>
          </g>
        </svg>
      </div>

      <div className="flex flex-col justify-center pl-10 pr-36 items-start text-left">
        <h1 className="text-6xl font-bold mb-4">Clon X: Lo que está</h1>
        <h1 className="text-6xl font-bold mb-12">pasando ahora</h1>

        <h2 className="text-3xl font-bold mb-8">Únete hoy</h2>

        <div className="space-y-4">
          <AuthButtonServer />
          <div className="flex items-center my-4 w-full">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-white-200">o</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
          <LoginModal />
        </div>
        <p className="text-xs w-[50%] leading-tight mt-1">
          Al registrarte, aceptas los
          <span className="text-blue-400"> Términos de servicio</span> y la
          <span className="text-blue-400"> Política de privacidad</span>,
          incluida la
          <span className="text-blue-400"> política de Uso de Cookies</span>.
        </p>
        <div className="flex flex-col mt-20">
          <h1 className=" font-bold mb-4">¿Ya tienes una cuenta?</h1>
          <LoginPage />
        </div>
      </div>
    </div>
  );
}
