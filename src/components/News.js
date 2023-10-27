import React, { Component } from 'react'
import NewsItems from './NewsItems'
import SpinnerC from './SpinnerC';
import PropTypes from 'prop-types'

export class News extends Component {
    articles = [];
    apiKey = "b10b296132b642f39f71e50805ba45d1"
    defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }

    PropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        console.log('consturctor');
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
        let count = 0
        let countApiCall = count + 1
        console.log('countapicall', countApiCall);
        console.log("apiKey", this.apiKey);
    }

    firstLetterCapital(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    async componentDidMount(props) {
        let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&pageSize=${this.props.pageSize}`;
        let data = await fetch(newsApiUrl);
        this.setState({ loading: true })
        let parseData = await data.json()
        console.log('parseData', parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
        document.title = 'Sunshine News - ' + this.firstLetterCapital(this.props.category)
        // document.body.style.backgroundColor = 'red'
    }

    handlePreviousClick = async (props) => {
        let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(newsApiUrl);
        this.setState({ loading: true })
        let parseData = await data.json();
        console.log(" previous page parseData", parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            loading: false
        })
        document.title = 'Sunshine News ' + this.props.category
    }

    handleNextClick = async (props) => {
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        // } else {
        let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(newsApiUrl);
        this.setState({ loading: true })
        let parseData = await data.json();
        console.log(" next page parseData", parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page + 1,
            loading: false
        })
        document.title = 'Sunshine News ' + this.props.category
    }
    // }
    handleOnChange = async (event) => {
        console.log('event', event.target.value);
        // this.setState({ country: event.target.value })
        // console.log("this.setState",this.setState.country);
        // console.log("this.setState",this.setState.page);
        let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=${this.apiKey}`;
        let data = await fetch(newsApiUrl);
        let parseData = await data.json()
        console.log('parseData', parseData);
        this.setState({
            articles: parseData.articles,
            country: event.target.value
        })
        console.log('newsApiUrl', newsApiUrl);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3 className='text-center' style={{ marginTop: '4rem' }}>Sunshine News {this.firstLetterCapital(this.props.category)} Top Headlines</h3>
                    {this.state.loading && <SpinnerC />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItems title={element.title ? element.title.slice(0, 40) : ""}
                                        description={element.description ? element.description.slice(0, 80) : ""}
                                        imageUrl={element.urlToImage ? element.urlToImage : "https://www.shutterstock.com/image-vector/breaking-news-world-map-backgorund-260nw-640991758.jpg"} newsUrl={element.url}
                                        publishedDate={element.publishedAt} author={!element.author ? 'Unknown' : element.author} source={!element.source.name ? 'Unknown' : element.source.name} />
                                    {/* <NewsItems title={element.title.length > 25 ? element.title.substring(0,40) + "..." : element.title} description={element.description.length > 80 ? element.description.substring(0,80) + "..." : element.description}
                                        imageUrl={element.urlToImage ? element.urlToImage : "https://www.shutterstock.com/image-vector/breaking-news-world-map-backgorund-260nw-640991758.jpg"} newsUrl={element.url}
                                        publishedDate={element.publishedAt} /> */}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark"
                        onClick={this.handlePreviousClick}>&larr; Previous</button>
                    {/* <select name="" id="" value="country" onChange={this.handleOnChange}>
                        <option value="">Country</option>
                        <option value="in">India</option>
                        <option value="sl">Shrilanka</option>
                        <option value="us">US</option>
                    </select> */}
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-dark"
                        onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
