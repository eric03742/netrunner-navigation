import styles from './index.less';
import { useState, useEffect } from 'react';
import { history, useLocation } from 'umi';

const HomePage = () => {
  const { hash } = useLocation();
  const [currentTab, setCurrentTab] = useState('INDEX')

  useEffect(() => {
    setCurrentTab(hash.startsWith('#') ? hash.substring(1) : 'INDEX');
  }, [hash])

  return (
    <div className={styles.container}>
      首页
    </div>
  );
};

export default HomePage;
