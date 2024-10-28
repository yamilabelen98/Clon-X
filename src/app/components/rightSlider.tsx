import React from "react";
import { Search } from "lucide-react";
import type { TrendingTopic, SuggestedUser } from "@/app/types/sidebar";

const RightSidebar = () => {
  const trends: TrendingTopic[] = [
    {
      category: "Tendencia en Argentina",
      title: "Spreen",
      posts: "14,4 mil posts",
    },
    {
      category: "Deportes · Tendencia",
      title: "Franco",
      posts: "Tendencias sobre Lawson, Checo",
    },
    {
      category: "Deportes · Tendencia",
      title: "La 12",
      posts: "64,7 mil posts",
    },
    {
      category: "Entretenimiento · Tendencia",
      title: "Harry Potter",
      posts: "18,4 mil posts",
    },
  ];

  const suggestions: SuggestedUser[] = [
    {
      name: "Telecentro",
      username: "@TelecentroAr",
      verified: false,
      avatar: "/api/placeholder/32/32",
    },
    {
      name: "Miguel Ángel Durán",
      username: "@midudev",
      verified: true,
      avatar: "/api/placeholder/32/32",
    },
  ];

  return (
    <aside className="sticky top-0 w-80 h-screen p-4 space-y-4 bg-black">
      {/* buscador */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Buscar"
          className="w-full bg-gray-900 rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-gray-900 text-white placeholder-gray-500"
        />
      </div>

      <div className="bg-[#FFE9E9] bg-gradient-to-br from-[#FFE9E9] to-[#FFD1D1] rounded-xl p-4">
        <h2 className="font-bold text-xl mb-2 text-black">Offer extended!</h2>
        <p className="mb-4 text-black">
          Obtén hasta un 50 % de descuento en X Premium
        </p>
        <button className="bg-black text-white rounded-full px-4 py-2 font-bold hover:bg-gray-900">
          Suscribirse
        </button>
      </div>

      {/* Trends */}
      <div className="bg-black border-gray-700 border-[0.1px] rounded-xl">
        <h2 className="font-bold text-xl p-4 text-white">Qué está pasando</h2>
        {trends.map((trend, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-gray-900 cursor-pointer transition-colors group relative"
          >
            <p className="text-sm text-gray-500">{trend.category}</p>
            <p className="font-bold text-white">{trend.title}</p>
            {trend.posts && (
              <p className="text-sm">
                Tendencias sobre <span className="text-blue-500">Lawson</span>,{" "}
                <span className="text-blue-500">Checo</span>
              </p>
            )}
            {trend.posts && (
              <p className="text-sm text-gray-500">{trend.posts}</p>
            )}
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500 hover:bg-blue-500/10 h-8 w-8 flex items-center justify-center rounded-full">
              •••
            </button>
          </div>
        ))}
        <button className="p-4 text-blue-500 hover:bg-gray-800 w-full text-left">
          Mostrar más
        </button>
      </div>

      <div className="bg-black border-gray-700 border-[0.1px] rounded-xl">
        <h2 className="font-bold text-xl p-4 text-white">A quién seguir</h2>
        {suggestions.map((user, index) => (
          <div
            key={index}
            className="px-4 py-3 flex items-center justify-between hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center">
                  <p className="font-bold text-white">{user.name}</p>
                  {user.verified && (
                    <svg
                      className="w-4 h-4 ml-1 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                    </svg>
                  )}
                </div>
                <p className="text-gray-500">{user.username}</p>
              </div>
            </div>
            <button className="bg-white text-black rounded-full px-4 py-2 font-bold text-sm hover:bg-gray-200">
              Seguir
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar;
