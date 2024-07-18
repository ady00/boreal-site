import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-zinc-700">
      <div className = "px-6">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      
    </main>
  );
}
