const Footer = ({ items }) => {
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItem) * 100;

  console.log(percentage);

  return (
    <div className="footerWrapper">
      {percentage === 100
        ? "Shopping Done"
        : `Total Item: ${numItem} - Completed Item: ${numPacked} In percentage: ${
            numItem > 0 ? percentage.toFixed(2) : "0.00"
          }`}
    </div>
  );
};

export default Footer;
