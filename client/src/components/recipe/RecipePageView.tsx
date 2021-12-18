import * as React from 'react';
import { VFC } from 'react';                                                                                                   
import Grid from '@mui/material/Grid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Box from '@mui/material/Box';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Stack from '@mui/material/Stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Card, CardActions, CardContent, createTheme, Paper, styled, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';



const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MainPageView: VFC = () => {
  return (
    <div>   
      <Grid container direction="column" xs = {12} spacing={2}  mt = {1} alignItems="center" justifyItems="center"> 
        <Grid item xs={2} alignItems="center" justifyItems="center">
          <Item>
          <ThemeProvider theme={theme}>
              <Button>
                <Typography variant="h3">
                  在庫確認・登録
                </Typography>
              </Button>
            </ThemeProvider>
          </Item>
        </Grid>
        <Grid item xs={2} alignItems="center" justifyItems="center">
          <Item>
            <ThemeProvider theme={theme}>
              <Button>
                <Typography variant="h3">
                  配達
                </Typography>
              </Button>
            </ThemeProvider>
          </Item>
        </Grid>    
      </Grid>  
    </div>
  );
};

export default MainPageView;