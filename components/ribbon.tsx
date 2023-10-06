import { Check, Hourglass, Clock9 } from 'lucide-react';

interface RibbonProps {
  startDate: Date;
  endDate: Date;
}

const Ribbon: React.FC<RibbonProps> = ({ startDate, endDate }) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const iconColor =
    startDate > currentDate || currentDate <= endDate
      ? 'bg-slate-800'
      : 'bg-green-600';

  const icon =
    startDate > currentDate ? (
      <Clock9 className='shrink-0 h-4 w-4' />
    ) : currentDate <= endDate ? (
      <Hourglass className='shrink-0 h-4 w-4' />
    ) : (
      <Check className='shrink-0 h-4 w-4' />
    );

  return (
    <span
      className={`flex justify-center w-6 text-sm p-1 absolute -right-1 -top-1 text-center rounded-3xl ${iconColor} text-white`}
    >
      {icon}
    </span>
  );
};

export default Ribbon;
