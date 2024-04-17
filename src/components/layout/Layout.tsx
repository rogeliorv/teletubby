import * as React from 'react';

import Footer from '@/components/layout/Footer';

export default function Layout({
  // eslint-disable-next-line unused-imports/no-unused-vars
  hideHeader,
  // eslint-disable-next-line unused-imports/no-unused-vars
  hideFooter,
  children,
}: {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}) {
  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
