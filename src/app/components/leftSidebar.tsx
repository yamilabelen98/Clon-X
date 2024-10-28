"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  Settings,
  Users,
  Menu,
} from "lucide-react";
import type { MenuItem } from "@/app/types/sidebar";
import { AuthButtonServer } from "./auth-button-server";
import { AuthButton } from "./auth-button-client";
import ModalWrapper from "./modal-wrapper";
interface SidebarProps {
  usuario: string;
  fullName: string;
  avatar_url: string;
  session: any;
}

const LeftSidebar = ({
  usuario,
  fullName,
  avatar_url,
  session,
}: SidebarProps) => {
  const [showAuthButton, setShowAuthButton] = useState(false);
  const menuItems: MenuItem[] = [
    { icon: <Home className="w-6 h-6" />, label: "Inicio", href: "/" },
    {
      icon: <Search className="w-6 h-6" />,
      label: "Explorar",
      href: "/explore",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      label: "Notificaciones",
      href: "/notifications",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Mensajes",
      href: "/messages",
    },
    {
      icon: <Bookmark className="w-6 h-6" />,
      label: "Guardados",
      href: "/bookmarks",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Comunidades",
      href: "/communities",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      label: "Premium",
      href: "/premium",
    },
    { icon: <User className="w-6 h-6" />, label: "Perfil", href: "/profile" },
    {
      icon: <MoreHorizontal className="w-6 h-6" />,
      label: "Más opciones",
      href: "#",
    },
  ];
  console.log(session);

  return (
    <aside className="sticky top-0 w-64 h-screen flex flex-col p-4">
      {/* Logo */}
      <Link href="/" className="mb-4 w-fit">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </Link>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center space-x-4 p-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            {item.icon}
            <span className="text-xl">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Post Button */}
      <button className="w-full bg-blue-500 text-white rounded-full py-3 mt-4 font-bold hover:bg-blue-600 transition-colors">
        Postear
      </button>

      {/* User Profile */}
      <div className="mt-auto flex items-center space-x-2 p-4 rounded-full hover:bg-gray-900 transition-colors cursor-pointer relative">
        <img src={avatar_url} className="w-10 h-10 rounded-full bg-gray-300" />
        <div className="flex-1">
          <p className="font-bold">{fullName}</p>
          <p className="text-gray-500">@{usuario}</p>
        </div>
        <button
          onClick={() => setShowAuthButton(!showAuthButton)}
          className="outline-none"
        >
          <MoreHorizontal className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        </button>
        {showAuthButton && (
          <ModalWrapper>
            <AuthButton session={session} isLeftModal={true} />
          </ModalWrapper>
        )}
      </div>

      {/* Mostrar AuthButtonServer si está habilitado */}

      {/* <MoreHorizontal className="w-5 h-5" /> */}
    </aside>
  );
};

export default LeftSidebar;
