import News from "../news/News";
import "./newsList.css";

const NewsList = () => {
  const newsArray = [
    {
      title: "Omg News",
      source: "BBC",
      author: "Random Name : )",
      date: "Nov 27, 2024",
      image:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },

    {
      title: "Omg News",
      source: "BBC",
      author: "Random Name : )",
      date: "Nov 27, 2024",
      image:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },

    {
      title: "Omg News",
      source: "BBC",
      author: "Random Name : )",
      date: "Nov 27, 2024",
      image:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },

    {
      title: "Omg News",
      source: "BBC",
      author: "Random Name : )",
      date: "Nov 27, 2024",
      image:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },
  ];
  return (
    <article className="list-news">
      <section>
        <h1>All News</h1>
      </section>
      <section>
        {newsArray.map((news, index) => (
          <News
            key={index}
            title={news.title}
            source={news.source}
            author={news.author}
            date={news.date}
            image={news.image}
          />
        ))}
      </section>
    </article>
  );
};

export default NewsList;
