import React from 'react'

const  NewsItem =(props)=>{

    

        let { title, description , imgUrl, newsUrl, author, date} = props

        return (

            <div className="container my-3">

                <div className="card" >
                    <img src={!imgUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/220804014311-01-china-taiwan-080422.jpg?c=16x9&q=w_800,c_fill" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By <strong>{author}</strong> on {new Date (date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>

            </div>
        )
    
}
export default NewsItem;