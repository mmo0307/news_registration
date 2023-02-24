import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import axios from 'axios';

import { SkeletonLayout } from '../skeleton/Skeleton';

import { ViewCardsNews } from './ViewCardsNews/ViewCardsNews';
import { INewsData } from '../../interface/Iprop';

export const News = () => {
  const [page, setPage] = useState<number>(1);
  const [news, setNews] = useState<INewsData[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);

  const scrollHandler = (event: any) => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };
  const handleDelete = (id: number) => {
    setNews(news.filter(item => item.id !== id));
  };

  useEffect(() => {
    const getNews = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts?&_page=${page}`
      );
      setNews([...news, ...result.data]);
      setPage(prev => prev + 1);
    };
    if (fetching) {
      getNews().finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth='md'>
      <Grid container spacing={4}>
        {news.length === 0 ? (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px'
            }}
          >
            {Array(3)
              .fill(<SkeletonLayout />)
              .map(x => x)}
          </Grid>
        ) : (
          news.map(data => (
            <ViewCardsNews
              data={data}
              handleDelete={handleDelete}
              key={data.id}
            />
          ))
        )}
      </Grid>
    </Container>
  );
};
