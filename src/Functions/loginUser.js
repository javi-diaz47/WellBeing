import { user } from "../Data/user";
import { database } from "../Data/Database";

const loginUser = (email, password) => {

    // user =  await setTimeout(() => {

        const users = database;

        const user = users.filter(user => 
            user.email == email 
        );


        if(user.length == 1){
            return {status: true, user: user[0]};
        }else{

            return {status: false, user: {}};
        }


};

export { loginUser };