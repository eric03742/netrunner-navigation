import styles from './style.less';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'umi';
import Spin from '@/component/spin'

// 使用 lazy 动态导入组件
const IndexPage = lazy(() => import('../INDEX'));
const FACTIONPage = lazy(() => import('../FACTION'));
const BASICSPage = lazy(() => import('../BASICS'));
const RUNPage = lazy(() => import('../RUN'));
const ENVIRONMENTPage = lazy(() => import('../ENVIRONMENT'));
const COMMUNITYPage = lazy(() => import('../COMMUNITY'));

const Components = {
  'INDEX': IndexPage,
  'FACTION': FACTIONPage,
  'BASICS': BASICSPage,
  'RUN': RUNPage,
  'ENVIRONMENT': ENVIRONMENTPage,
  'COMMUNITY': COMMUNITYPage,
};

const HomePage = () => {
  const { hash } = useLocation();
  const [currentTab, setCurrentTab] = useState('INDEX');

  useEffect(() => {
    setCurrentTab(hash.startsWith('#') ? hash.substring(1) : 'INDEX');
  }, [hash]);

  const CurrentComponent = Components[currentTab];

  return (
    <div className={styles.container}>
      <Suspense fallback={
        <Spin />
      }>
        {CurrentComponent && <CurrentComponent />}
      </Suspense>
    </div>
  );
};

export default HomePage;