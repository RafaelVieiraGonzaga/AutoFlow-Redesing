import React from 'react';
import { Search, Bell, Zap, UserCircle } from 'lucide-react';

export const TopNav: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 h-16 bg-background/60 backdrop-blur-md border-b border-white/5 z-40 transition-all duration-300 left-20 lg:left-64 flex items-center justify-between px-8">
      <div className="flex-1 max-w-md hidden sm:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Buscar leads ou análises..."
            className="w-full bg-black/40 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all font-display tracking-wide outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6 ml-auto">
        <button className="relative text-zinc-400 hover:text-primary transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full shadow-[0_0_5px_#00FF9D]" />
        </button>
        <button className="text-zinc-400 hover:text-primary transition-colors">
          <Zap className="w-5 h-5" />
        </button>
        <div className="h-6 w-px bg-white/10" />
        <button className="flex items-center gap-2 group">
          <span className="text-sm font-display font-semibold text-zinc-400 group-hover:text-white transition-colors hidden md:block">
            Alex Vance
          </span>
          <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-primary/50 transition-colors bg-zinc-900 flex items-center justify-center overflow-hidden">
             <UserCircle className="w-full h-full text-zinc-500 group-hover:text-primary transition-colors" />
          </div>
        </button>
      </div>
    </header>
  );
};
