import * as React from 'react';

const useDocumentTitle = (title?:string) => {
  const defaultTitle = 'Mushaf App';
  const titleRef = React.useRef(document.title);

  React.useEffect(() => {
    if (title) {
      titleRef.current = title;
      document.title = `${titleRef.current} | ${defaultTitle}`;
    } else {
      document.title = defaultTitle;
    }
  }, [title]);
};

export default useDocumentTitle;
