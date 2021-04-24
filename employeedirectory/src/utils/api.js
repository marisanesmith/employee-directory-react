
// the URL and information for the api call, axios

import axios from "axios";
const BASEURL = 'https://randomuser.me/api/';

export default{
    getUsers:function() {
        return axios.get('https://randomuser.me/api/')
    }
}

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

