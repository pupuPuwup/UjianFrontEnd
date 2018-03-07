import React from 'react';
import '../styles/Style.css'

const Form = props =>
    <div className="container">
        <div className="panel-group">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h4 className="panel-title">{`${props.strPlayer} (${props.strPosition})`}</h4>
                    <div className="panel-body">
                        <img className="gambar" src={props.strThumb} alt={props.strPlayer}/>
                        <p>{props.strDescriptionEN}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
export default Form;