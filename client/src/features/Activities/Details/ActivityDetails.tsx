import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props ={
    activity : Activity
}
export default function ActivityDetails({activity}: Props) {
  return (
    <Card sx={{borderRaddiusa:3}}>
        <CardMedia
            component='img'
            src={`/images/categoryImages/${activity.category}.jpg`}
        />
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>
            <Typography variant="body1">{activity.description}</Typography>
        </CardContent>
        <CardActions>
            <Button color="primary">Edit</Button>
            <Button color="inherit">Cancel</Button>
        </CardActions>
    </Card>
  )
}
