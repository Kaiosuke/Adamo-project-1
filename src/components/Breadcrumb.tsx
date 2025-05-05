import { Dot } from 'lucide-react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage } from '@components/ui/breadcrumb'
import { memo } from 'react'

interface BreadcrumbIT {
  title: string
  href: string
}

const BreadcrumbCom = ({ links, current }: { links: BreadcrumbIT[]; current: string }) => {
  return (
    <div className="main-container">
      <Breadcrumb>
        <BreadcrumbList>
          {links.map((link, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={link.href} className="text-size-lg hover:underline">
                {link.title}
              </BreadcrumbLink>
              <Dot />
            </BreadcrumbItem>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>
              <span className="text-primary text-size-lg">{current}</span>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default memo(BreadcrumbCom)
