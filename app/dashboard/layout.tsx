

// Hacemos el copy-paste que indica FH de la web de Tailwind

import Image from "next/image";
import { Sidebar } from "../components";

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
<div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
    <div className="flex">

    <Sidebar />
        
        <div className="p-4 w-full text-slate-600">
            
            {children}

        </div>
        
      
    </div>
</div>
  );
}