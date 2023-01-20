import { Navigate } from "react-router-dom";

const MyPage = () => {
    const isLoggined = false;

    if(!isLoggined){
        return <Navigate to='/login' replace={true} />
    }

    return <div>My page</div>
}

export default MyPage;