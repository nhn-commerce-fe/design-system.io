import { ReactNode, useState } from 'react';
import classnames from 'classnames';

interface QnaProps {
  query: string;
  children?: ReactNode;
}

export const Qna = ({ query, children }: QnaProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <dl className={classnames('qna', isVisible ? 'is-active' : '')}>
      <dt className="qna__tit">
        <button type="button" onClick={() => setIsVisible((prev) => !prev)}>
          {query}
        </button>
      </dt>
      <dd className="qna__answer">{children}</dd>
    </dl>
  );
};
