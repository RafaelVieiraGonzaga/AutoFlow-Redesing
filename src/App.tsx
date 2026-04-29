/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { Dashboard } from './pages/Dashboard';
import { Leads } from './pages/Leads';
import { Conversations } from './pages/Conversations';
import { Analytics } from './pages/Analytics';
import { Settings } from './pages/Settings';
import { PageId } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'leads': return <Leads />;
      case 'conversations': return <Conversations />;
      case 'analytics': return <Analytics />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-zinc-400 selection:bg-primary/30 selection:text-white">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <TopNav />
      
      <main className="transition-all duration-300 pl-20 lg:pl-64 pt-16 min-h-screen">
        <div className="p-8 lg:p-12 max-w-[1600px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Aesthetic HUD scan lines and grain overlays */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );
}
