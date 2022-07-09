import React from 'react'
import './css/YourOrders.css'
export default function YourOrders() {
  document.title='Cart';

  return (
    <div className='main_1'>
      <div className="container">
        <div className="order_section">
            <div className="order">
              Clothes for Dry Cleaning
              <div>
                No of Clothes = X
              </div>
              <div>
                Total Amount = Y 
              </div>
            </div>

            <div className="order">
            Clothes for Iron

            <div>
                No of Clothes = X
              </div>
              <div>
                Total Amount = Y 
              </div>            
              </div>

              <div className="order">
              Clothes for Washing
              <div>
                No of Clothes = X
              </div>
              <div>
                Total Amount = Y 
              </div>
            </div>        
            </div>
      </div>
    </div>
  )
}
