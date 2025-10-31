import Hero from "./Hero";
import ProductCards from "./ProductCards";
import Faqs from "./Faqs";
import Collections from "./Collections";

export default function Index() {
  return (
    <div className="min-h-screen ">
      {/* Decorative pattern and container */}
      <div className="relative overflow-hidden">
        <Hero />
        <Collections />
        <ProductCards />
        <Faqs />
      </div>
    </div>
  );
}
