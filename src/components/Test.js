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

  <div className='header-right'>
            <BsFillBellFill className='icon' id='header-icon' onClick={toggleDropDown1}/>
            {/*Drop down functionality */
            isDropDown1Open && (
              <div class="absolute bg-hovery shadow-sm w-auto h-auto right-9 mt-7">
                <div><button>View Alerts</button></div>
                <div><button onClick={toggleDropDown2}>Create Alert
                {isDropDown2Open && (
                  <div></div>
                )}
                 </button>
                 
                </div>
              </div>
            )
            
            
            }
            {/* <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon' /> */}
        </div>