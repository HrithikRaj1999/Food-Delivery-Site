export const findKey = (obj, targetKey) => {
    for (const key in obj) {
        if (key === targetKey) {
            return obj[key];
        } else if (typeof obj[key] === 'object') {
            const result = findKey(obj[key], targetKey);
            if (result !== false) {  // Check for false result
                return result;
            }
        }
    }
    return false;  // Return false if key is not found
};