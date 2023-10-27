import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let { title, description, imageUrl,newsUrl,publishedDate,author,source } = this.props
        return (
            <div>
                <div className="card my-2">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
                        <p><span className="badge bg-danger">Source : {source}</span></p>
                        <p className="card-text"><small className="text-muted">{author} Last updated {new Date(publishedDate).toDateString()} ago</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
