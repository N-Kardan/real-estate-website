import Styles from './page.module.css'

import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb'

const page = () => {
  return (
    <>
    <Breadcrumb/>
    <div className={Styles.servicesPage}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>خدماتنا</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page