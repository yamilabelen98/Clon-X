import { AuthButtonServer } from "@/app/components/auth-button-server";

export default function Login() {
  

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Lado izquierdo con logo de X */}
      <div className="flex-1 flex items-center justify-center">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-90 h-1/2 text-white">
          <g>
            <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      </div>
      {/* Lado derecho */}
      <div className="flex flex-col justify-center pl-10 pr-36 items-start text-left">
        
        <h1 className="text-6xl font-bold mb-4">
          Clon X: Lo que está
        </h1>
        <h1 className="text-6xl font-bold mb-12">
          pasando ahora
        </h1>

        <h2 className="text-3xl font-bold mb-8">Únete hoy</h2>
        
        <div className="space-y-4">
          <AuthButtonServer />

          <div className="flex items-center my-4 w-full">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-gray-400">o</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
          
          <button 
            className="bg-sky-500 text-white px-20 py-2 rounded-full text-lg font-semibold hover:bg-sky-600 transition w-full"
          >
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
}