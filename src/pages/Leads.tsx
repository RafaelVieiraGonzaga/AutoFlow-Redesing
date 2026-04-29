import React from 'react';
import { MoreVertical, Filter, Calendar, TrendingUp, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Lead } from '../types';

const mockLeads: Lead[] = [
  { id: '1', name: 'Sarah Jenkins', role: 'VP de Operações', status: 'qualified', company: 'Nexus Dynamics', lastActivity: 'há 2 horas', score: 94, initials: 'SJ' },
  { id: '2', name: 'Marcus Reed', role: 'Diretor de TI', status: 'contacted', company: 'Stellar Tech', lastActivity: 'Ontem', score: 72, initials: 'MR' },
  { id: '3', name: 'Elena Lin', role: 'CTO', status: 'new', company: 'Vanguard Systems', lastActivity: 'Agora mesmo', score: 88, initials: 'EL' },
  { id: '4', name: 'David Kim', role: 'Chefe de Compras', status: 'won', company: 'Global Logistics Inc.', lastActivity: '12 Out, 2023', score: 100, initials: 'DK' },
];

const StatusBadge = ({ status }: { status: Lead['status'] }) => {
  const configs = {
    new: "border-zinc-700 text-zinc-500 bg-transparent",
    contacted: "border-primary/50 text-primary bg-primary/5",
    qualified: "border-primary text-background bg-primary shadow-[0_0_10px_rgba(0,255,157,0.3)]",
    won: "border-zinc-800 text-zinc-400 bg-zinc-900",
    lost: "border-rose-500/50 text-rose-500 bg-rose-500/5",
  };

  const statusMap = {
    new: "Novo Lead",
    contacted: "Contatado",
    qualified: "Qualificado",
    won: "Convertido",
    lost: "Perdido"
  };

  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-widest uppercase border leading-none", configs[status])}>
      {statusMap[status]}
    </span>
  );
};

export const Leads = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">Pipeline de Leads</h1>
          <p className="text-zinc-500 font-display">Gerencie e acompanhe seus prospects ativos. Identifique alvos de alto valor.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 font-display">
           <div className="relative">
             <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
             <select className="bg-surface border border-white/5 rounded-lg pl-9 pr-8 py-2 text-sm text-zinc-300 focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer outline-none">
               <option>Todos os Status</option>
               <option>Novo Lead</option>
               <option>Contatado</option>
               <option>Qualificado</option>
             </select>
           </div>
           <button className="bg-surface border border-white/5 rounded-lg px-4 py-2 text-sm text-zinc-300 hover:bg-white/5 transition-all flex items-center gap-2 outline-none">
             <Calendar className="w-3.5 h-3.5" />
             Período
           </button>
        </div>
      </div>

      <div className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/40 border-b border-white/5">
                <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-display">Nome do Lead</th>
                <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-display">Status</th>
                <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-display">Empresa</th>
                <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-display">Última Atividade</th>
                <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-display text-right">Score</th>
                <th className="py-4 px-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold font-display text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockLeads.map((lead, idx) => (
                <motion.tr 
                  key={lead.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group hover:bg-white/[0.02] transition-colors duration-200 cursor-pointer"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs font-black text-white font-display">
                        {lead.initials}
                      </div>
                      <div>
                        <div className="font-bold text-white group-hover:text-primary transition-colors font-display tracking-tight leading-tight">
                          {lead.name}
                          {lead.score > 85 && idx === 2 && (
                             <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          )}
                        </div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold font-display mt-0.5">{lead.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <StatusBadge status={lead.status} />
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm font-medium text-zinc-300 font-display">{lead.company}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm text-zinc-300 font-display">{lead.lastActivity}</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                       <span className={cn("text-sm font-black font-display", lead.score > 80 ? "text-primary neon-text-glow" : "text-zinc-500")}>
                         {lead.score}
                       </span>
                       <div className="w-16 h-1 bg-black/50 rounded-full overflow-hidden">
                         <div 
                           className={cn("h-full rounded-full transition-all duration-1000", lead.score > 80 ? "bg-primary shadow-[0_0_8px_#00FF9D]" : "bg-zinc-700")}
                           style={{ width: `${lead.score}%` }}
                         />
                       </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button className="text-zinc-600 hover:text-white transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-black/20 border-t border-white/5 p-4 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-zinc-500 font-display">
          <span>Exibindo 4 de 1.284 entradas</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-colors disabled:opacity-30" disabled>Ant</button>
            <button className="px-3 py-1 rounded bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-colors">Próx</button>
          </div>
        </div>
      </div>
    </div>
  );
};
