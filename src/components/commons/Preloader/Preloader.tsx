import React, {FC} from "react";
import imgPreloader from "./../../../assets/images/preloader.png"

const Preloader: FC = () => {
  return (
    <div>
      <img src={imgPreloader} alt="NoPhoto"/>
    </div>
  )
}

export default Preloader