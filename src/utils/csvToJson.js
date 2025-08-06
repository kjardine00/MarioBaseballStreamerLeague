/**
 * Converts CSV string to JSON array
 * @param {string} csvString - The CSV data as a string
 * @param {Object} options - Configuration options
 * @param {boolean} options.hasHeader - Whether the CSV has a header row (default: true)
 * @param {string} options.delimiter - CSV delimiter (default: ',')
 * @returns {Array} Array of objects representing the CSV data
 */
export function csvToJson(csvString, options = {}) {
  const { hasHeader = true, delimiter = ',' } = options;
  
  // Split the CSV into lines and filter out empty lines
  const lines = csvString.trim().split('\n').filter(line => line.trim());
  
  if (lines.length === 0) {
    return [];
  }
  
  // Parse the first line as headers if specified
  let headers = [];
  let dataLines = lines;
  
  if (hasHeader) {
    headers = lines[0].split(delimiter).map(header => header.trim().replace(/"/g, ''));
    dataLines = lines.slice(1);
  } else {
    // Generate default headers if no header row
    const firstLine = lines[0].split(delimiter);
    headers = firstLine.map((_, index) => `column${index + 1}`);
  }
  
  // Parse each data line
  const result = dataLines.map((line, lineIndex) => {
    const values = parseCSVLine(line, delimiter);
    const obj = {};
    
    headers.forEach((header, index) => {
      obj[header] = values[index] || '';
    });
    
    return obj;
  });
  
  return result;
}

/**
 * Parses a single CSV line, handling quoted values
 * @param {string} line - Single CSV line
 * @param {string} delimiter - CSV delimiter
 * @returns {Array} Array of values
 */
function parseCSVLine(line, delimiter) {
  const values = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  // Add the last value
  values.push(current.trim());
  
  return values;
}

/**
 * Converts JSON array back to CSV string
 * @param {Array} jsonArray - Array of objects to convert
 * @param {Object} options - Configuration options
 * @param {string} options.delimiter - CSV delimiter (default: ',')
 * @returns {string} CSV string
 */
export function jsonToCsv(jsonArray, options = {}) {
  const { delimiter = ',' } = options;
  
  if (jsonArray.length === 0) {
    return '';
  }
  
  // Get headers from the first object
  const headers = Object.keys(jsonArray[0]);
  
  // Create header row
  const headerRow = headers.map(header => `"${header}"`).join(delimiter);
  
  // Create data rows
  const dataRows = jsonArray.map(obj => {
    return headers.map(header => {
      const value = obj[header] || '';
      return `"${String(value).replace(/"/g, '""')}"`;
    }).join(delimiter);
  });
  
  return [headerRow, ...dataRows].join('\n');
} 