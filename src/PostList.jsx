import { useState, useEffect } from 'react';
import { Pagination, Stack } from '@mui/material';
import BasicCard from './BasicCard';
import Shimmer from './Shimmer';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getPostData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
            if (response.ok) {
                const data = await response.json();
                setPosts(data.results);
            } else {
                setError('Failed to fetch posts');
            }
        } catch (error) {
            setError('An error occurred');
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getPostData();
    }, [currentPage]);

    const handlePageChange = (event, page) => {
        if (page === 'prev') {
            setCurrentPage((prevPage) => prevPage - 1);
        } else {
            setCurrentPage(Number(page));
        }
    };

    return (
        <>
            <div className='basic-card'>
                <h2>Profile List</h2>
                {isLoading ? (
                    <Shimmer />
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <div className='card'>
                        {posts.map((post) => (
                            <BasicCard post={post} key={post?.name} />
                        ))}
                    </div>
                )}
            </div>
            <Stack spacing={2}>
                <Pagination
                    count={9}
                    page={currentPage}
                    onChange={handlePageChange}
                    color='primary'
                    boundaryCount={1}
                    siblingCount={0}
                    showFirstButton
                    showLastButton
                />
            </Stack>
        </>
    );
};

export default PostList;

