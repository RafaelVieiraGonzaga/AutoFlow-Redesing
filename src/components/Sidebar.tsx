import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  Plus,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';
import { PageId } from '../types';
import { motion } from 'motion/react';

interface SidebarProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
  const navItems = [
    { id: 'dashboard' as PageId, icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'conversations' as PageId, icon: MessageSquare, label: 'Conversas' },
    { id: 'leads' as PageId, icon: Users, label: 'Leads' },
    { id: 'analytics' as PageId, icon: BarChart3, label: 'Análise' },
    { id: 'settings' as PageId, icon: Settings, label: 'Configurações' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 lg:w-64 glass-card z-50 flex flex-col border-r border-white/5">
      <div className="h-16 flex items-center px-6 border-b border-white/5 overflow-hidden">
        <div className="min-w-8 h-8 rounded bg-primary/20 flex items-center justify-center neon-glow">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <span className="ml-3 text-xl font-display font-black tracking-widest text-primary neon-text-glow hidden lg:block">
          AutoFlow
        </span>
      </div>

      <div className="px-6 py-4 hidden lg:block">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold font-display">
          Sales Intelligence
        </span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300 group relative",
                isActive 
                  ? "bg-primary/10 text-primary shadow-[0_0_15px_rgba(0,255,157,0.1)]" 
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute left-[-1rem] w-1 h-8 bg-primary rounded-r-full shadow-[0_0_8px_#00FF9D]"
                />
              )}
              <item.icon className={cn("w-5 h-5", isActive && "neon-text-glow")} />
              <span className={cn("font-medium font-display tracking-tight hidden lg:block", isActive && "font-bold")}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <button className="w-full h-12 bg-primary text-background font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] group active:scale-95 leading-none">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span className="hidden lg:block font-display tracking-tight mt-0.5">Novo Lead</span>
        </button>
      </div>
    </aside>
  );
};
