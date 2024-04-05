import Infinity from '../assets/infinity.jpg';
import {motion} from 'framer-motion'

export default function Testimonial() {
    return (
      <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 -mt-24">
        <div className="absolute inset-0 -z-10 opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-28 rad" src= {Infinity} alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Mae is Amazing!!! Very thorough, keeps you up to date on everything! I could not have asked for better service!”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src= {Infinity}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Heather Fast</div>
                <div className="text-gray-600">Owner of Infinity Day Spa and Client of AMA Consulting</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </motion.section>
    )
  }
  