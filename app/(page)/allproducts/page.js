import Image from 'next/image';
import Link from 'next/link';
import Support from '../../../public/suport.jpg'
import Uniconnect from '../../../public/uniconect.jpg'
export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800">
                  <p className="  text-6xl">🛃</p>
                  </span>
                </div>

                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-cyan-300">
                  Customer Support Website
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                  Description: A dedicated platform for managing customer inquiries and support requests, providing efficient solutions and communication tools.
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  src={Support}
                  alt="Product Image"
                  width={890}
                  height={486}
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800">
                  <p className="  text-6xl">🔫</p>
                  </span>
                </div>

                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-cyan-300">
                  FDRE Army Registration Website


                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                  Description: An online portal for the registration and management of army personnel, streamlining the process of enlistment and records maintenance.                  </p>
                 
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  src={""}
                  alt="Product Image"
                  width={647}
                  height={486}
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800">
                   <p className="  text-6xl">🚘</p>
                  </span>
                </div>

                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-cyan-300">
                  Car Tracking App
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                  Description: An application designed to track real-time locations of vehicles, offering users updates on their current whereabouts and movement.                  </p>
                 
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  src={""}
                  alt="Product Image"
                  width={647}
                  height={486}
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800">
                  <p className="  text-6xl">🖇️</p>
                  </span>
                </div>

                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-cyan-300">
                  UniConnect
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                  Description: A social media platform tailored for university students and alumni to connect, share resources, and network within their academic community.                  </p>
                 
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <Image
                  src={Uniconnect}
                  alt="Product Image"
                  width={647}
                  height={486}
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
