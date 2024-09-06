import dummyData from '../../utils/dummyData';

export default function handler(req, res) {
  const { range } = req.query;
  let filteredData = dummyData[range] || dummyData['1 Week'];
  res.status(200).json(filteredData);
}
