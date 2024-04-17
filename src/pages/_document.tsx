// import { CssBaseline } from '@nextui-org/react';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';
import React from 'react';

import { getCssText } from '../stitches.config';
import { AppConfig } from '../utils/AppConfig';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          {/* {CssBaseline.flush()} */}
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> */}
          <Script src="https://telegram.org/js/telegram-web-app.js"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
