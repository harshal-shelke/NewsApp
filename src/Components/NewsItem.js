import React, {  } from 'react'

const NewsItem =(props)=> {

    let {title, desc, imgurl, newUrl, author, date,source,colr}=props
    return (
      <div>
          <div className="card mb-4">
            <div>
          <span className={` badge rounded-pill bg-${colr}`} style={{display: 'flex',
                  position: 'absolute',right: '0',justifyContent: 'flex-end', margin:'3px'}}> {source}</span>
          </div> 
            <img src={!imgurl?"https://imgs.search.brave.com/oB6fgT45DC10B0RQfk3kTBtZ0W-2p7udZUxPnfvKT3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzYyLzkzLzY2/LzM2MF9GXzQ2Mjkz/NjY4OV9CcEVFY3hm/Z011WVBmVGFJQU9D/MXRDRHVybXNubzdT/cC5qcGc":imgurl} className="card-img-top " alt="..."/>

            <div className="card-body">
                        <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <p className="card-text"><small className="text-body-secondary " >By {author?author:"Unknown"} On {new Date(date).toGMTString()}</small></p>
              <a href={newUrl} rel="noreferrer" target='_blank' className="btn btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
}

export default NewsItem