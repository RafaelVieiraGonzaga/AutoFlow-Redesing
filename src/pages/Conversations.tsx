import React, { useState } from 'react';
import { Send, Paperclip, Phone, MoreVertical, Bot, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Message } from '../types';

const mockMessages: Message[] = [
  { id: '1', sender: 'user', text: "Olá time, revisei a proposta que vocês enviaram. O conjunto de funcionalidades parece ótimo, mas tenho algumas dúvidas sobre o cronograma de implementação. Vamos prosseguir com o nível 2 se pudermos esclarecer esses pontos.", time: '10:42' },
  { id: '2', sender: 'me', text: "Ótimas notícias, Sarah! Com certeza podemos esclarecer o cronograma. Eu preparei um documento de visão geral rápida que detalha os primeiros 30 dias de implementação. Quer que eu te envie?", time: 'Agora' },
];

export const Conversations = () => {
  const [activeChat, setActiveChat] = useState('Sarah Jenkins');

  return (
    <div className="h-[calc(100vh-140px)] flex gap-6">
      {/* Chat List */}
      <aside className="w-1/3 glass-card rounded-xl flex flex-col min-w-[320px]">
        <div className="p-4 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-xl font-display font-black uppercase tracking-tighter text-primary neon-text-glow">Ativas</h2>
          <div className="flex gap-1.5 font-display">
            <span className="px-2.5 py-1 bg-white/5 text-[10px] font-bold uppercase tracking-widest rounded text-zinc-400 cursor-pointer hover:bg-white/10">Todas</span>
            <span className="px-2.5 py-1 bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest rounded cursor-pointer transition-colors shadow-[0_0_10px_rgba(0,255,157,0.1)]">Não lidas</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {['Sarah Jenkins', 'Michael Chen', 'Rachel Stern'].map((name, i) => (
            <div 
              key={name}
              onClick={() => setActiveChat(name)}
              className={cn(
                "p-3 rounded-lg border flex items-center gap-4 cursor-pointer transition-all duration-300 relative overflow-hidden",
                activeChat === name 
                  ? "bg-white/5 border-white/10" 
                  : "bg-transparent border-transparent hover:bg-white/5"
              )}
            >
              {activeChat === name && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_8px_#00FF9D]" />
              )}
              <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center bg-zinc-900 flex-shrink-0">
                <span className="text-xs font-black text-white">{name.split(' ').map(n=>n[0]).join('')}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className={cn("text-sm font-bold truncate tracking-tight font-display", activeChat === name ? "text-white" : "text-zinc-500")}>
                    {name}
                  </h3>
                  <span className="text-[10px] font-bold text-primary">{i === 0 ? 'há 2m' : 'há 1h'}</span>
                </div>
                <p className="text-xs text-zinc-500 truncate font-display">Revisei a proposta. Vamos prosseguir...</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* active window */}
      <main className="flex-1 glass-card rounded-xl flex flex-col relative overflow-hidden group">
        <header className="p-4 border-b border-white/5 flex items-center justify-between bg-black/20">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-zinc-900 border border-primary/50 flex items-center justify-center">
               <span className="text-xs font-black text-white">{activeChat.split(' ').map(n=>n[0]).join('')}</span>
             </div>
             <div>
               <h2 className="text-sm font-bold text-white font-display tracking-tight">{activeChat}</h2>
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_6px_#00FF9D]" />
                  Online (Acme Corp)
               </div>
             </div>
          </div>
          <div className="flex gap-2 text-zinc-500">
            <button className="p-2 hover:text-white transition-colors rounded-lg hover:bg-white/5 outline-none">
              <Phone className="w-4 h-4" />
            </button>
            <button className="p-2 hover:text-white transition-colors rounded-lg hover:bg-white/5 outline-none">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
           <div className="flex justify-center">
              <div className="px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,157,0.05)]">
                 <Bot className="w-3.5 h-3.5" />
                 AutoFlow AI detectou intenção de compra na última mensagem
              </div>
           </div>

           {mockMessages.map((msg, i) => (
             <motion.div 
               key={msg.id}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className={cn(
                 "flex gap-4 max-w-[80%]",
                 msg.sender === 'me' ? "ml-auto flex-row-reverse" : ""
               )}
             >
                <div className={cn(
                  "w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-auto",
                  msg.sender === 'me' ? "bg-primary/20 border-primary/50 text-primary" : "bg-zinc-900 border-white/10 text-white"
                )}>
                  {msg.sender === 'me' ? 'ME' : 'SJ'}
                </div>
                <div>
                   <div className={cn(
                     "p-4 rounded-2xl font-display text-sm leading-relaxed",
                     msg.sender === 'me' 
                        ? "bg-primary/10 border border-primary/30 text-white rounded-br-none shadow-[0_0_15px_rgba(0,255,157,0.05)]" 
                        : "bg-white/5 border border-white/5 text-zinc-300 rounded-bl-none"
                   )}>
                     <p>{msg.text}</p>
                   </div>
                   <span className={cn("text-[8px] font-bold uppercase tracking-widest text-zinc-600 mt-2 block px-2", msg.sender === 'me' ? "text-right" : "")}>
                     {msg.time}
                   </span>
                </div>
             </motion.div>
           ))}
        </div>

        <footer className="p-4 border-t border-white/5 bg-black/40">
           <div className="flex items-end gap-2 bg-black/40 border border-white/10 rounded-xl p-2 focus-within:border-primary/50 transition-all">
             <button className="p-2.5 text-zinc-500 hover:text-white transition-colors outline-none cursor-pointer">
               <Paperclip className="w-4 h-4" />
             </button>
             <textarea 
               className="flex-1 bg-transparent border-none text-zinc-200 resize-none outline-none text-sm py-2 px-2 placeholder:text-zinc-700 font-display font-medium" 
               placeholder="Digite uma mensagem..."
               rows={1}
             />
             <button className="p-2.5 bg-primary text-background rounded-lg hover:shadow-[0_0_15px_rgba(0,255,157,0.4)] transition-all outline-none">
                <Send className="w-4 h-4" />
             </button>
           </div>
        </footer>
      </main>

      {/* Profile Sidebar */}
      <aside className="w-1/4 glass-card rounded-xl p-6 flex flex-col items-center">
         <div className="relative mb-6">
           <div className="absolute top-0 right-0 px-2 py-0.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[8px] font-black uppercase tracking-widest rounded leading-none">Lead Quente</div>
           <div className="w-24 h-24 rounded-full border-2 border-white/10 p-1">
              <div className="w-full h-full rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center">
                <span className="text-2xl font-black text-white">SJ</span>
              </div>
           </div>
         </div>
         <h3 className="text-xl font-display font-black text-white mb-1 uppercase tracking-tight">Sarah Jenkins</h3>
         <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-6">VP de Operações @ Acme Corp</p>
         
         <div className="flex gap-2 w-full mb-8 font-display">
           <button className="flex-1 py-2 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:bg-white/5 transition-colors">Perfil</button>
           <button className="flex-1 py-2 border border-primary/30 bg-primary/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/20 transition-colors">Converter</button>
         </div>

         <div className="w-full space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 shadow-[0_0_15px_rgba(0,255,157,0.05)]">
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Insight da IA</h4>
               </div>
               <p className="text-xs text-zinc-300 font-display leading-relaxed font-medium">
                 Alta probabilidade de fechamento esta semana. O lead visualizou a página de preços 3 vezes nas últimas 48 horas.
               </p>
            </div>
         </div>
      </aside>
    </div>
  );
};
