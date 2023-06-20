
export default function(req, res){
   const games = [
    {
      "name": "Forbidden Dessert",
      "alt": "Forbidden Dessert",
      "playerNumber": "2-5",
      "description": "Use your character's special tallents to work together to recover the parts from your flying machine and get to the Launch Pad before the sandstrom gets you. But beware, the storm will move anything in its path! ",
      "image": "",
      "playTime": "45",
      "yearReleased": "2016",
      "difficultyLevel": "2",
      "age": "10+",
      "catagory": "Cooperative, Stratagy, Player with special tallents, Moving board, ",
    },
    {
      "name": "The Game",
      "alt": "The Game",
      "playerNumber": "1-5",
      "description": "",
      "image": "",
      "playTime": "20",
      "yearReleased": "2015",
      "difficultyLevel": "1",
      "age": "8+",
      "catagory": "Cooperative, Stratagy, Card",
    },
    {
      "name": "Monopoly Deal",
      "alt": "Monopoly Deal",
      "playerNumber": "2-5",
      "description": "Fast paced card game where collecting 3 property sets makes you the winner! ",
      "image": "",
      "playTime": "15",
      "yearReleased": "2014",
      "difficultyLevel": "1",
      "age": "8+",
      "catagory": "Stratagy, Card",
    },
    {
      "name": "Catan Dice Game",
      "alt": "Catan Dice Game",
      "playerNumber": "1-4",
      "description": "Use resources from your dice roll to build roads, knights, settlements, and cities. Get the most points and win. ",
      "image": "",
      "playTime": "30",
      "yearReleased": "2018",
      "difficultyLevel": "1",
      "age": "7+",
      "catagory": "Strategy, Travel, Dice",
    }
  ];
  res.status(200).json(games)

}