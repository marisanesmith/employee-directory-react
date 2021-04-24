
// the URL and information for the api call, axios

import axios from "axios";

//gets all users

export default{
    search:function(query) {
        return axios.get('https://randomuser.me/api/?results=10&inc=picture,name,email,phone,nat&nat=NO'),
        console.log(query)
    }
}

