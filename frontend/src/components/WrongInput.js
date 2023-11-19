import React from 'react'
import {ToastContainer,toast} from "react-toastify";

function WrongInput() {
    const showToastMessage = () => {
        toast.error("Wrong Input !", {
          position: toast.POSITION.TOP_CENTER,
        });
      };
  return (
    <div name="WrongInput"><ToastContainer />
    {showToastMessage()}
    </div>
  )
}

export default WrongInput