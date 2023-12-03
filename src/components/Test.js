{changeCard ? (
    <div class="cursor-default">
      <div>Name of Product:</div>
      <div>
        <input placeholder="Enter product name"></input>
      </div>
      <div>Stock number:</div>
      <div>
        <input placeholder="Enter items' stock number"></input>
      </div>
      <div>Sales number:</div>
      <div>
        <input placeholder="Enter number of sales"></input>
      </div>
      <div>Ratings</div>
      <div>
        <input placeholder="Enter rating in decimal"></input>
      </div>
      <div>
        <button>Add Product</button>
      </div>
    </div>
  ) : (
    <>
      <div class="text-2xl">Add New Product</div>
      <div>{elem1}</div>
    </>
  )}