import { CSSProperties } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};
const Loader = ({ color, loading }: any) => {
  return (
    <BeatLoader
      color={color}
      loading={loading}
      size={8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
