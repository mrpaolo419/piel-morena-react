import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Productorcard = ({ marca, precio, articulo, imagen, id }) => {
  return (
    <Card sx={{ width: 300, height: 350 }}>
      <CardMedia sx={{ height: 200 }} image={imagen} title={articulo} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {marca}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {articulo}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ${precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/productdetail/${id}`}>
          <Button size="small">Ver Detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Productorcard; // Asegúrate de tener esta línea al final
