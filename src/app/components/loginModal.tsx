"use client";
import { useState, FC } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { setCookie } from "../utils/cookies";

interface loginModalTypes {}
const LoginModal: FC<loginModalTypes> = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();

  const handleRegistrationSuccess = () => {
    // Redirigir al usuario a la página de inicio de sesión
    router.push("/login");
  };
  const handleOpen = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  // Función para registrar un nuevo usuario en la base de datos
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userId = uuidv4();
      const dataQuery = {
        id: userId,
        user_email: email,
        encrypted_password: password,
        name: name,
        user_name: name || "default_user_name",
        avatar_url: "https://example.com/default-avatar.png",
      };
      const { data, error } = await supabase.from("users").insert([dataQuery]);
      console.log(error, "hay error");
      if (error) {
        console.error(
          "Error al registrar a supabase:",
          error.message,
          dataQuery
        );
        return;
      }
      setCookie("organicSession", JSON.stringify(dataQuery), 1);

      // Si el registro es exitoso, redirigir a otra página o cerrar el modal
      setIsModalOpen(false);
      handleRegistrationSuccess(); // Ejemplo de redirección a otra página
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };

  return isModalOpen ? (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex justify-center items-center">
      <div className="relative bg-black text-gray p-10 rounded-2xl shadow-lg w-full max-w-xl min-h-[600px]">
        <div className="absolute top-0 left-0 w-full flex items-center justify-between p-2">
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
        <h1 className="text-3xl font-bold mb-6 text-white mt-16">
          Crea tu cuenta
        </h1>

        <form onSubmit={(e) => handleSignUp(e)} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="nombre" className="block mb-2 text-gray-300">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
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
              className="bg-gray-400 text-black px-4 py-3 rounded-full w-full hover:bg-gray-200 transition"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <button
      onClick={handleOpen}
      className="bg-sky-500 text-white px-20 py-2 rounded-full text-lg font-semibold hover:bg-sky-600 transition w-full"
    >
      Crear cuenta
    </button>
  );
};

export default LoginModal;
