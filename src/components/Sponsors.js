import React from 'react';
import clsx from 'clsx';
import styles from './Sponsors.module.css';

const SponsorList = [
  // {
  //   title: 'BrowserStack',
  //   logo: 'https://www.selenium.dev/images/sponsors/browserstack.png',
  //   link: 'https://www.browserstack.com/'
  // },
  // {
  //   title: 'SauceLabs',
  //   logo: 'https://www.selenium.dev/images/sponsors/saucelabs.png',
  //   link: 'http://saucelabs.com/'
  // },
  // {
  //   title: 'Applitools',
  //   logo: 'https://www.selenium.dev/images/sponsors/applitools.png',
  //   link: 'https://applitools.com/'
  // },
];

function Sponsor({logo, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <img src={logo} title={title}/>

    </div>
  );
}

export default function Sponsors() {
  return (
    <section className={styles.features}>
      {/* <h2 className={styles.sponsorsTitle}>Platinum Sponsors</h2> */}
      <div className="container">
        <div className="row">
          {SponsorList.map((props, idx) => (
            <Sponsor key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
