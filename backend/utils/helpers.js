// Helper function to parse Range header
function parseRangeHeader(range) {
    const [, start, end] = range.match(/(\d+)-(\d+)?/);
    return {
      start: parseInt(start, 10),
      end: end ? parseInt(end, 10) : undefined,
    };
  }
  
  module.exports = { parseRangeHeader };