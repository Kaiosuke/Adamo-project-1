import { Trans } from 'react-i18next'
import FilterTour from './FilterTour'
import TourPage from './TourPage'

const AttractiveTourSection = () => {
  return (
    <section className="main-container animate-fade-down">
      <div className="flex justify-between ">
        <h2 className="text-size-4xl text-secondary">
          <Trans i18nKey={'attractiveTour.title'} ns="tour" />
        </h2>
        <FilterTour />
      </div>
      <TourPage />
    </section>
  )
}

export default AttractiveTourSection
