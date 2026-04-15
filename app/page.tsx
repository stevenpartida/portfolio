import HeroHeader from "@/components/HeroHeader";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col  gap-8">
      <HeroHeader></HeroHeader>
      <Experience></Experience>
    </main>
  );
}
