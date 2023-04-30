const Home = () => {
  return (
    <main class="flex justify-center items-center grow h-screen w-full bg-black z-0">
      <section class="relative rounded-lg bg-nav w-3/4 min-h-2/3 md:w-1/4 md:min-h-2/3 mx-auto">
        <div className="absolute flex justify-self-center items-center justify-center w-full -top-5">
          <div className="rounded-full outline outline-nav outline-4">
            <img
              src="/icons/eth.svg"
              alt=""
              class="rounded-full w-12 h-12 shadow outline outline-black outline-8 object-cover"
            />
          </div>
        </div>
        <section className="flex flex-col gap-4 px-6 md:px-11 mt-16 w-full">
          <article className="flex justify-between items-center">
            <span className="text-xs md:text-sm text-[#C5C5C5] font-normal">
              Current value
            </span>
            <span className="text-xl text-[#627EEA] font-semibold">
              ₹ 24882
            </span>
          </article>
          <article className="cursor-pointer px-3 bg-[#1C1731] w-full h-12 rounded-lg flex items-center justify-between w-full">
            <span className="flex gap-2 items-center">
              <img src="/icons/eth.svg" alt="" />
              <p className="text-xs md:text-sm text-white">Ethereum</p>
            </span>
            <img src="/icons/dropdown.png" className="w-3.5 h-[7px]" alt="" />
          </article>
          <article className="flex flex-col gap-2">
            <span className="text-xs md:text-sm text-[#C5C5C5] font-normal">
              Amount you want to invest
            </span>
            <span className="px-3 rounded-lg flex items-center justify-between border border-[#6E56F840]">
              <input
                className="h-12 w-full bg-nav font-bold outline-none text-white"
                placeholder="0.00"
              />
              <p className="text-white">INR</p>
            </span>
          </article>
          <article className="flex flex-col gap-2">
            <span className="text-xs md:text-sm text-[#C5C5C5] font-normal">
              Estimate number of ETH you get
            </span>
            <input
              className="px-3 font-bold h-12 rounded-lg w-full bg-[#1C1731] outline-none text-white"
              placeholder="0.00"
              disabled
            />
          </article>
        </section>
        <section className="flex flex-col gap-4 px-6 md:px-11 mt-16 w-full">
          <button className="w-auto bg-gradient-to-r from-[#3387D5] to-[#7A06C9] rounded-3xl h-12 text-white font-semibold mb-6">
            Buy
          </button>
        </section>
      </section>
    </main>
  );
};

export { Home };