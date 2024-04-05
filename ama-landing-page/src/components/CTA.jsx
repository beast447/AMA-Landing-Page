/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import {motion} from 'framer-motion'

export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <motion.h2 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring", stiffness: 260, damping: 20}}
            className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Subscribe to our newsletter.</motion.h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
            Our newsletter keeps you up-to-date with the latest trends, regulations, and insights in the ever-evolving world of finance and accounting. 
            Whether it's changes in tax laws, new accounting standards, or industry-specific updates, you'll always be in the know.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-gray-800/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                type="submit"
                className="flex-none rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                
              >
                Subscribe
              </motion.button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-black">Monthly articles</dt>
              <dd className="mt-2 leading-7 text-black">
                
                Our monthly newsletters provide a convenient and comprehensive digest of crucial financial updates, expert insights, and exclusive resources to keep you informed and empowered month after month.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-black">No spam</dt>
              <dd className="mt-2 leading-7 text-black">
                
                Rest assured, we respect your inbox and guarantee a spam-free experience with only valuable and relevant content in our newsletters.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
