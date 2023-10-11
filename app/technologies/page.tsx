import Image from "next/image";
const techs = [
  {
    title: "JavaScript",
    description:
      "JavaScript is a versatile, high-level programming language primarily used for web development to add interactivity and dynamic behavior to websites.",
    icon: "js.png",
  },
  {
    title: "Django",
    description:
      "Django is a Python web framework that simplifies and streamlines web development by providing pre-built tools and libraries for building web applications.",
    icon: "django.png",
  },
  {
    title: "MERN Stack",
    description:
      "The MERN stack is a full-stack development framework that includes MongoDB, Express.js, React, and Node.js, commonly used for building modern web applications.",
    icon: "react.png",
  },
  {
    title: "Spring Boot",
    description:
      "Spring Boot is a Java-based framework for simplifying and accelerating the development of production-ready, standalone, and production-grade applications.",
    icon: "springboot.png",
  },
  {
    title: "Flask",
    description:
      "Flask is a lightweight Python web framework designed for building web applications with simplicity and flexibility, often used for small to medium-sized projects.",
    icon: "flask.png",
  },
  {
    title: "Angular",
    description:
      "Angular is a JavaScript-based front-end framework developed by Google for building dynamic and interactive web applications with a focus on single-page applications (SPAs).",
    icon: "angular.png",
  },
  {
    title: "C#",
    description:
      "C# (C-sharp) is a statically-typed, object-oriented programming language developed by Microsoft. It's widely used for building Windows applications and web services.",
    icon: "csharp.png",
  },
  {
    title: ".NET",
    description:
      ".NET is a software framework developed by Microsoft, providing tools and libraries for building a wide range of applications, including desktop, web, and mobile applications.",
    icon: "dotnet.png",
  },
  {
    title: "Content writing",
    description:
      "Content writing is the process of creating written material for various purposes, such as articles, blog posts, web content, or marketing materials, to inform, entertain, or engage readers.",
    icon: "contentwriting.png",
  },
  {
    title: "Powerpoint",
    description:
      "PowerPoint is a presentation software developed by Microsoft, widely used for creating slideshows and visual presentations with text, images, and multimedia elements.",
    icon: "powerpoint.png",
  },
  {
    title: "Webiste Design",
    description:
      "Website design is the process of planning, creating, and arranging visual and functional elements on a webpage to enhance user experience and convey information effectively.",
    icon: "layout.png",
  },
  {
    title: "Web Development",
    description:
      "Web development involves building and maintaining websites or web applications, encompassing front-end (user interface) and back-end (server-side) development to create functional online experiences.",
    icon: "responsive.png",
  },
  {
    title: "E-commerce",
    description:
      "E-commerce refers to the buying and selling of goods or services online, typically through websites or online platforms, enabling transactions, payments, and digital commerce.",
    icon: "ecommerce.png",
  },
  {
    title: "SQL",
    description:
      "SQL (Structured Query Language) is a domain-specific programming language used for managing and querying relational databases, allowing users to interact with data, retrieve, manipulate, and store information.",
    icon: "sql.png",
  },
  {
    title: "Android Development",
    description:
      "Android development is the process of creating mobile applications for devices running the Android operating system, typically using programming languages like Java or Kotlin.",
    icon: "android.png",
  },
  {
    title: "MongoDB",
    description:
      "MongoDB is a NoSQL, document-oriented database management system that stores data in a flexible, schema-less format, making it suitable for handling large volumes of unstructured or semi-structured data.",
    icon: "mongodb.png",
  },
  {
    title: "MySQL",
    description:
      "MySQL is an open-source relational database management system (RDBMS) that allows users to store, manage, and retrieve structured data, widely used in web applications and server environments.",
    icon: "mysql.png",
  },
  {
    title: "Web Hosting",
    description:
      "Web hosting is a service that provides the infrastructure and resources to make websites accessible on the internet. It involves storing website files and data on servers, making them available for online access.",
    icon: "domain.png",
  },
  {
    title: "DNS",
    description:
      "DNS (Domain Name System) is a system that translates human-readable domain names (e.g., www.example.com) into IP addresses, facilitating internet communication by associating names with numerical IP addresses.",
    icon: "dns.png",
  },
];

export default function TechnologyPage() {
  return (
    <section id="technologies" className="">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className={`heading-font text-3xl md:text-4xl font-bold`}>
            Technologies
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 lg:mx-auto">
            We are using the latest technologies to build our projects.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {techs.map((tech, i) => (
              <div
                className="flex flex-col border border-indigo-200 bg-white hover:bg-indigo-100 duration-300 p-6 rounded-sm"
                key={i}
              >
                <Image
                  src={"/languages/" + tech.icon}
                  alt=""
                  width={48}
                  height={48}
                />
                <div className="mt-4">
                  <h5 className="text-lg leading-6 font-medium text-black">
                    {tech.title}
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-700">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
