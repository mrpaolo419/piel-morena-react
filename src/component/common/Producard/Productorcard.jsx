const Productorcard = ({ marca, precio, articulo, imagen, id }) => {
  console.log("ID recibido en Productorcard:", id); // Verifica si el id es correcto
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
