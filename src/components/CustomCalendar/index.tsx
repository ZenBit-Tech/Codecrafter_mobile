import { FC } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import Label from './components/Label';
import { GlobalStyle, StyledCalendar } from './styles';
import useCalendar from './useCalendar';

const CustomCalendar: FC = () => {
  const {
    currentDate,
    isExpanded,
    prevLabel,
    nextLabel,
    isInRange,
    renderCustomHeader,
    handleActiveStartDateChange,
    renderTileContent,
    handleDateChange,
  } = useCalendar();

  return (
    <StyledCalendar $isExpanded={isExpanded}>
      <GlobalStyle />
      <Calendar
        activeStartDate={currentDate}
        tileClassName={({ date, view }) =>
          view === 'month' && !isInRange(date) ? 'displayNone' : ''
        }
        tileContent={({ date, view }) => renderTileContent(date, view)}
        value={currentDate}
        onChange={(newDate) => handleDateChange(newDate)}
        onActiveStartDateChange={handleActiveStartDateChange}
        prevLabel={<Label monthName={prevLabel} isRightArrow={false} />}
        nextLabel={<Label monthName={nextLabel} />}
        next2Label=''
        prev2Label=''
        view='month'
        navigationLabel={(date) => renderCustomHeader(date)}
      />
    </StyledCalendar>
  );
};

export default CustomCalendar;
