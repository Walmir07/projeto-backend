import express from "express"

const posts = [
    {
      id: 1,
      descrição: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150",
    },
    // Novos posts aqui:
    { 
      id: 2,
      descrição: "Um lindo pôr do sol na praia",
      imagem: "https://placecats.com/millie/300/150",
    },
    {
      id: 3,
      descrição: "Meu gato dormindo",
      imagem: "https://placecats.com/millie/300/150",
    },
    {
      id: 4,
      descrição: "Uma deliciosa refeição",
      imagem: "https://placecats.com/millie/300/150",
    },
    { 
      id: 5,
      descrição: "Paisagem montanhosa",
      imagem: "https://placecats.com/millie/300/150",
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});