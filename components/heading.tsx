interface HeadingProps {
  title: string;
}

export const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div>
      <h2 className='text-2xl font-semibold leading-none tracking-tight'>
        {title}
      </h2>
    </div>
  );
};
