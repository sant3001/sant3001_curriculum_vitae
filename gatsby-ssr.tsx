import 'bootstrap/dist/css/bootstrap.min.css';
import { WrapPageElementNodeArgs } from 'gatsby';

export const wrapPageElement = (args: WrapPageElementNodeArgs) => {
  const { element } = args;
  return element;
};

export default {};
