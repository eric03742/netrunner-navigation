import { useState } from 'react';

export default () => {
  const [isPure, setIsPure] = useState(false);
  return {
    isPure,
    setIsPure
  };
};