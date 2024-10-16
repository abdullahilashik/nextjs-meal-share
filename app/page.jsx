import Banner from "@/components/primary/banner";
import Header from "@/components/primary/header";

export const metadata = {
  title: "Home | Meals Share",
  description: "Share a meal with your community",
};

export default function Home() {
  return (
    <>
      {/* home banner */}
      <Banner />
      {/* main */}
      <section className="py-12 bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-semibold">Why Sharing is Important?</h1>
          <p className="text-lg max-w-4xl text-center font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium id laudantium provident porro perferendis temporibus quos voluptates magni! Aliquid minima et rem. Labore eos, provident quos sunt voluptatum suscipit sapiente.</p>
        </div>
      </section>
    </>
  );
}
