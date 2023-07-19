import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';

const queryClient = new QueryClient();

export const wrapPageElement = (args: WrapPageElementBrowserArgs) => {
  const { element, props } = args;
  console.log('element, props', { element, props })
  return <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>;
};

export default {};
