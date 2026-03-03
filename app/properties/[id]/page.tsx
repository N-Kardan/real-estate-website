import Styles from './page.module.css'

import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb'

const page = () => {
  return (
    <>
    <Breadcrumb customCurrentTitle='عنوان المقال'/>
    <div className={Styles.propertiesDetailPage}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>تفاصيل العقار</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page