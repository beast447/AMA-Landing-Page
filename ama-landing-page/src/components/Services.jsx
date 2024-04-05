import { PencilIcon, BookOpenIcon, CurrencyDollarIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const features = [
  {
    name: 'Book keeping',
    description:
      'Our bookkeeping solutions offer meticulous attention to detail, ensuring accurate financial records that provide invaluable insights for informed decision-making and streamlined operations within your business.',
    icon: BookOpenIcon,
  },
  {
    name: 'Tax preparation and Advising',
    description:
      'Our tax consulting services offer strategic guidance and expertise to optimize your tax planning, compliance, and strategy, ensuring maximum efficiency and minimal risk for your business.',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Budget Preperation and Analysis',
    description:
      'Our budget preparation services carefully craft financial plans tailored to your business needs, empowering you to allocate resources efficiently, achieve strategic goals, and drive sustainable growth.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Business Consulting',
    description:
      'Through our business consulting services, we offer expert guidance and strategic insights to optimize operations, enhance productivity, and drive innovation, empowering your business to thrive in the competitive landscape.',
    icon: PencilIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" style={{ marginTop: "0em" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut",}}  
        className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-900">Streamline Your Finaces</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to run your business pain free
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          At AMA Consulting & Business Services, we provide tailored financial solutions to empower your business growth, 
          equipping you with the necessary tools and expertise to navigate complex financial landscapes effectively.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5}} 
              key={feature.name} 
              className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-900">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
