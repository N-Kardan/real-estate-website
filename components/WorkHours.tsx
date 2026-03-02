import Styles from './WorkHours.module.css'

const WorkHours = () => {
  const days = [
    { name: 'السبت', hours: 'مغلق ' },
    { name: 'الأحد', hours: '9:00 - 17:00 ' },
    { name: 'الإثنين', hours: '9:00 - 17:00 ' },
    { name: 'الثلاثاء', hours: '9:00 - 17:00 ' },
    { name: 'الأربعاء', hours: '9:00 - 17:00 ' },
    { name: 'الخميس', hours: '9:00 - 15:00 ' },
    { name: 'الجمعة', hours: 'مغلق ' },
  ];

  const currentDayIndex = (new Date().getDay() + 1) % 7;

  return (
    <ul className={Styles.workHoursList}>
      {days.map((day, index) => (
        <li key={index} className={`${Styles.workHoursItem} ${ index === currentDayIndex ? Styles.highlight : "" }`}>
          <span className={Styles.dayName}>{day.name}</span>
          <span className={Styles.dayHours}>{day.hours}</span>
        </li>
      ))}
    </ul>
  );
};

export default WorkHours;
