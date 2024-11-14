import PropTypes from 'prop-types';

function Cards(props) {
  const { title, poster } = props;

  return (
    <div className="w-48 h-full flex flex-col rounded-lg overflow-hidden shadow-lg">
      <div className="w-full  overflow-hidden">
        <img
          src={poster}
          className="w-full h-64 object-cover"
          alt={title}
          onError={(event) => {
            event.target.src = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXJyb3J8ZW58MHx8MHx8fDA%3D";
          }}
        />
      </div>
      <div className="bg-orange-500 p-2 text-center h-14">
        <p className="text-white m-0  overflow-hidden overflow-ellipsis">{title}</p>
      </div>
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Cards;
