import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  Link,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";
import { useStyles } from "./styles";

function NewsCard({
  data: { title, description, publishedAt, author, url, urlToImage },
  index,
  activeArticle,
}) {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop + 40);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);
  useEffect(() => {
    if (index === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [index, activeArticle, elRefs]);

  return (
    <Card
      ref={elRefs[index]}
      className={classNames(
        classes.root,
        activeArticle === index ? classes.activeCard : null
      )}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title="Contemplative Reptile"
          component="div"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Grid
            container
            style={{ marginBottom: "15px" }}
            justify="space-between"
          >
            <Grid item>
              <Typography
                variant="body2"
                gutterBottom
                color="textSecondary"
                component="p"
              >
                {author}
              </Typography>
            </Grid>
            <Grid item>
              {" "}
              <Typography
                className={classes.author}
                color="textSecondary"
                component="p"
              >
                {new Date(publishedAt).toLocaleTimeString()}

                {` ${new Date(publishedAt).toLocaleDateString()}`}
              </Typography>{" "}
            </Grid>
          </Grid>

          <Typography
            variant="body2"
            gutterBottom
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            {" "}
            <Button size="small" color="primary">
              <Link href={url} color="inherit">
                Continue Reading...
              </Link>
            </Button>
          </Grid>
          <Grid item className={classes.cardIndex}>
            {index + 1}
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default NewsCard;
