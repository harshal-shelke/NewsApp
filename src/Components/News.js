import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


const News =(props)=>{
  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [loading, setloading] = useState(true)
  const [totalResults, settotalResults] = useState(0)
 
   const capitalize=(string)=> {
    return string[0].toUpperCase() + string.slice(1);
  }

  const changeToUpperCase=(founder)=> {
    return founder.toUpperCase();
  }


  

  const updateNews =async ()=>{
    props.setProgress(10)
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey} &page=${page}&pageSize=${props.pages}`
    setloading(true)
    let data= await fetch(url)
    props.setProgress(40)
    let parDa=await data.json()
    props.setProgress(70)
    setarticles(parDa.articles)
    settotalResults(parDa.totalResults)
    setloading(false)

    props.setProgress(100)

  }


  useEffect(() => {
  document.title=`${capitalize(props.category)} AZ-NEWS`
   updateNews()
  }, [])
  

//   const prevklik= async()=>{
//     setpage(page-1)
//    updateNews()

//   }

//   const nextklik=async()=>{
//     setpage(page+1)
//     updateNews()
// }

const fetchMoreData = async () => {

  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pages}`
  setpage(page+1)
    let data= await fetch(url)
    let parDa=await data.json()
    console.log(parDa);
    setarticles(articles.concat(parDa.articles))
    settotalResults(parDa.totalResults)
    setloading(false)

};

    return (
      <>
   
        <h2 className="text-center mb-5" style={{color:'#312f93',marginTop: '70px'}}>Top {capitalize(props.category)} News in {props.country==='in'?changeToUpperCase('india'):changeToUpperCase(props.country)}</h2>
        {loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
   <div className="container">
        <div className="row">
          { articles.map((element) => {
            return   <div className="col-md-4 " key={element.url}>
                <NewsItem
                  title={element.title}
                  desc={element.description}
                  imgurl={element.urlToImage}
                  newUrl={element.url}
                  date={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                  colr={props.colr}

                />
              </div>
            
          })}
        </div>
        </div>
        </InfiniteScroll>
      
      </>
    );


}


News.defaultProps={
  country:'in',
  pages: 1,
  category:'general'
}

News.propTypes={
 country: PropTypes.string,
 pages: PropTypes.number,
 category: PropTypes.string
}
export default News;
