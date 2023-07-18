import { useEffect, useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export const useMarkdownToHTML = (markdown: string) => {
  const [data, setData] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-void
    void (async () => {
      const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(markdown);

      setData(String(file));
    })();
  }, [markdown]);

  return data;
};

export default {};
