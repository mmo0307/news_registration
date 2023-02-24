import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';

import { INewsData } from '../../../interface/Iprop';

export const ViewCardsNews = ({
  data,
  handleDelete,
  key
}: {
  data: INewsData;
  handleDelete: (id: number) => void;
  key: number;
}) => {
  const { t } = useTranslation();
  return (
    <Grid item key={key} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardMedia
          component='img'
          image={`https://source.unsplash.com/random/${data.id}`}
          alt='random'
          sx={{ height: '100%' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.title}
          </Typography>
          <Typography>{data.body}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            variant='outlined'
            sx={{
              borderColor: 'error.main',
              color: 'black',
              fontSize: '1rem',
              fontWeight: '600',
              '&:hover': {
                background: 'red',
                color: 'white',
                borderColor: 'error.main'
              }
            }}
            size='large'
            onClick={() => handleDelete(data.id)}
          >
            {t('delete_button')}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
