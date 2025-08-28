import styles from './style.less';
import { useState, useEffect } from 'react';
import { useLocation } from 'umi';
import IndexPage from '../INDEX'
import FACTIONPage from '../FACTION'
import BASICSPage from '../BASICS'
import RUNPage from '../RUN'
import ENVIRONMENTPage from '../ENVIRONMENT'
import COMMUNITYPage from '../COMMUNITY'

const Compoents = {
  'INDEX': <IndexPage />,
  'FACTION': <FACTIONPage />,
  'BASICS': <BASICSPage />,
  'RUN': <RUNPage />,
  'ENVIRONMENT': <ENVIRONMENTPage />,
  'COMMUNITY': <COMMUNITYPage />,
}

const HomePage = () => {
  const { hash } = useLocation();
  const [currentTab, setCurrentTab] = useState('INDEX')

  useEffect(() => {
    setCurrentTab(hash.startsWith('#') ? hash.substring(1) : 'INDEX');
  }, [hash])

  return (
    <div className={styles.container}>
      {Compoents[currentTab]}
    </div>
  );
};

export default HomePage;
