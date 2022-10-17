import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import StarRating from './Rating';
import Footer from './Footer';
import '../StyleSheets/Store.css';

function Store({ 
    Games, 
    handleSelectGame , 
    wishList, 
    Rating,
    filter,
    handleFilter,
    clearFilter,
    searchItem
}) {


    function RenderItems() {
        if(filter !== 'none') {
            if(filter === 'wishlist' || filter === 'rating' || filter === 'search' ){
                if(filter === 'search') {
                    const itemSearch = searchItem.replaceAll(' ','').toLowerCase();
                    return(
                        Games.map((game,index) => {
                            if(itemSearch === game.name.replaceAll(' ','').toLowerCase()){
                                return(
                                    <Link to="/games" key={index} onClick={() => handleSelectGame(game.id)}>
                                        <div className='gameList' >
                                                <img className='itemImg' src={require('../Images/games/'+game.foldername+'/1.jpg')} alt={game.name} />
                                            <div className='px-3 mt-2'>
                                                <h5>{game.name}</h5>
                                                <h6 className='mb-0'>$ {game.price}</h6>
                                                <StarRating rate={game.rating}/>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    );
                } else if(filter === 'wishlist') {
                    return(
                        wishList.map((game,index) => {
                           return(
                            <Link to="/games" key={index} onClick={() => handleSelectGame(Games[game].id)}>
                                <div className='gameList' >
                                        <img className='itemImg' src={require('../Images/games/'+Games[game].foldername+'/1.jpg')} alt={Games[game].name} />
                                    <div className='px-3 mt-2'>
                                        <h5>{Games[game].name}</h5>
                                        <h6 className='mb-0'>$ {Games[game].price}</h6>
                                        <StarRating rate={Games[game].rating}/>
                                    </div>
                                </div>
                            </Link>
                           )
                        })
                    );
                } else {
                    return(
                        Rating.map((game,index) => {
                           return(
                            <Link to="/games" key={index} onClick={() => handleSelectGame(game.id)}>
                                <div className='gameList' >
                                        <img className='itemImg' src={require('../Images/games/'+game.foldername+'/1.jpg')} alt={game.name} />
                                    <div className='px-3 mt-2'>
                                        <h5>{game.name}</h5>
                                        <h6 className='mb-0'>$ {game.price}</h6>
                                        <StarRating rate={game.rating}/>
                                    </div>
                                </div>
                            </Link>
                           )
                        })
                    );
                }
                
            } else {
                return(
                    Games.map((game,index) => {
                        if(game.genre === filter) {
                            return(
                                <Link to="/games" key={index} onClick={() => handleSelectGame(game.id)}>
                                    <div className='gameList' >
                                            <img className='itemImg' src={require('../Images/games/'+game.foldername+'/1.jpg')} alt={game.name} />
                                        <div className='px-3 mt-2'>
                                            <h5>{game.name}</h5>
                                            <h6 className='mb-0'>$ {game.price}</h6>
                                            <StarRating rate={game.rating}/>
                                        </div>
                                    </div>
                                </Link>
                            )
                        };
                    })
                );
            }

        }   else {
            return(
                Games.map((game,index) => {
                    // console.log(game.name, game.rating);
                   return(
                    <Link to="/games" key={index} onClick={() => handleSelectGame(game.id)}>
                        <div className='gameList' >
                                <img className='itemImg' src={require('../Images/games/'+game.foldername+'/1.jpg')} alt={game.name} />
                            <div className='px-3 mt-2'>
                                <h5>{game.name}</h5>
                                <h6 className='mb-0'>$ {game.price}</h6>
                                <StarRating rate={game.rating}/>
                            </div>
                        </div>
                    </Link>
                   )
                })
            )
        };
    };
        
    return(
        <div>
        <Row className='mt-3 px-5 mb-5'>
            <Col className='mt-3'>
                <h3>Filters</h3>
                <Link onClick={() => handleFilter('wishlist')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/wish.png')} alt="wish" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>Wish List</h6></Col>
                    </Row>
                </Link>
                <Link onClick={() => handleFilter('rating')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/rating.png')} alt="rating" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>Ratings</h6></Col>
                    </Row>
                </Link>
                <h3 className='mt-3'>Genre</h3>
                <Link onClick={() => handleFilter('action')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/action.png')} alt="action" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>Action</h6></Col>
                    </Row>
                </Link>
                <Link onClick={() => handleFilter('strategy')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/strategy.png')} alt="strategy" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>Strategy</h6></Col>
                    </Row>
                </Link>
                <Link onClick={() => handleFilter('rpg')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/rpg.png')} alt="rpg" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>RPG</h6></Col>
                    </Row>
                </Link>
                <Link onClick={() => handleFilter('shooting')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/shooter.png')} alt="shooter" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>Shooting</h6></Col>
                    </Row>
                </Link>
                <Link onClick={() => handleFilter('adventure')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/adventure.png')} alt="adventure" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>Adventure</h6></Col>
                    </Row>
                </Link>
                <Link onClick={() => handleFilter('puzzle')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/puzzle.png')} alt="puzzle" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>Puzzle</h6></Col>
                    </Row>
                </Link>
                <Link onClick={() => handleFilter('racing')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/racing.png')} alt="racing" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>Racing</h6></Col>
                    </Row>
                </Link>
                <Link onClick={() => handleFilter('sport')}>
                    <Row className='px-2 py-2 mt-2 filters'>
                        <Col xs={3}> <img src={require('../Images/filterIcons/sport.png')} alt="sport" className='filtersIcon'/> </Col>
                        <Col className='mt-2'><h6>Sport</h6></Col>
                    </Row>
                </Link>
            </Col>
            <Col xs={10}>
                <h1>Game Store</h1>
                <p>Based on Community counts and ratings</p>
                <div>
                    <h5 className='filterName'>Filter by: <span className='filter'>{filter.toUpperCase()}</span></h5>
                    <Button id="clearFilter" onClick={ () => clearFilter() }>Clear Filter</Button>
                </div>
                <div className='itemsList mt-4'>
                    { RenderItems() }
                </div>
            </Col>
        </Row>
        <Footer/>
    </div>
    );
};

export default Store;