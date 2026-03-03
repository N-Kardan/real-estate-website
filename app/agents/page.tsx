import Styles from './page.module.css'

import Breadcrumb from '@/components/ui/Breadcrumb/Breadcrumb'

const page = () => {
  return (
    <>
    <Breadcrumb />
    <div className={Styles.agentsPage}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>وكلائنا</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page