import Styles from './page.module.css'

import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb'

const page = () => {
  return (
    <>
    
    <section>
      <Breadcrumb customCurrentTitle={propertyTitle}/>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>تفاصيل العقار</h1>
            </div>
          </div>
        </div>
      </section>
    </section>
    </>
  )
}

export default page