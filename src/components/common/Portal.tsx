import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { StrictPropsWithChildren } from '../../types/utils';

type PortalProps = {
  isOpened: boolean;
};

const Portal = ({ isOpened = false, children }: StrictPropsWithChildren<PortalProps>) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    rootRef.current = document.getElementById('portal-root') as HTMLDivElement;
    setIsMounted(true);
  }, []);

  return isOpened && isMounted && rootRef.current
    ? ReactDOM.createPortal(children, rootRef.current)
    : null;
};

export default Portal;
