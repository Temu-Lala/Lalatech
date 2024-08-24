import Image from "next/image";
import Allproducts from "../allproducts/page";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </span>
                </div>

                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-cyan-300">
                    Natural Language Processing (NLP):
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    The AI product utilizes advanced NLP algorithms to
                    understand and interpret human language, enabling it to
                    accurately process and analyze text-based inputs.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="../allproducts"
                      className="inline-flex rounded-lg text-cyan-300   px-4 py-1.5 text-base font-semibold leading-7  shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                    >
                      See All Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
