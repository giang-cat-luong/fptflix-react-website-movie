import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
export default function ModelCase({setIsOpen,data}) {
    return (
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id="modal1" className="modal" style={{display:'block',top:'35%'}}>
                <div className="modal-content">
                    <h4>{data.title}</h4>
                    <p><iframe width="100%" height="515" src={data.trailer} 
                    title={data.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                </div>
                <div className="modal-footer">
                    <a className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        </div>
    )
}
