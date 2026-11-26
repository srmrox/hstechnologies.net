import Image from "next/image";

const PARTNERS = [
  { name: "Chapter 1", src: "/images/partners/chapter1.png", width: 1347, height: 406 },
  { name: "FDH Development", src: "/images/partners/fdh-development.png", width: 80, height: 80 },
  { name: "National Incubation Center Islamabad", src: "/images/partners/nic-islamabad.png", width: 942, height: 687 },
  { name: "Pepsi", src: "/images/partners/pepsi.png", width: 142, height: 142 },
  { name: "Burning Brownie", src: "/images/partners/burning-brownie.jpg", width: 150, height: 150, round: true },
  { name: "Røde Kors", src: "/images/partners/rode-kors.svg", width: 804, height: 250 },
];

export function PartnersSection() {
  return (
    <section className="bg-white dark:bg-[#111318] py-10 sm:py-12 lg:py-16">
      <div className="px-[5%] lg:px-[8%] lg:pl-[12%]">
        <h2 className="font-slab text-[22px] sm:text-2xl lg:text-[30px] mb-8 sm:mb-10 text-center lg:text-left text-foreground">
          <span className="font-semibold">Our Partners</span>{" "}
          <span className="font-extralight">& Clients</span>
        </h2>

        <div className="grid grid-cols-3 gap-y-6 gap-x-4 items-center justify-items-center sm:flex sm:items-center sm:justify-between sm:gap-6 lg:gap-8 sm:flex-wrap lg:flex-nowrap">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className="flex-shrink-0 flex items-center justify-center dark:bg-white dark:rounded-lg dark:p-1.5"
            >
              <Image
                src={p.src}
                alt={`${p.name} logo`}
                title={p.name}
                width={p.width}
                height={p.height}
                unoptimized={p.src.endsWith(".svg")}
                className={`h-[50px] sm:h-[65px] lg:h-[80px] w-auto max-w-[110px] sm:max-w-[180px] lg:max-w-[200px] object-contain ${p.round ? "rounded-full" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
