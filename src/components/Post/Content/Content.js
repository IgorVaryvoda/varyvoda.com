import React from 'react';
import styles from './Content.module.scss';

const Content = ({ body, title }) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
    <script
  dangerouslySetInnerHTML={{
    __html: `
            Sirv.start();
        `,
  }}
/>
  </div>
);

export default Content;
