import About1 from '@assets/images/about 1.png'
import About2 from '@assets/images/about-2.png'
import Com from '@assets/images/com.png'
import { Trans } from 'react-i18next'

const TraditionalSection = () => {
  return (
    <section className="main-container">
      <div className="w-full ">
        <img src={Com} alt="com" className="object-cover w-full" />
      </div>
      <div className="pd-normal" />
      <div>
        <h2 className="text-secondary text-size-4xl">
          <Trans i18nKey={'traditional.title'} ns={'about'} />
        </h2>
        <div className="pd-normal" />
        <div className="grid lg:grid-cols-2 lg:gap-28 md:gap-16 gap-10 grid-cols-1">
          <div>
            <p>
              <Trans i18nKey={'traditional.passage1'} ns={'about'} />
            </p>
          </div>
          <div>
            <p>
              <Trans i18nKey={'traditional.passage2'} ns={'about'} />
            </p>
          </div>
          <div className="w-full">
            <img src={About1} alt="about 1" className="object-cover w-full" />
          </div>
          <div className="h-full flex lg:flex-col flex-col-reverse">
            <p className="lg:pt-0 md:pt-10 pt-6">
              <Trans i18nKey={'traditional.passage3'} ns={'about'} />
            </p>
            <div className="w-full flex-[1_0_auto] lg:pt-16">
              <img src={About2} alt="about 2" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TraditionalSection
