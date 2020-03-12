const moment = require('moment');
function isToday(dateParameter) {
    const today = moment(new Date())
      .tz(settings('timezone'))
      .format('MM/DD/YY');
    const dateCheck = moment(new Date(dateParameter))
      .tz(settings('timezone'))
      .format('MM/DD/YY');
    if (dateParameter) {
      const startDate = moment(today);
      const endDate = moment(dateCheck);
      const difference = endDate.diff(startDate, 'days');
      if (today === dateCheck || difference < 0) {
        return true;
      }
      return false;
    }
    return undefined;
}