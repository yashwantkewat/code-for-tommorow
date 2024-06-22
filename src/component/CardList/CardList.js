import React, { useContext } from 'react';
import { Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import { AppContext } from '../../context/AppContext';
import Pagination from '../Pagination/pagination';
import "./CardList.css"

const CardList = () => {
  const { posts, currentPage, totalPages, dispatch } = useContext(AppContext);
  const indexOfLastPost = currentPage * 6;
  const indexOfFirstPost = indexOfLastPost - 6;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    dispatch({ type: 'CHANGE_PAGE', payload: pageNumber });
  };

  return (
    <>
      <div className="card-list"  >
        {currentPosts.map((post) => (
          <Card key={post.id} className="mb-3" style={{backgroundColor:"black",color:"white",}}>
            <Badge color="danger" onClick={() => dispatch({ type: 'REMOVE_POST', payload: post.id })} className="position-absolute top-0 end-0 mt-2 me-2" style={{cursor:"pointer"}}>
              x
            </Badge>
            <CardBody>
              <CardTitle tag="h5">{post.title}</CardTitle>
              <CardText>{post.body}</CardText>
              <img src={post.image} alt="img not" />
              <h1> {post.category} </h1>
              <h1> {post.rating.rate} </h1>
              <h1> {post.rating.count} </h1>


            </CardBody>
          </Card>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default CardList;
