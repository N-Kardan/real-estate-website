import Styles from './FooterMain.module.css';

import { FaLocationDot, FaRegEnvelope, FaPhone } from "react-icons/fa6";
import { TitleFooter } from '../../ui/Title'
import WorkHours from '../../ui/WorkHours';

const FooterMain = () => {
  return (
    <>
    <section className={Styles.footerMain}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-5 col-md-6 col-xl-4 mb-xl-0'>
            <div className={Styles.footerBlock}>
              <TitleFooter>من نحن</TitleFooter>
              <div className={Styles.infoBlock}>
                <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.</p>
              </div>
            </div>
          </div>
          <div className='col-12 mb-5 order-2 col-md-6 mb-md-0 mb-lg-5 order-lg-1 col-xl-3 mb-xl-0'>
            <div className={Styles.footerBlock}>
              <TitleFooter>العنوان</TitleFooter>
              <div className={Styles.infoBlock}>
                <ul className={Styles.addressInfo}>
                  <li className={Styles.addressInfoItem}>
                    <span className={Styles.icon}><FaPhone /></span>
                    <a className='transition' href={`tel:123-456-7890`}>123-456-7890</a>
                  </li>
                  <li className={Styles.addressInfoItem}>
                    <span className={Styles.icon}><FaRegEnvelope /></span>
                    <a className='transition' href={`mailto:info@company.com`}>info@company.com</a>
                  </li>
                  <li className={Styles.addressInfoItem}>
                    <span className={Styles.icon}><FaLocationDot /></span>
                    <span>الرياض، المملكة العربية السعودية</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 mb-5 order-1 col-md-6 mb-lg-0 order-lg-2 col-xl-2'>
            <div className={Styles.footerBlock}>
              <TitleFooter>أوقات العمل</TitleFooter>
              <div className={Styles.infoBlock}>
                <WorkHours/>
              </div>
            </div>
          </div>
          <div className='col-12 order-3 col-md-6 col-xl-3'>
            <div className={Styles.footerBlock}>
              <TitleFooter>النشرة البريدية</TitleFooter>
              <div className={Styles.infoBlock}>
                <p>إشترك بالنشرة البريدية لتصلك أخر الأخبار والعروض في مجال العقارات</p>
                <form autoComplete='on'>
                  <div className='w-100'>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      required 
                      autoComplete="email"
                    />
                  </div>
                  <button type="submit" className="submit transition">إرسال</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FooterMain