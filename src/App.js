import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";


function App() {
    const [category, setCategory] = useState("general");
    const [newsArray, setNewsArray] = useState([]);
    const [newsResults, setNewsResults] = useState();
    const [loadmore, setLoadmore] = useState(20);

    console.log(process.env);


    const newsApi=async() => {
        try{
           
            const news = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadmore}`
            );
            setNewsArray(news.data.articles);
            setNewsResults(news.data.totalResults);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(newsArray);

    useEffect(() => {
        newsApi();
    }, [newsResults,category,loadmore]);

    return <div className="App">
    <NavInshorts setCategory={setCategory} />

    <NewsContent setLoadmore={setLoadmore} loadmore={loadmore} newsArray={newsArray} newsResults={newsResults} />
    <Footer />
    </div>
}

export default App;