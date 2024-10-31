import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Productorcard = ({ marca, precio, articulo, imagen }) => {
  return (
    <Card sx={{ width: 300, height: 350 }}>
      <CardMedia sx={{ height: 200 }} image={imagen} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {marca}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {articulo}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ver detalle</Button>
      </CardActions>
    </Card>
  );
};

export default Productorcard;
