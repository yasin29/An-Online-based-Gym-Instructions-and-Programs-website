import React from 'react';
import { Row } from 'react-bootstrap';
import useArticles from '../../hooks/useArticles';
import Article from './Article';

const Articles = () => {
    const [articles] = useArticles();
    return (
        <div className="container bg-light my-3 p-3">
            <h1>Articles</h1>
            <div className='m-3'> </div>
            {
                articles.length && <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        articles.map(article => <Article key={article.id} article={article}></Article>)
                    }
                </Row>
            }
        </div>
    );
};

export default Articles;