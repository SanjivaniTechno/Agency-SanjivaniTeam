import { Wand2, Boxes, AppWindow } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Web Development",
    description:
      "We craft websites that not only look visually appealing but also function seamlessly to meet your specific needs. Our team of experienced developers utilizes the latest technologies and coding practices to bring your digital vision to life. Whether you're looking for a brand-new website, an e-commerce platform, or a redesign of your existing site, we've got you covered. With a focus on user-friendly design, performance optimization, and security, we ensure that your website engages visitors, loads quickly, and protects sensitive data. Plus, our websites are built with scalability in mind, enabling them to grow alongside your business",
    icon: <Wand2 className="w-8 h-8" />,
  },
  {
    name: "App Development",
    description:
      "In today's digital age, mobile applications have become the cornerstone of business success. Our App Development Services empower businesses to harness the power of mobile technology. We specialize in creating cutting-edge, user-friendly mobile apps tailored to your unique needs, From concept to deployment, our experienced team ensures your app is visually stunning, intuitively designed, and built to deliver a seamless user experience. Whether you need a new app or want to enhance an existing one, we're your trusted partner in turning your mobile app vision into reality. The technologies that we use are - react , native , Flutter.",
    icon: <AppWindow className="w-8 h-8" />,
  },
  {
    name: "Maintenance",
    description:
      "Maintenance is the backbone of any well-functioning system. At  Sanjivani , we offer comprehensive Maintenance Services to keep your equipment, facilities, or systems running smoothly. Our expert team handles everything from routine checks to emergency repairs, ensuring minimal downtime and maximum efficiency. Trust us to maintain your assets, so you can focus on what matters most: your business.",
    icon: <Boxes className="w-8 h-8" />,
  },
  {
    name: "Digital Marketing",
    description:
      "In the fast-paced digital landscape, reaching your target audience is key to business success. Our Digital Marketing Services are designed to boost your online presence and drive results. We utilize the power of the internet to create compelling marketing strategies that increase brand visibility, engage customers, and generate leads. Whether it's through social media, search engines, or email campaigns, we're your partners in expanding your digital footprint and achieving your marketing goals.",
    icon: <Boxes className="w-8 h-8" />,
  },
];

export default function ServicePage() {
  return (
    <div id="services" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className={`heading-font mt-2 text-3xl font-bold tracking-tight text-gray-900`}
        >
          Services
        </h2>
        <div className="mt-20 flex flex-col lg:gap-y-32 gap-y-20">
          {features.map((feature, i) => (
            <div
              className={`flex flex-col ${
                i % 2 != 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } justify-around items-center gap-x-20 gap-y-4 lg:gap-y-0 text-center lg:text-left w-full`}
              key={i}
            >
              <Image
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt=""
                width={800}
                height={400}
                className="max-w-lg w-full rounded-sm lg:aspect-[4/3] aspect-video object-cover shrink"
              />
              <div className="max-w-lg">
                <h1 className="font-semibold text-xl md:text-2xl mt-3">
                  {feature.name}
                </h1>
                <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-7 mt-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
