import {useParams} from 'react-router-dom'

const data = {
    user1:{
        name:'user1',
        description : 'asdf',
    },
    user2:{
        name:'user2',
        description : 'zxcv',
    }
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>User Profile</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>No user found</p>
            )}
        </div>
    )
}

export default Profile