/**
 * Проверяет номер банковской карты алгоритмом Луна
 * @param {string} cardNumber - Номер карты в формате "4561-2612-1234-5464"
 * @returns {boolean} - true если номер валиден, false если нет
 */
function validateCardNumber(cardNumber) {
    // Проверка входных данных
    if (!cardNumber || typeof cardNumber !== 'string') {
        return false;
    }
    
    // Удаляем все дефисы и пробелы, оставляем только цифры
    const cleanNumber = cardNumber.replace(/[-\s]/g, '');
    
    // Проверяем, что остались только цифры
    if (!/^\d+$/.test(cleanNumber)) {
        return false;
    }
    
    // Проверяем длину номера (стандартные карты 13-19 цифр)
    if (cleanNumber.length < 13 || cleanNumber.length > 19) {
        return false;
    }
    
    let sum = 0;
    let isEvenPosition = false;
    
    // Проходим по цифрам справа налево
    for (let i = cleanNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cleanNumber[i]);
        
        // Удваиваем каждую вторую цифру (начиная с предпоследней)
        if (isEvenPosition) {
            digit *= 2;
            // Если результат больше 9, вычитаем 9 (эквивалентно сложению цифр)
            if (digit > 9) {
                digit -= 9;
            }
        }
        
        sum += digit;
        isEvenPosition = !isEvenPosition; // Переключаем флаг для следующей цифры
    }
    
    // Номер валиден если сумма делится на 10 без остатка
    return sum % 10 === 0;
}