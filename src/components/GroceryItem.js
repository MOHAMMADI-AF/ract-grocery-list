const GroceryItem = ({ ele }) => {
  return (
    <div className="each">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Brand</th>
            <th>Units</th>
            <th>Quantity</th>
            <th>Purchased?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ele.item}</td>
            <td>{ele.brand}</td>
            <td>{ele.units}</td>
            <td>{ele.quantity}</td>
            <td>
              {ele.isPurchased === true ? (
                <input type="checkbox" checked></input>
              ) : (
                <input type="checkbox"></input>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GroceryItem;
