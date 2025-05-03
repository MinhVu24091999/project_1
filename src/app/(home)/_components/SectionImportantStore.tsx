/* eslint-disable @next/next/no-img-element */

const SectionImportantStore = () => {
  return (
    <div className="max-w-[1266px] mx-auto relative flex flex-col gap-y-10 mt-[60px] sm:mt-[100px] items-center px-4 sm:px-0 ">
      <p className="text-3xl sm:text-[64px] font-bold text-[#000000] text-center sm:leading-[120%]">
        大切なお店だけど <br />
        売却も視野に入ってきた…
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 sm:h-[497px] gap-3">
        <img
          data-aos="fade-right"
          src="/images/important_store_1.png"
          alt=""
          className="h-full"
        />
        <img
          data-aos="fade-right"
          src="/images/important_store_2.png"
          alt=""
          className="h-full"
        />
        <img
          data-aos="fade-left"
          src="/images/important_store_3.png"
          alt=""
          className="h-full"
        />
        <img
          data-aos="fade-left"
          src="/images/important_store_4.png"
          alt=""
          className="h-full"
        />
      </div>
    </div>
  );
};

export default SectionImportantStore;
