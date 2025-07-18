'use client';

import { useEffect, useRef } from 'react';

const withLogger = (WrappedComponent) => {
  return function LoggerComponent(props) {
    const prevProps = useRef(props);

    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);

      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      if (prevProps.current !== props) {
        console.log(`${WrappedComponent.name} updated`);
        console.log('Previous props:', prevProps.current);
        console.log('Current props:', props);
        prevProps.current = props;
      }
    }, [props]);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
