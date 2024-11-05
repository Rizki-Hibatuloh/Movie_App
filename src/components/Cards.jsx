import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {

    const [cards ,setCards] = useState([]);

    useEffect(() => {
        const fetchCard = async() => {
            const Data = [
               { 
                id:1,
                imageUrl : "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2fjj.jpg",
                title: "KAMEN RIDER CLIMAX HEROES"
               },
               { 
                id:2,
                imageUrl : "https://upload.wikimedia.org/wikipedia/id/b/bc/Shin_Kamen_Rider_theatrical_poster.jpg",
                title: "KAMEN RIDER SHIIN"
               },
               { 
                id:3,
                imageUrl : "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Climaxjump.jpg/220px-Climaxjump.jpg",
                title: "KAMEN RIDER DEN-O"
               },
               { 
                id:4,
                imageUrl : "https://psxdatacenter.com/images/hires/J/K/SLPS-03495/SLPS-03495-F-ALL.jpg",
                title: "KAMEN RIDER RYUKI"
               },
               { 
                id:5,
                imageUrl : "https://i.ytimg.com/vi/voAWQk0XPM4/maxresdefault.jpg",
                title: "KAMEN RIDER SABER"
               },
               { 
                id:6,
                imageUrl : "https://psxdatacenter.com/images/covers/J/K/SLPS-03090/SLPS-03090-F-ALL.jpg",
                title: "KAMEN RIDER KUUGA"
               },
               { 
                id:7,
                imageUrl : "https://cdn2.steamgriddb.com/grid/b9c68a73e01d5b24e29eda1b9262fb27.png",
                title: "ULTRAMAN - NEXUS"
               },
               { 
                id:8,
                imageUrl : "https://static.posters.cz/image/1300/posters/black-clover-i152417.jpg",
                title: "ANIME BLACK CLOVER"
               },
               { 
                id:9,
                imageUrl :"https://m.media-amazon.com/images/M/MV5BZDg2MDJiODAtNTRkNC00MjgyLTgxYmUtZjJhYjVhMTJjZWUzXkEyXkFqcGc@._V1_.jpg",
                title: "AKAME ENGGAK KE KILL"
               },
               { 
                id:10,
                imageUrl : "https://m.media-amazon.com/images/M/MV5BOWM3MzVmYTUtZDg2ZC00YTY0LWI3MTUtZWEyYTZkM2UyMzA4XkEyXkFqcGc@._V1_.jpg",
                title: "CAPTAIN TSUBASA FULL MOVIE"
               },
            ];
            setCards(Data);
        }
        fetchCard();
    }, []);


    return (
      <div className="grid grid-cols-5  gap-4 px-8">
        {cards.map ((card) =>(
            <div key={card.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={card.imageUrl}
              alt="Goggle V"
              className="h-48 w-full object-cover"
            />
            <div className="bg-orange-500 p-3">
              <p className="text-white text-center">{card.title}</p>
            </div>
          </div>
        ))}

      </div>
    );
  };
  
  export default Cards;
  