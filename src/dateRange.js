/**
 * Formats two dates to a date range
 * @param {Date} start 
 * @param {Date} end 
 * @returns string formatted date
 */
function formatDateRange(start, end, locale = false) {

	if(!locale) {
		locale = navigator.language || navigator.userLanguage;
	}

	start = new Date(start * 1000);
	end = new Date(end * 1000);

	const sameDay = start.getFullYear() === end.getFullYear() &&
		start.getMonth() === end.getMonth() &&
		start.getDate() === end.getDate();
	

	let dateFormat = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		
	};

	if(sameDay) {
		dateFormat = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
    		minute: 'numeric'
		};
	}

	const dateFormatObject  = new Intl.DateTimeFormat(locale, dateFormat);
	return dateFormatObject.formatRange(start, end);
	
}