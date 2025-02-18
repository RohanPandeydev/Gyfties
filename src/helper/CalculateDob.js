import moment from 'moment';

const calculateDaysUntilNextBirthday = (dob) => {
  const today = moment();
  const birthDate = moment(dob);  // Parse the ISO 8601 string directly
  const thisYearBirthday = moment([today.year(), birthDate.month(), birthDate.date()]);

  let nextBirthday;
  if (thisYearBirthday.isAfter(today)) {
    nextBirthday = thisYearBirthday;
  } else {
    nextBirthday = moment([today.year() + 1, birthDate.month(), birthDate.date()]);
  }

  const days = nextBirthday.diff(today, 'days');
  return days;
};

export default calculateDaysUntilNextBirthday;