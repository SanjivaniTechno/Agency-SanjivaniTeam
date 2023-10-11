export default function Contact() {
  return (
    <div className="isolate bg-slate-50 px-6 py-12 sm:py-20 lg:px-8">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center">
          <h1 className={`heading-font text-3xl font-bold`}>Contact Us</h1>
          <h2 className="mt-3">Discussion your ideas with our Experts team!</h2>
          {/* <h2>How would you like us to connect ?</h2> */}
        </div>
        <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row justify-between gap-x-6 items-center px-0 md:px-10 mt-16">
          <div className="bg-white border w-full max-w-xs py-8 px-6 shadow-sm">
            <h5 className="text-sm font-medium mb-1">Mr. Sourav Yadav</h5>
            <p>+91 79876 89874</p>
          </div>
          <div className="bg-white border w-full max-w-xs py-8 px-6 shadow-sm">
            <h5 className="text-sm font-medium mb-1">Ms. Priya Yadav</h5>
            <p>+91 98261 91603</p>
          </div>
          <div className="bg-white border w-full max-w-xs py-8 px-6 shadow-sm">
            <h5 className="text-sm font-medium mb-1">Drop a Hi👋🏻 on</h5>
            <p>sanjivani@website.com</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mx-auto mt-16">
          <div className="max-w-lg">
            <h1 className={`heading-font text-2xl font-bold`}>
              Sanjivani Techno
            </h1>
            <p className="mt-2">
              discuss your ideas with our expert team and access top-tier
              technical software solutions.
            </p>
          </div>
          <form action="#" method="POST" className="mt-8 sm:mt-12">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-sm border border-slate-400 outline-none px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    required
                    className="block w-full rounded-sm border border-slate-400 outline-none px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-sm border border-slate-400 outline-none px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    required
                    className="block w-full rounded-sm border border-slate-400 outline-none px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="block w-full rounded-sm border border-slate-400 outline-none px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 resize-none"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-sm bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
