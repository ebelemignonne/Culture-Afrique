import React from "react";
import "./TopBarre.css";
import afrique from "../Image_Culture_Africa/Photos/afrique.gif";




class TopBarre extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
          <div className="TopBarre center_arow">
            <img className="logo_TopBarre" src={afrique} alt-="afrique" />
            <div className="searh_TopBarre center_arow">
              <i class="fa-solid fa-magnifying-glass"></i>
              <p className="p_topBarre">Recherche</p>
            </div>
            <label className="searh_TopBarre center_arow">
              <i class="fa-solid fa-magnifying-glass"></i>
              < input type="text" placeholder="Recherche" />
            </label>
          </div>
        );
    }
}

export default TopBarre 