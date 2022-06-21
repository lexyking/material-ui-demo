import { PhotoCamera } from "@mui/icons-material"
import { AppBar, Button, CardMedia, CssBaseline, Grid, Toolbar, Typography, Card, CardContent, CardActions } from "@mui/material"
import { Container } from "@mui/system"

import useStyles from "./style"

const App = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography variant="h2" align="center" gutterBottom color='textPrimary'>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" gutterBottom color='textSecondary' paragraph>
              This is meant to be a long paragraph
            </Typography>
            <div className={classes.buttons}>
              <Grid container justifyContent='center' spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Button color="primary" variant="contained">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="secondary" variant="outlined">
                    Other actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
          {
                  Array.from([1,2,3,4,5,6]).map((el, i) => (
                  <Grid item key={i}>
                    <Card className={classes.card}>
                      <CardMedia className={classes.cardMedia} title="image title" image="https://source.unsplash.com/random"/>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom >
                          Heading
                        </Typography>
                        <Typography gutterBottom >
                          This is a media card
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">View</Button>
                        <Button size="small" color="primary">Edit</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                    
                  ))
                }
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom color='textSecondary' paragraph>
          This is the footer
        </Typography>
      </footer>
    </>
  )
}

export default App