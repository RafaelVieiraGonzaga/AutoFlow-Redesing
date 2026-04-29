import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Calendar, BarChart, TrendingUp, TrendingDown, Bot } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const data = [
  { name: 'Mon', value1: 40, value2: 30 },
  { name: 'Tue', value1: 52, value2: 25 },
  { name: 'Wed', value1: 48, value2: 40 },
  { name: 'Thu', value1: 70, value2: 35 },
  { name: 'Fri', value1: 65, value2: 50 },
  { name: 'Sat', value1: 85, value2: 45 },
  { name: 'Sun', value1: 95, value2: 60 },
];

const MetricCard = ({ title, value, icon: Icon, trend, trendValue, color = "primary" }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="glass-card rounded-xl p-6 relative overflow-hidden group"
  >
    <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${color} to-transparent opacity-30 group-hover:opacity-100 transition-opacity`} />
    <div className="flex justify-between items-start mb-4">
      <span className="text-zinc-500 text-xs font-display font-semibold uppercase tracking-widest">{title}</span>
      <Icon className="w-5 h-5 text-zinc-600 group-hover:text-primary transition-colors" />
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-display font-bold text-white">{value}</span>
      {trend && (
        <span className={cn("text-xs flex items-center gap-0.5 font-semibold", trend === 'up' ? "text-primary" : "text-rose-500")}>
          {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {trendValue}
        </span>
      )}
    </div>
  </motion.div>
);

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">Desempenho <span className="text-primary neon-text-glow font-display">v2.4</span></h1>
        <p className="text-zinc-500 font-display">Telemetria em tempo real e métricas de conversão.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard 
          title="Leads Ativos" 
          value="1.284" 
          icon={Users} 
          trend="up" 
          trendValue="+12.5% vs mês passado"
        />
        <MetricCard 
          title="Pipeline Qualificado" 
          value="342" 
          icon={BarChart} 
          trend="up" 
          trendValue="+5.2% vs mês passado"
        />
        <MetricCard 
          title="Sugestões da IA" 
          value="18" 
          icon={Bot} 
          color="primary"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-xl p-8 min-h-[450px] flex flex-col"
      >
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-2xl font-display font-black text-white">Aquisição de Leads</h3>
            <p className="text-zinc-500 text-sm mt-1">Volume ao longo do tempo</p>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00FF9D]" />
            <span className="text-[10px] font-display font-black uppercase tracking-widest text-primary">Ao Vivo</span>
          </div>
        </div>

        <div className="flex-1 w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1) ">
                  <stop offset="5%" stopColor="#00FF9D" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00FF9D" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#4b5563', fontSize: 12, fontFamily: 'Space Grotesk' }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#4b5563', fontSize: 12, fontFamily: 'Space Grotesk' }}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#121417', border: '1px solid #1f2937', borderRadius: '8px' }}
                itemStyle={{ color: '#00FF9D', fontSize: '12px' }}
              />
              <Area 
                type="monotone" 
                dataKey="value1" 
                stroke="#00FF9D" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorValue)" 
                animationDuration={2000}
              />
              <Area 
                type="monotone" 
                dataKey="value2" 
                stroke="#4b5563" 
                strokeWidth={2}
                fillOpacity={0} 
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};
