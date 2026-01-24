"use client"; // Required for useState in Next.js App Router

import React, { useState } from "react";
import {
  Menu,
  X,
  User,
} from "lucide-react";
import Link from "next/link";
import { adminRoutes } from "@/routes/adminRoutes";
import { userRoutes } from "@/routes/userRoutes";
import { Route } from "@/types";

export default function DashboardLayout({
  adminSlot,
  userSlot,
}: {
  adminSlot: React.ReactNode;
  userSlot: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userInfo = {
    role: "user",
  };

  let routes: Route[] = [];
  switch (userInfo.role) {
    case "admin":
      routes = adminRoutes;
      break;
    case "user":
      routes = userRoutes;
      break;
    default:
      routes = [];
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out transform
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 md:flex md:flex-col
      `}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-slate-950 text-white">
          <span className="text-xl font-bold tracking-tight">SOLARIS</span>
          <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {routes.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            >
              
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:text-white transition-colors">
            <User size={18} />
            <span>Profile Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 shrink-0">
          <button
            className="p-2 -ml-2 md:hidden text-slate-600"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="flex-1 px-4 max-w-xl hidden sm:block">
            <input
              type="search"
              placeholder="Search data..."
              className="w-full bg-slate-100 border-none rounded-md px-4 py-1.5 text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {userInfo.role === 'admin' ? adminSlot : userSlot}
          </div>
        </main>
      </div>
    </div>
  );
}
