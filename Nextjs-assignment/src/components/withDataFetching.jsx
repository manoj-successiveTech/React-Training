'use client';

const withDataFetching = (Component) => {
  return function Wrapper({ data }) {
    return <Component data={data} />;
  };
};

export default withDataFetching;

