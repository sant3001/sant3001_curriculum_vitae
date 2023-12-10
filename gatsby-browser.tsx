import 'bootstrap/dist/css/bootstrap.min.css';
import { WrapPageElementBrowserArgs } from 'gatsby';

export const wrapPageElement = (args: WrapPageElementBrowserArgs) => {
  const { element } = args;
  return element;
};

export default {};
