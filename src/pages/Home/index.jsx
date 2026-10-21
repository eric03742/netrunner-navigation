import styles from './style.less';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'umi';
import Spin from '@/component/spin'

// 使用 lazy 动态导入组件
const IndexPage = lazy(() => import('../INDEX'));
const FACTIONPage = lazy(() => import('../FACTION'));
const BEGINNERPage = lazy(() => import('../BASICS'));
const BASICS = lazy(() => import('../BASICSLANDING'));
const TIME = lazy(() => import('../TIME'));
const DECK = lazy(() => import('../DECK'));
const VIDEO = lazy(() => import('../VIDEO'));
const TUTORIAL = lazy(() => import('../TUTORIAL'));
const RUNPage = lazy(() => import('../RUN'));
const CHRONICLESPage = lazy(() => import('../CHRONICLES'));
const DEEPNETPage = lazy(() => import('../DEEPNET'));
const ENVIRONMENTPage = lazy(() => import('../ENVIRONMENT'));
const COMMUNITYPage = lazy(() => import('../COMMUNITY'));
const ENTRYPage = lazy(() => import('../ENTRY'));

const Components = {
  'INDEX': IndexPage,
  'FACTION': FACTIONPage,
  'BEGINNER': BEGINNERPage,
  'TIME': TIME,
  'BASICS': BASICS,
  'VIDEO': VIDEO,
  'TUTORIAL': TUTORIAL,
  'RUN': RUNPage,
  'CHRONICLES': CHRONICLESPage,
  'DEEPNET': DEEPNETPage,
  'ENVIRONMENT': ENVIRONMENTPage,
  'COMMUNITY': COMMUNITYPage,
  'DECK': DECK,
  'ENTRY': ENTRYPage
};

const HomePage = () => {
  const { hash } = useLocation();
  const [currentTab, setCurrentTab] = useState('INDEX');

  useEffect(() => {
    setCurrentTab(hash.startsWith('#') ? hash.substring(1) : 'INDEX');
  }, [hash]);

  const CurrentComponent = Components[currentTab] || null;

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