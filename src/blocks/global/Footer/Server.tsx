import React from 'react'
import config from '@payload-config'
import { getPackedSettings } from 'http2'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Image from 'next/image'
import Link from 'next/link'
export default async function FooterServer() {
  const payload = await getPayloadHMR({ config })
  const footer = await payload.findGlobal({ slug: 'footer' })
  // HMR stands for Hot Module Reload, you allways get the latest data of payload, this is typesafe !
  return (
    <div className="bg-green-300 border-t-2 border-t-green-500">
      <div className="py-12 max-w-5xl mx-auto flex justify-between w-ful items-center">
        {/* fill 100% of the parent container with the image  */}
        <div className="relative w-64 h-20">
          <Image src={footer.logo.url} alt="headerlogo.alt" fill className="object-contain" />
        </div>
        <div>{footer.copyrightNotice}</div>
        <div>
          {footer.nav.map((item, index) => {
            return (
              <Link key={index} href={item.link} className="text-white text-lg mx-4">
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
