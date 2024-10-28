"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();

  const handleLogin = async (e: React.FormEvent) => {
    console.log("handle");
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(data, "la data");

      if (error) {
        console.error("Error al iniciar sesión:", error.message);
        return;
      }
      router.push("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleOpen = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  return isModalOpen ? (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex justify-center items-center">
      <div className="relative bg-black text-gray p-10 rounded-2xl shadow-lg w-full max-w-xl min-h-[600px] ">
        <div className="absolute top-0 left-0 w-full flex items-center  p-2">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="bg-black text-white hover:bg-gray-900 rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="icon icon-tabler icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>

          <div className="flex-1 flex justify-center">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-8 h-8 text-white"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                ></path>
              </g>
            </svg>
          </div>
        </div>

        {/* Contenido del modal */}
        <h1 className="text-3xl font-bold mb-6 text-white mt-16 flex justify-center">
          Inicia sesión en X
        </h1>

        <form onSubmit={(e) => handleLogin(e)} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-300">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-300">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <button
              type="submit"
              className="bg-gray-200 text-black text-xl font-[600] px-4 py-3 rounded-full w-full hover:bg-gray-400 transition"
            >
              iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <button
      onClick={handleOpen}
      className="bg-black text-sky-500 border border-gray-500 px-20 py-2 rounded-full text-lg font-semibold hover:bg-gray-900 transition w-full"
    >
      Iniciar sesión
    </button>
  );
};

export default LoginPage;
