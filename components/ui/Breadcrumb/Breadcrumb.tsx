'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Styles from './Breadcrumb.module.css';
import { Fragment } from 'react';

const routeTranslations: { [key: string]: string } = {
  properties: 'عقاراتنا',
  service: 'خدماتنا',
  agents: 'وكلائنا',
  blog: 'مدونتنا',
  contactUs: 'تواصل معنا',
  about: 'من نحن',
};

interface BreadcrumbProps {
  customCurrentTitle?: string;
}

const Breadcrumb = ({ customCurrentTitle }: BreadcrumbProps) => {
  const pathname = usePathname();
  
  const pathSegments = pathname.split('/').filter((segment) => segment);
  
  if (pathSegments.length === 0) {
    return null;
  }
  
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const isLast = index === pathSegments.length - 1;
    
    let label = routeTranslations[segment] || segment;
    
    if (!routeTranslations[segment]) {
        label = segment.replace(/-/g, ' ');
    }
    
    if (isLast && customCurrentTitle) {
      label = customCurrentTitle;
    }

    return {
      label,
      href,
      isLast,
    };
  });

  return (
    <nav aria-label="breadcrumb" className={Styles.breadcrumbNav}>
      <div className="container">
        <ol className={Styles.breadcrumbList}>
          <li className={Styles.breadcrumbItem}>
            <Link href="/" className={Styles.link}>الرئيسية</Link>
          </li>
          
          {breadcrumbs.map((crumb, index) => (
            <Fragment key={index}>
              <li className={Styles.separator}>/</li>
              <li 
                className={`${Styles.breadcrumbItem} ${crumb.isLast ? Styles.active : ''}`}
                aria-current={crumb.isLast ? 'page' : undefined}
              >
                {crumb.isLast ? (
                  <span>{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className={Styles.link}>
                    {crumb.label}
                  </Link>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;