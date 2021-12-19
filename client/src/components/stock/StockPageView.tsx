import * as React from 'react';
import { useEffect, useState, VFC } from 'react';
import axios from 'axios'                                                                                                   
import Grid from '@mui/material/Grid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Box from '@mui/material/Box';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Stack from '@mui/material/Stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Card, CardActions, CardContent, Checkbox, createTheme, FormControl, FormControlLabel, FormGroup, FormHelperText, Paper, styled, ThemeProvider, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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

const MainPageView: VFC = () => {

  type Data =
  {
    _id:string;
    user:string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    items:Array<object>;
  }
  const [datas, setDatas] = useState({keyValues: []});
  const baseURL = 'https://fooddelivery-func.azurewebsites.net/api/GetRefrigerators?code=SnjCrkUDh9nuS0cXt4O7kipFG1yHrnFXlGT28KpHfzG9/gdwvS3Nyw==&user=userName'

  useEffect(() => {
    axios.get(baseURL).then((res) =>{
       //useContext等に取得したデータを保存し利用する
       // eslint-disable-next-line no-console
       console.log(res.data)
       setDatas({keyValues: res.data})
    })
  },[])
  
  const history = useHistory();
  const moveMain = () => {
    history.push('/main');
  }

  return (
    <div>
      <Grid container direction="row" xs={12} spacing={3}  mt = {1} ml ={50}>
        <Grid container direction="column" xs = {3} spacing={5}  mt = {0} mb={30}> 
          <Card sx={{ minWidth: 275}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                現在庫
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {datas.keyValues && datas.keyValues.map((data: Data) => {
                  <div>{data.items}</div>
                })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container direction="row" xs={12} spacing={3}  mt = {1}  mr={3} >
            <Item>
              <ThemeProvider theme={theme}>
                <Button>
                  <Typography variant="h3">
                    追加
                  </Typography>
                </Button>
              </ThemeProvider>
            </Item>
            <Item sx={{ml:10}}>
              <ThemeProvider theme={theme}>
                <Button onClick={moveMain}>
                  <Typography variant="h3">
                    確定
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