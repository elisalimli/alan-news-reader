import React from "react";
import { NewsCard } from "../index";
import { Grow, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    text: "Give me the latest Technology news",
    info:
      "Business, Entertainment, General, Health, Science, Sports, Technology",
  },

  {
    color: "#4527a0",
    title: "News by Terms",
    text: "What's up with Playstation 5",
    info: "Bitcoin,Playstation 5,Smartphones,Donald Trump,",
  },
  {
    color: "#283593",
    title: "News by Sources",
    text: "Give me the latest news from CNN",
    info: "CNN,Wired,BBC News,Time,IGN,Buzzfeed,ABC News",
  },
];

function NewsCards({ data, activeArticle }) {
  const classes = useStyles();
  if (!data.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    <div className={classes.info}>{infoCard.info}</div>
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <div style={{ width: "97.8vw" }}>
      <Grow in>
        <Grid container alignItems="stretch" spacing={3}>
          {data.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <NewsCard
                data={item}
                index={index}
                activeArticle={activeArticle}
              />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  );
}

export default NewsCards;
