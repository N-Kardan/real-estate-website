import Styles from './page.module.css'

import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb'

const page = () => {
  return (
    <>
    <Breadcrumb/>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>عقاراتنا</h1>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page