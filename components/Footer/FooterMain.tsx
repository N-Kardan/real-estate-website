import Styles from './FooterMain.module.css';

const FooterMain = () => {
  return (
    <>
    <section className={Styles.footerMain}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-5 col-md-6 col-xl-4 mb-xl-0'>
            <p>Footer Main</p>
          </div>
          <div className='col-12 mb-5 order-2 col-md-6 mb-md-0 mb-lg-5 order-lg-1 col-xl-3 mb-xl-0'>
            <p>Footer Main</p>
          </div>
          <div className='col-12 mb-5 order-1 col-md-6 mb-lg-0 order-lg-2 col-xl-2'>
            <p>Footer Main</p>
          </div>
          <div className='col-12 order-3 col-md-6 col-xl-3'>
            <p>Footer Main</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FooterMain