import { useEffect, useState } from 'react';

const withErrorBoundary = (WrappedComponent) => {
  const NewComponent = (props) => {
    const [hasError, setHasError] = useState(false);
    const [, setErrorInfo] = useState(null);

    useEffect(() => {
      const handleComponentError = (error, errorInfo) => {
        setHasError(true);
        setErrorInfo(errorInfo);
        // You can also log the error to an error reporting service here
      };

      window.addEventListener('error', handleComponentError);

      return () => {
        window.removeEventListener('error', handleComponentError);
      };
    }, []);

    if (hasError) {
      // You can customize the fallback UI or error message here
      return <div>Something went wrong. Please try again later.</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return NewComponent;
};

export default withErrorBoundary;
