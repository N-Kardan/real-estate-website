import styles from './Title.module.css';

interface TitleSectionProps {
  subTitle: string;
  mainTitle: string;
  className?: string;
  h2style?: React.CSSProperties;
}
interface TitleFooterProps {
  children: React.ReactNode;
}

const TitleSection = ({ subTitle, mainTitle, className, h2style }: TitleSectionProps) => {
  return (
    <div className='row'>
      <div className='col-12'>
        <div className={`${styles.sectionTitle} ${className || ''}`}>
          <p>{subTitle}</p>
          <h2 style={h2style}>{mainTitle}</h2>
        </div>
      </div>
    </div>
  )
}

const TitleFooter = ({ children }: TitleFooterProps) => {
  return (
    <h3 className={styles.footerTitle}>{children}</h3>
  )
}

export default TitleSection
export {TitleFooter}