import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Opportunities from "@/components/Opportunities";
import GrowthChart from "@/components/GrowthChart";
import Brands from "@/components/Brands";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Opportunities />
      <GrowthChart />
      <Brands />
      <Vision />
      <Footer />
    </main>
  );
}
