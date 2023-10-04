import About from "@/components/about";

import Divider from "@/components/divider";
import Info from "@/components/info";
import Projects from "@/components/project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Info />
      <Divider />
      <About/>
      <Projects />
    </main>
  );
}
