import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./data/config";

function App() {
    const [category, setCategory] = useState("general");
    const [newsArray, setNewsArray] = useState([]);
    const [newsResults, setNewsResults] = useState();
    const [loadmore, setLoadMore] = useState(20);


    const newsApi=async() => {
        try{
            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const news = await axios.get(
                `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
            );
            setNewsArray(news.data.articles);
            setNewsResults(news.data.totalResults);
        } catch (error) {
            console.log(error);
        }
    };

    

    useEffect(() => {
        newsApi();
        // eslint-disable-next-line
    }, [newsResults,category,loadmore]);

    return (
        <div className="App" id="#home">
          <NavInshorts setCategory={setCategory} />
          {newsResults && (
            <NewsContent
              newsArray={newsArray}
              newsResults={newsResults}
              loadmore={loadmore}
              setLoadMore={setLoadMore}
            />
          )}
          <Footer />
        </div>
      );
    }

export default App;