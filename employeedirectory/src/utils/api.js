
// the URL and information for the api call, axios

import axios from "axios";

//gets all users

export default {
    getEmployee:function() {
        return axios.get('https://randomuser.me/api/?results=50&inc=picture,name,email,phone,nat&nat=NO');
    }
}

