import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    // articles = [

    //     {
    //         "source": {
    //           "id": "the-washington-post",
    //           "name": "The Washington Post"
    //         },
    //         "author": "Joby Warrick",
    //         "title": "After a deadly 2009 attack, the CIA's hunt for Zawahiri became personal - The Washington Post",
    //         "description": "Nothing in official U.S. statements describe Zawahiri’s death as payback for the CIA losses in 2009 at Khost, Afghanistan. But for many at the agency that’s exactly how it felt.",
    //         "url": "https://www.washingtonpost.com/national-security/2022/08/03/zawahiri-khost-cia/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZHP35OQR5MI63BECA3A4QTHI6I.jpg&w=1440",
    //         "publishedAt": "2022-08-04T01:30:00Z",
    //         "content": "Comment on this story\r\nIt was one of the darkest days in CIA history: Seven operatives killed after being lured by a rogue informant into a deadly trap. In the years since, memories of the 2009 disas… [+6292 chars]"
    //       },

    //     {
    //       "source": {
    //         "id": "reuters",
    //         "name": "Reuters"
    //       },
    //       "author": null,
    //       "title": "U.S. lawmaker Walorski, two staffers die in Indiana car crash - Reuters",
    //       "description": "U.S. Congresswoman Jackie Walorski and two members of her staff died on Wednesday when the vehicle they were traveling in collided head-on with a car that veered into their lane, police in Indiana and her office said.",
    //       "url": "https://www.reuters.com/world/us/congresswoman-jackie-walorski-dies-car-crash-local-media-outlet-reports-2022-08-03/",
    //       "urlToImage": "https://www.reuters.com/resizer/OGOr0hmQA5odsSrHb-gVB1I0WFE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3XG4F6D6URJOREQE3UOAVPGZ7I.jpg",
    //       "publishedAt": "2022-08-04T09:18:00Z",
    //       "content": "WASHINGTON, Aug 3 (Reuters) - U.S. Congresswoman Jackie Walorski and two members of her staff died on Wednesday when the vehicle they were traveling in collided head-on with a car that veered into th… [+2880 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": "the-washington-post",
    //         "name": "The Washington Post"
    //       },
    //       "author": "Lily Kuo, Christian Shepherd, Ellen Nakashima",
    //       "title": "China begins military exercises near Taiwan after Nancy Pelosi's visit - The Washington Post",
    //       "description": "Chinese state TV said the Eastern Theater Command of the People’s Liberation Army had carried out “precision strikes” on the eastern parts of the strait.",
    //       "url": "https://www.washingtonpost.com/world/2022/08/04/taiwan-china-military-exercises-pelosi/",
    //       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YXJ2B2ATVAI63BECA3A4QTHI6I.jpg&w=1440",
    //       "publishedAt": "2022-08-04T09:04:00Z",
    //       "content": "Comment on this story\r\nTAIPEI, Taiwan China unleashed a show of force against Taiwan on Thursday, firing missiles into the sea and threatening the islands territorial waters in retaliation for Taipei… [+6503 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": "cnn",
    //         "name": "CNN"
    //       },
    //       "author": "Oliver Darcy",
    //       "title": "Sandy Hook family attorney exposes Alex Jones' dishonesty during brutal cross-examination - CNN",
    //       "description": "The dishonesty of right-wing conspiracy theorist Alex Jones was spotlighted in a Texas court on Wednesday as a lawyer for a pair of Sandy Hook parents cross-examined the Infowars founder and fact-checked his answers in real-time.",
    //       "url": "https://www.cnn.com/2022/08/03/media/alex-jones-sandy-hook-trial/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220803124445-alex-jones-aug-3.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2022-08-04T08:33:00Z",
    //       "content": "The dishonesty of right-wing conspiracy theorist Alex Jones was spotlighted in a Texas court on Wednesday as a lawyer for a pair of Sandy Hook parents cross-examined the Infowars founder and fact-che… [+3536 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": "cnn",
    //         "name": "CNN"
    //       },
    //       "author": "Brad Lendon",
    //       "title": "China fires missiles near Taiwan in live-fire drills as PLA encircles island - CNN",
    //       "description": "China fired multiple missiles toward waters near northeastern and southwestern Taiwan on Thursday, the island's Defense Ministry said, as Beijing makes good on its promise that Taipei will pay a price for hosting US House Speaker Nancy Pelosi.",
    //       "url": "https://www.cnn.com/2022/08/04/asia/china-taiwan-military-exercises-intl-hnk-ml/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220804014311-01-china-taiwan-080422.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2022-08-04T08:11:00Z",
    //       "content": "China fired multiple missiles toward waters near northeastern and southwestern Taiwan on Thursday, the islands Defense Ministry said, as Beijing makes good on its promise that Taipei will pay a price… [+6910 chars]"
    //     },


    //     {
    //       "source": {
    //         "id": "the-washington-post",
    //         "name": "The Washington Post"
    //       },
    //       "author": "Steven Zeitchik",
    //       "title": "Solana, Nomad crypto wallets are hacked, with losses in the tens of millions - The Washington Post",
    //       "description": "Exploitations of Solana and Nomad have some questioning if crypto’s speed is worth the cost.",
    //       "url": "https://www.washingtonpost.com/technology/2022/08/03/solana-nomad-hacks-security-questions/",
    //       "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XZ7HFZQTAMI63BECA3A4QTHI6I.jpg&w=1440",
    //       "publishedAt": "2022-08-04T03:42:00Z",
    //       "content": "Comment on this story\r\nA pair of crypto hacks totaling nearly $200 million in losses and probably affecting more than 10,000 users has prompted worry in an industry already unsettled by falling price… [+5333 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "SciTechDaily"
    //       },
    //       "author": null,
    //       "title": "Massive Tonga Volcano Eruption Blasted Enough Water To Fill 58,000 Olympic-Size Swimming Pools Into Stratosphere - SciTechDaily",
    //       "description": "The unprecedented amount of water vapor hurled into the atmosphere, as detected by NASA’s Microwave Limb Sounder, could end up warming Earth’s surface temporarily. On January 15, 2022, the Hunga Tonga-Hunga Ha’apai volcano erupted, setting off a sonic boom th…",
    //       "url": "https://scitechdaily.com/massive-tonga-volcano-eruption-blasted-enough-water-to-fill-58000-olympic-size-swimming-pools-into-stratosphere/",
    //       "urlToImage": "https://scitechdaily.com/images/Hunga-Tonga-Erupts.gif",
    //       "publishedAt": "2022-08-04T03:22:45Z",
    //       "content": "ByJet Propulsion LaboratoryAugust 3, 2022\r\nThis looping video shows an umbrella cloud generated by the underwater eruption of the Hunga Tonga-Hunga Haapai volcano on Jan. 15, 2022. The GOES-17 satell… [+6013 chars]"
    //     },



    //     {
    //       "source": {
    //         "id": null,
    //         "name": "CNBC"
    //       },
    //       "author": "Tanaya Macheel",
    //       "title": "Stock futures fall slightly following 400-point rally in the Dow - CNBC",
    //       "description": "The major averages on Wednesday snapped a two-day slide, as robust earnings and stronger economic data helped investors look beyond a possible recession.",
    //       "url": "https://www.cnbc.com/2022/08/03/stock-market-news-futures-open-to-close.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107094935-1658962161236-nyse2.jpg?v=1658962179&w=1920&h=1080",
    //       "publishedAt": "2022-08-04T00:37:00Z",
    //       "content": "Stock futures inched downward Wednesday evening after the major averages snapped a two-day slide, helped by robust earnings and stronger economic reports for June and July that led investors to look … [+1409 chars]"
    //     }

    //   ]

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)




    const updateNews = async () => {

        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=66d6e8c0eeb643518f3424f11b5dcacc&page=1&pageSize=${props.pageSize}`;
        setLoading(true ) // i am using this here because when this url will hit so if network is slow so content will no reload fast then you will face loading gif
        let data = await fetch(url);

        props.setProgress(50)

        let parsedData = await data.json();

        props.setProgress(75)
    
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100)
    }

   

    useEffect(() => {
      
    
      return () => {
        updateNews();
      }

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //above line is from stack overflow to remove useeffect error
    
    

    // nextButton = async () => {

    //     updateNews();
    //        
    //     setPage(page+1);

    // }

    // preButton = async () => {

    //     updateNews();
    
    //     setPage(page-1);

   
    // }

    const fetchMoreData = async () => {


        setPage( page + 1 )
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=66d6e8c0eeb643518f3424f11b5dcacc&page=${page+1}&pageSize=${props.pageSize}`;
        // this.setState({ loading: true }) 
        // i am using this here because when this url will hit so if network is slow so content will no reload fast then you will face loading gif
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults( parsedData.totalResults)
        setLoading(false)
       

    };

    return (

        <>

            <div className="text-center " style={{ margin: '35px  0px' , marginTop: '80px' }}> <h2 >Today Top Headline</h2></div>
            {loading && <Spinner />} 


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >

                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-3" key={index}>
                                <NewsItem title={element.title ? element.title.slice(0, 20) : "Title Not Available"}
                                    description={element.description ? element.description.slice(0, 75) : "Description Not Available"}
                                    imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>

            {/* <div className="d-flex justify-content-end ">
                    {!this.state.loading && <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.preButton}> &larr; Previous</button>}
                    {!this.state.loading && <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-info mx-3" onClick={this.nextButton}>Next &rarr;</button>}
                </div> */}

        </>

    )

}
export default News;


News.defaultProps = {

    country: "us",
    category: "general",
    pageSize: 6
}

News.propTypes = {

    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number

}