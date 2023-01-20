import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goArticles = () => {
        navigate('/articles')
    }

    const goLogin = () => {
        navigate('/login')
    }
    return (
        <div>
            <header style = {{background : 'lightgray', padding:16, fontSize:24}}>
                Header
                <button onClick={goBack}> Go Back </button>
                <button onClick={goArticles}> Article list</button>
                <button onClick={goLogin}>Login</button>
            </header>
            <main>
                <Outlet />
            </main>
            <footer style={{background : 'lightgray', padding:16, fontSize:24, marginTop:20}}>
                footer
            </footer>
        </div>
    )
}

export default Layout