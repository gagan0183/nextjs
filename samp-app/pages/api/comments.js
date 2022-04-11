import comments from "./comments.json";

const commentsCalling = (req, res) => {
    res.status(200).json(comments);
}

export default commentsCalling;