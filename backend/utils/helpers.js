// Helper function to parse Range header
function parseRangeHeader(range) {
  const [, start, end] = range.match(/(\d+)-(\d+)?/);
  const parsedStart = parseInt(start, 10);
  const parsedEnd = end ? parseInt(end, 10) : undefined;

  // Ensure a default value for parsedEnd
  const defaultEnd = parsedEnd || parsedStart + 999999;

  return {
    start: parsedStart,
    end: defaultEnd,
  };
}

module.exports = { parseRangeHeader };
