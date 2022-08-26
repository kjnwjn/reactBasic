import { Component } from "react";
import  "./CardList.style.scss";

class CardList extends Component {
    render(){
        const copyMonsters = this.props.copyMonsters
        return( 
            <div className="card-list">
                {copyMonsters.map((item,index)=> {
                        let {name,email,id} = item
                        return (

                        <div key={id} className="card-container">
                            <img src={`https://robohash.org/${id}?set=set2&size=300x300`}></img>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                        )
                    })}
            </div>
        )
    }
}

export default CardList