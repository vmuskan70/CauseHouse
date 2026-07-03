function Hero() {
  return (
    <>
      <section className="relative px-5 pt-5 bg-white">
        <button className="bg-[#66ff00] px-5 p-2 rounded-full border border-black text-black  font-medium  hover:text-white transition hover:bg-gray-100">
          NONPROFIT MARKETING AGENCY
        </button>
      </section>
      <h1 className="mt-6 text-9*1 md:text-9*1 font-black leading-[0.95] tracking-light text-[#1f2a20]">Build the house your <br></br>
      <span className="text-lime-500">mission </span>grows in.
      </h1>
      <p className="mt-6 max-w-xl text-gray-600 text-xl">Websites, fundraising systems, CRM , analytics , and campaign
        infrastructure-designed to work as one for growing
        mission-driven teams.
      </p>
      <div className="flex gap-5 mt-8">
        <button className="bg-[#66FF00] border-2 border-black rounded-full px-8 py-4 font-bold hover:shadow-none transition">WORK WITH US</button>
        <button className="bg-whitw border-2 border-black rounded-full px-8 py-4 font-bold transition">EXPLORE SERVICES</button>
      </div>

    </>
  );
}
export default Hero;
