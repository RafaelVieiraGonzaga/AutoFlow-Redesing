import React, { useState } from 'react';
import { User, Key, Bot, Bell, Mail, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const Settings = () => {
  const [aiEnabled, setAiEnabled] = useState(true);

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header>
        <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">Configuração do Sistema</h1>
        <p className="text-zinc-500 font-display">Gerencie suas preferências de conta e integrações autônomas.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile */}
        <section className="md:col-span-2 space-y-8">
          <div className="glass-card rounded-xl p-8">
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-black uppercase tracking-tight">Perfil de Identidade</h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                  <span className="text-2xl font-black text-zinc-500 group-hover:text-primary transition-colors">AV</span>
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Editar</span>
                  </div>
                </div>
                <button className="text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors">Mudar Avatar</button>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Nome de Exibição</label>
                  <input className="w-full bg-black/40 border border-white/5 rounded-lg p-3 text-sm text-zinc-300 focus:border-primary transition-all outline-none font-display" defaultValue="Alex Vance" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">Identidade (Email)</label>
                  <input className="w-full bg-black/40 border border-white/5 rounded-lg p-3 text-sm text-zinc-300 focus:border-primary transition-all outline-none font-display" defaultValue="alex.vance@autoflow.ai" />
                </div>
                <button className="bg-primary text-background font-black uppercase text-[10px] tracking-widest px-8 py-3 rounded-lg hover:shadow-[0_0_15px_rgba(0,255,157,0.4)] transition-all">
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8">
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-display font-black uppercase tracking-tight">Tokens de Acesso</h2>
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-all">Gerar Novo</button>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white mb-1 font-display">Chave de API de Produção</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Criada em 12 Out, 2023</div>
                </div>
                <div className="font-mono text-xs text-zinc-500 flex items-center gap-4">
                   sk_live_••••••••3f9a
                   <ChevronRight className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sidebar Settings */}
        <aside className="space-y-8">
           <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Bot className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-display font-black uppercase tracking-tight">Agente IA</h2>
              </div>
              <p className="text-xs text-zinc-500 font-display leading-relaxed mb-8">
                Análise autônoma de leads, rascunhos de respostas sugeridas e priorização do seu pipeline.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className={cn("w-2 h-2 rounded-full", aiEnabled ? "bg-primary shadow-[0_0_5px_#00FF9D] animate-pulse" : "bg-zinc-700")} />
                   <span className={cn("text-[10px] font-black uppercase tracking-widest", aiEnabled ? "text-primary" : "text-zinc-500")}>
                     {aiEnabled ? 'Sistema Ativo' : 'Sistema Desligado'}
                   </span>
                 </div>
                 <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={aiEnabled} onChange={e => setAiEnabled(e.target.checked)} />
                    <div className="w-10 h-5 bg-zinc-900 border border-white/10 rounded-full peer-checked:bg-primary transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full" />
                 </label>
              </div>
           </div>

           <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-display font-black uppercase tracking-tight">Alertas</h2>
              </div>
              <div className="space-y-6">
                 {[
                   { label: 'Alertas de Novos Leads', sub: 'Notificação instantânea na pontuação.' },
                   { label: 'Resumo Diário', sub: 'Digest matinal da atividade.' },
                   { label: 'Atualizações do Sistema', sub: 'Manutenção e alertas.' }
                 ].map((opt) => (
                   <div key={opt.label} className="flex items-center justify-between group cursor-pointer">
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-primary transition-colors font-display mb-1">{opt.label}</div>
                        <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">{opt.sub}</div>
                      </div>
                      <div className="w-8 h-4 bg-zinc-900 border border-white/10 rounded-full relative">
                         <div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_5px_#00FF9D]" />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
};
