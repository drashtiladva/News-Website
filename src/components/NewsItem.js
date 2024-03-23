import React, { Component } from 'react'

export class NewsItem extends Component {
    

  render() {
    let {title,description,imgurl,newsurl,author,date,source}=this.props;

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
      <img src={!imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlS2MyP82wFMKpr7e1CxfyAoqgDRx0Bg0seg&s":imgurl} height="150 px"className="card-img-top" alt="..."/>
        <div className="card-body">
        <h6><span className="badge bg-danger">{source}</span></h6>

           <h5 className="card-title">{title}</h5>
           <p className="card-text">{description}....</p>
           <p className='card-text'><small className='text-muted'>By {!author?"Unkown":author} on {new Date(date).toDateString()}</small></p>
           <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
