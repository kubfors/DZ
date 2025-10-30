function filterAndFormatDates(dateStrings) {
    const result = [];
    dateStrings.forEach(dateStr => {let day, month, year;
        if (dateStr.includes('-')) {
            const parts = dateStr.split('-');
            if (parts.length === 3) {
                day = parseInt(parts[0]);
                month = parseInt(parts[1]);
                year = parseInt(parts[2]);
            }
        } else if (dateStr.includes('/')) {
            const parts = dateStr.split('/');
            if (parts.length === 3) {
                month = parseInt(parts[0]);
                day = parseInt(parts[1]);
                year = parseInt(parts[2]);
                }
        }
        if (day && month && year) {
            if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
                const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if (day <= daysInMonth[month - 1]) {
                    const formattedDay = String(day).padStart(2, '0');
                    const formattedMonth = String(month).padStart(2, '0');
                    result.push(`${formattedDay}-${formattedMonth}-${year}`);
                }
            }
        }
    });
    return result;
}