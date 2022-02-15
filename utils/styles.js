import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
navbar:{
    backgroundColor:'#203040',
    '& a':{
        color:'#ffffff',
        marginLeft:10,
        fontWeight:"bold"
    }
},
main:{
    minHeight:'80vh'
},
footer:{
    textAlign:"center",
    '& a':{
        fontWeight:'bold'
    }
}
})

export default useStyles