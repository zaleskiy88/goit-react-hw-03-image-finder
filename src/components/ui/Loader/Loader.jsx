import { Bars } from 'react-loader-spinner';
import { Spinner } from 'index';

export const Loader = () => {
  return (
    <Spinner>
      <Bars
        height="150"
        width="100"
        color="#6d5adb"
        ariaLabel="bars-loading"
        visible={true}
      />
    </Spinner>
  );
};
