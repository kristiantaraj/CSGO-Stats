import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import '../styles/api-hooks.css'


const ApiHooks = () => {

  //Stores the response data of the search API call
  const [userData, setUserData] = useState([]);

  //Stores the response data of the profile API call
  const [profileData, setProfileData] = useState([]);

  const [isDataAvailable, setDataAvailable] = useState('');

  //The API url's and headers
  const searchUrl = `https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/csgo/standard/search?platform=steam&query=`;
  const profileUrl = `https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/csgo/standard/profile/steam/`;
  const config = {
    headers:{
      'TRN-Api-Key': '5330e1b3-5f7e-4c36-9ea7-58dc0ff53630',
      'Accept': 'application/json'
    },
  };

  //Search API call function using Axios
  function searchUser(term) {

    axios.get(searchUrl + term, config)
    .then(
      response => {
        //how to exist  if there is no data in the response?
        if (!response.data || response.data.data.length == 0) {
          setDataAvailable("User does not exist");
        }else{
          setDataAvailable("");
        }
        setUserData(response.data.data)
      })
    .catch(function (error) {
      console.log(error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });

    userProfile(term);
  }



  //Profile API call function using Axios
  function userProfile(term) {
      axios.get(profileUrl + term, config)
      .then(
        response => {
          setProfileData(response.data.data)
        })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setDataAvailable("User does not exist or not authorized to access data");

        }
      });
  }




//Used to store the user input from the search bar triggered the 'onChange' event
const [title, setTitle] = useState('');

//Function triggered by the search button that calls the API function
function showResults() {
  searchUser(title);
}

function displayStats() {
  const result = Object.values(profileData);
  if(result.length == 0) {
    return(
      <div>WAIT</div>
    )
  }else {
    return (

      <div>
        <div className="wrapper">
  <div className="profile-card js-profile-card">
    <div className="profile-card__img">
      <img src={result[0].avatarUrl} alt="profile card"/>
    </div>

    <div className="profile-card__cnt js-profile-cnt">
      <div className="profile-card__name">{result[0].platformUserHandle}</div>
      <div className="profile-card__txt">CSGO Player from <strong>{result[0].platformSlug}</strong></div>
      <div className="profile-card-loc">
      <span className="profile-card-loc__txt">
      {result[3][0].stats.timePlayed.displayValue} played
        </span>
      </div>

      <div className="profile-card-inf">
        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">{result[3][0].stats.kills.displayValue}</div>
          <div className="profile-card-inf__txt">Kills</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">{result[3][0].stats.score.displayValue}</div>
          <div className="profile-card-inf__txt">Score</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">{result[3][0].stats.deaths.displayValue}</div>
          <div className="profile-card-inf__txt">Deaths</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">{result[3][0].stats.headshots.displayValue}</div>
          <div className="profile-card-inf__txt">Headshots</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">{result[3][0].stats.matchesPlayed.displayValue}</div>
          <div className="profile-card-inf__txt">Matches</div>
        </div>
      </div>
</div></div></div>
        </div>

  );

  }

}


return(

  <>
        <div className="form-search ">
          <input onChange={event => setTitle(event.target.value)} type="text" placeholder="Insert Steam Username/Id" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button onClick={event => showResults()}  type="button" id="button-addon2">Search</button>
        </div>

  <div><h1 className='text-center text-white mt-5'>{isDataAvailable}</h1></div>

  {userData.map((data,index) => (

    <>
    <div key={index.id} className='container text-center text-white mt-2'>
      {console.log(data.platformUserHandle) }
    </div>
    {displayStats()}
    </>
   ))}



  </>)

}



export default ApiHooks;