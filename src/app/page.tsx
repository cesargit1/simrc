'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Contact', href: '#contact' },
]

const footerNavigation = {
  products: [
    { name: 'SimRC Kit', href: '#products' },
    { name: 'FPV Camera System', href: '#products' },
    { name: 'G29 Integration', href: '#products' },
    { name: 'Traxxas Compatibility', href: '#products' },
  ],
  support: [
    { name: 'Setup Guide', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Contact Support', href: '#contact' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Warranty', href: '#' },
  ],
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between py-0 px-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="">
              <span className="sr-only">SimRC</span>
              <img
                alt="SimRC"
                src="/SimRC-white.png"
                className="h-32 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white hover:text-gray-300 transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-300 transition-colors">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">SimRC</span>
                <img
                  alt="SimRC"
                  src="/SimRC-white.png"
                  className="h-48 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden min-h-screen flex items-center">
          {/* Background image */}
          <img
            alt=""
            src="/simrc-bg.png"
            className="absolute inset-0 -z-20 size-full object-cover"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          <div
            aria-hidden="true"
            className="absolute left-[40%] top-[40%] -translate-y-1/2 -z-10 transform-gpu overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-[#b91c1c] to-[#450a0a] opacity-30 sm:w-[50rem]"
            />
          </div>
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="flex justify-end py-32 sm:py-48 lg:py-56">
              <div className="text-left max-w-2xl w-1/2">
                <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                  FPV RC CARS.<br />
                  <span className="text-white">SIM RACING FEEL.</span>
                </h1>
                <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8 max-w-lg">
                  Transform your Traxxas RC car into an immersive FPV racing experience. Our kit integrates moving cameras with your Logitech G29 wheel and pedals for the ultimate real-world sim racing.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#products"
                    className="rounded-md bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 transition-colors"
                  >
                    SHOP NOW
                  </a>
                  <a href="#how-it-works" className="text-sm/6 font-semibold text-white hover:text-gray-300 transition-colors">
                    See How It Works <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#b91c1c] to-[#450a0a] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black">
        <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              alt="SimRC"
              src="/SimRC-white.png"
              className="h-52"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">Products</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.products.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-sm/6 text-gray-400">&copy; 2026 SimRC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
