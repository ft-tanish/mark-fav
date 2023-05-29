import { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function BasicCard(post) {
    const [isFavorite, setIsFavorite] = useState(localStorage.getItem(post?.post?.name) === 'true');

    const toggleFavorite = () => {
        const newIsFavorite = !isFavorite;
        setIsFavorite(newIsFavorite);
        localStorage.setItem(post?.post?.name, newIsFavorite.toString());
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Gender: {post?.post?.gender}
                </Typography>
                <Typography variant="h5" component="div">
                    Name: {post?.post?.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Mass: {post?.post?.mass}
                </Typography>
                <Typography variant="body2">
                    Birth Year: {post?.post?.birth_year}
                    <br />
                    Skin Color: {post?.post?.skin_color}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link to={{ pathname: "/profile/" + post?.post?.name, state: { post } }} key={post?.post?.name}>
                        Learn more
                    </Link>
                </Button>
                <Button size="small" onClick={toggleFavorite}>
                    Favorite {isFavorite ? <FavoriteBorderIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}
                </Button>
            </CardActions>
        </Card>
    );
}
