import {motion} from 'framer-motion'

const stats = [
    { id: 1, name: 'Money saved in Tax Resolution Cases', value: '30 Million Dollars' },
    { id: 2, name: 'Years of Experience', value: '20 Years' },
    { id: 3, name: 'Time in Business', value: '10 Years' },
  ]
  
  export default function Stats() {
    return (
    <div className="bg-white py-24 sm:py-32">
        <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut",}}
        className="text-3xl font-bold tracking-tight text-center -mt-16 text-gray-900 sm:text-4xl">Our Stats
        </motion.h2>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5}} 
          className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
    )
  }
  