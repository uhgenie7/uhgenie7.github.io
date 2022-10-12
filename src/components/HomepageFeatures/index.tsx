import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '개발',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        새롭게 알게 된 것을 확인하고, 기록하고, 적용하여 자신의 것으로 만드려고
        노력합니다.
      </>
    ),
  },
  {
    title: '기록',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        기록을 남겨둔 과거의 자신에게 고마워한 적이 있었나요? 저는 있었답니다.
        미래의 자신을 위해 기록합니다.
      </>
    ),
  },
  {
    title: '에러 해결',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>제 해결법이 여러분에게도 도움이 되길 바랍니다.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
