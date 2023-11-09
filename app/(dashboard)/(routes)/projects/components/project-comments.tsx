'use client';

import { useEffect, useRef } from 'react';

import { Card } from '@/components/ui/card';

import { mockComments } from './mockCommentsData';

const ProjectComments = () => {
  const comments = mockComments;
  const alignStyle = 'right-comment';

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () =>
    bottomRef.current?.scrollTo({
      top: bottomRef.current?.scrollHeight,
      behavior: 'smooth',
    });

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Card ref={bottomRef} className='p-2 h-[calc(100vh-19rem)] overflow-auto'>
      {comments.map((comment) => (
        <div key={comment.id} className={alignStyle}>
          <span className='userId'>Gabriel Badarau</span>
          <span className='createdAt'>{comment.createdAt}</span>
          <span className='comment'>{comment.comment}</span>
        </div>
      ))}
    </Card>
  );
};
export default ProjectComments;
