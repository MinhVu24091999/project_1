/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

const SectionImportantStore = () => {
  return (
    <div className="max-w-[1266px] mx-auto relative flex flex-col gap-y-10 mt-[60px] sm:mt-[100px] items-center px-4 sm:px-0 ">
      <p
        className="text-3xl sm:text-[64px] font-bold text-[#000000] text-center sm:leading-[120%]"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-center"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        大切なお店だけど <br />
        売却も視野に入ってきた…
      </p>

      <div className="flex flex-col items-center sm:flex-row sm:h-[497px] gap-y-3">
        <Image
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-delay="200"
          src="/images/important_store_1.png"
          alt=""
          className="h-full !w-[289px]"
          width={290}
          height={497}
        />
        <Image
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-delay="200"
          src="/images/important_store_2.png"
          alt=""
          className="h-full !w-[320px] !mr-[30px]"
          width={320}
          height={497}
        />
        <Image
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-delay="200"
          src="/images/important_store_3.png"
          alt=""
          className="h-full !w-[327px]"
          width={327}
          height={497}
        />
        <Image
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-delay="200"
          src="/images/important_store_4.png"
          alt=""
          className="h-full !w-[305px]"
          width={305}
          height={497}
        />
      </div>
    </div>
  );
};

export default SectionImportantStore;
