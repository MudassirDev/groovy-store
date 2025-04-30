import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} />);
        } else {
            stars.push(<FaRegStar key={i} />);
        }
    }
    return stars;
};

function Stars({ rating }) {
    const stars = getStars(rating);
    return (<>
        <div className='flex'>
            {stars}
        </div>
    </>)
}

export default Stars
