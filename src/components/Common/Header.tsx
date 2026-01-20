'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

export default function Header() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            ZSI<span className="text-blue-600">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-black">
            Dashboard
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <button className="hidden md:inline-flex rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Logout
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
}
