import Styles from './FooterButtom.module.css';
import Link from 'next/link';

const FooterButtom = () => {
  const year = new Date().getFullYear();
  return (
    <>
    <div className={Styles.footerButtom}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start'>
            <Link href ='/PrivacyPolicy'               className='transition'>سياسة الخصوصية</Link>
            <span className='ms-2 me-2'>|</span>
            <Link href ='/TermsOfServices'             className='transition'>شروط الإستخدام</Link>
          </div>
          <div className='col-12 col-md-6 text-center text-md-start'>
            <p className='mb-0'>جميع الحقوق محفوظة © 2022 - {year}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FooterButtom