import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container : {
    backgroundColor: 'white',
  },
  icon: {
    marginRight: '20px',

  },
  buttons: {
    marginTop: '40px'
  },
  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    padding: '12px 0',
    background: 'white'
  }
}))

export default useStyles