import { addMonths, format, subMonths } from 'date-fns';
import { ReactElement, useState } from 'react';
import { OnArgs } from 'react-calendar';
import { Value } from 'react-calendar/dist/esm/shared/types.js';

import CalendarHeader from './components/CalendarHeader';
import { StyledWeekday } from './styles';

const useCalendar = (): {
  currentDate: Date;
  isExpanded: boolean;
  prevLabel: string;
  nextLabel: string;
  isInRange: (date: Date) => boolean;
  renderCustomHeader: ({ date }: { date: Date }) => JSX.Element;
  handleActiveStartDateChange: ({ action, activeStartDate }: OnArgs) => void;
  renderTileContent: (date: Date, view: string) => ReactElement | null;
  handleDateChange: (newDate: Value) => void;
} => {
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return today;
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [prevLabel, setPrevLabel] = useState(
    `${format(subMonths(currentDate, 1), 'MMM')}`
  );
  const [nextLabel, setNextLabel] = useState(
    `${format(addMonths(currentDate, 1), 'MMM')}`
  );

  const renderTileContent = (date: Date, view: string): ReactElement | null => {
    if (view === 'month') {
      return (
        <StyledWeekday>{isExpanded ? '' : format(date, 'EEE')}</StyledWeekday>
      );
    }

    return null;
  };

  const handleActiveStartDateChange = ({
    action,
    activeStartDate,
  }: OnArgs): void => {
    if (activeStartDate && (action === 'next' || action === 'prev')) {
      setPrevLabel(`${format(subMonths(activeStartDate, 1), 'MMM')}`);
      setNextLabel(`${format(addMonths(activeStartDate, 1), 'MMM')}`);
      setCurrentDate(activeStartDate);
    }
  };

  const isInRange = (date: Date): boolean => {
    if (isExpanded) return true;
    const start = new Date(currentDate);
    const end = new Date(currentDate);
    const dateRange = 2;

    start.setDate(start.getDate() - dateRange);
    end.setDate(end.getDate() + dateRange);

    return date >= start && date <= end;
  };

  const renderCustomHeader = ({ date }: { date: Date }): JSX.Element => {
    const handleCalendarClick = (): void => {
      setIsExpanded(!isExpanded);
    };

    return (
      <CalendarHeader
        date={date}
        isExpanded={isExpanded}
        handleHeaderClick={handleCalendarClick}
      />
    );
  };

  const handleDateChange = (newDate: Value): void =>
    setCurrentDate(newDate as Date);

  return {
    currentDate,
    isExpanded,
    prevLabel,
    nextLabel,
    isInRange,
    renderCustomHeader,
    handleActiveStartDateChange,
    renderTileContent,
    handleDateChange,
  };
};

export default useCalendar;
