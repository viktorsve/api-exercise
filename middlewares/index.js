notFound = (req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Den gubben gick inte!');
}

module.exports = {notFound};
