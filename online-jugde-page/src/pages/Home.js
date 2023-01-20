import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>가장 먼저 보여지는 페이지</p>
            <Link to='/about'>소개</Link>
            <ul>
                <li>
                    <Link to='/profiles/user1'>user1 profile</Link>
                </li>
                <li>
                    <Link to='/profiles/user2'>user2 profile</Link>
                </li>
                <li>
                    <Link to='/profiles/user3'>user3 profile(none)</Link>
                </li>
            </ul>
            <Link to='/articles'>Articles list</Link>
        </div>
    )
}

export default Home;