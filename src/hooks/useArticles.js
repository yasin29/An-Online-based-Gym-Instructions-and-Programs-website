import { useEffect } from "react";
import { useState } from "react";

const useArticles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('./articles.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    return [articles, setArticles];
};

export default useArticles;