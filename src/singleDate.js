
/**
 * format date by given format object
 * @param {Date} date 
 * @param {object} format 
 * @returns string formated date
 */
function formatDate(date, format, locale = false) {

	if(!locale) {
		locale = navigator.language || navigator.userLanguage;
	}
	
	const locale = window.eventBlockLocale.lang;
	const dateFormatObject  = new Intl.DateTimeFormat(locale, format);
	return dateFormatObject.format(date * 1000);
}

export { formatDateRange, formatDate };