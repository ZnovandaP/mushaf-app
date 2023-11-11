const chunkArray = <T>(array: T[], chunkSize: number) => {
  const size = Math.ceil(array.length / chunkSize);
  const chunkOfArray = Array.from(new Array(size).fill(0));
  return chunkOfArray.map((item, index) => {
    const start = index * chunkSize;
    const end = (index + 1) * chunkSize;
    return array.slice(start, end);
  });
};

export default chunkArray;
