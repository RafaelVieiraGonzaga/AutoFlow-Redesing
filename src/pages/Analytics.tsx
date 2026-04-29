import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell, PieChart, Pie } from 'recharts';
import { Target, Zap, TrendingUp, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

const funnelData = [
  { name: 'Awareness', value: 4000, fill: '#00FF9D' },
  { name: 'Interest', value: 3000, fill: '#00e68b' },
  { name: 'Consideration', value: 2000, fill: '#00cc7a' },
  { name: 'Intent', value: 1500, fill: '#00b36b' },
  { name: 'Evaluation', value: 1000, fill: '#00995c' },
  { name: 'Purchase', value: 400, fill: '#00804d' },
];

const conversionData = [
  { name: 'Jan', val: 45 },
  { name: 'Feb', val: 52 },
  { name: 'Mar', val: 48 },
  { name: 'Apr', val: 61 },
  { name: 'May', val: 55 },
  { name: 'Jun', val: 67 },
  { name: 'Jul', val: 75 },
];

export const Analytics = () => {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">Análise Detalhada</h1>
          <p className="text-zinc-500 font-display">Telemetria comportamental avançada e atribuição de receita.</p>
        </div>
        <div className="flex gap-2 font-display">
           {['7D', '30D', 'YTD'].map((t) => (
             <button key={t} className="px-5 py-2 glass-card rounded-lg text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors">
               {t}
             </button>
           ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="glass-card rounded-xl p-8 col-span-2">
            <h3 className="text-xl font-display font-black text-white mb-8 border-b border-white/5 pb-4">Impacto na Receita</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversionData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 10, fontFamily: 'Space Grotesk'}} />
                  <Tooltip cursor={{fill: 'rgba(255,255,255,0.02)'}} contentStyle={{backgroundColor: '#121417', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px'}} />
                  <Bar dataKey="val" radius={[4, 4, 0, 0]} animationDuration={1500}>
                    {conversionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === conversionData.length - 1 ? '#00FF9D' : '#1f2937'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
         </div>

         <div className="space-y-8">
            <div className="glass-card rounded-xl p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Taxa de Conversão</h4>
                  <div className="text-3xl font-display font-black text-white mt-1">24.8%</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center neon-glow">
                   <Zap className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '24.8%' }}
                  className="h-full bg-primary shadow-[0_0_8px_#00FF9D]"
                />
              </div>
              <p className="text-[10px] font-bold text-zinc-600 mt-4 uppercase tracking-widest">+2.4% ESTA SEMANA</p>
            </div>

            <div className="glass-card rounded-xl p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Receita Trimestral</h4>
                  <div className="text-3xl font-display font-black text-white mt-1">R$ 124.500<span className="text-zinc-600 font-normal">,00</span></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center neon-glow">
                   <DollarSign className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                <TrendingUp className="w-3.5 h-3.5" />
                12.5% CRESCIMENTO INCREMENTAL
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};
