import Image from "next/image";

export default function AboutPage() {
  return (
    <section id="about" className="bg-white px-6 py-10 md:py-20">
      <div className="max-w-[80rem] mx-auto">
        <div className="flex gap-x-3 justify-around items-center md:items-start flex-col md:flex-row">
          <div className="w-full max-w-md mt-4">
            <h2
              className={`heading-font text-3xl md:text-4xl font-bold text-black mb-6`}
            >
              Who we Are?
            </h2>
            <p className="text-lg mb-12">
              We build greater futures through innovation and collective
              knowledge.
            </p>
            <h3 className="font-semibold text-gray-900 mb-4 text-xl">
              Welcome to Sanjivani Techno - Where Quality Meets Innovation!
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Sanjivani Techno, we&apos;re more than just a company;
              we&apos;re your partners in progress. With a strong commitment to
              delivering top-notch services, we take immense pride in offering a
              blend of quality work, customer satisfaction, and invaluable
              technological solutions
            </p>
          </div>
          <div className="w-full max-w-sm pt-12">
            <Image
              width={900}
              height={600}
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt=""
              className="w-full object-cover object-center rounded-lg aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
