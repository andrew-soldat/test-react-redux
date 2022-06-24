
import Cash from "./components/Cash";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";

function App() {

    return (
        <div className="container">
            <header className="" style={{marginTop: "30px"}}>
                <div className="logo">Logo</div>
            </header>
            <div style={{marginTop: "30px"}}>
                <Cash />
            </div>
            <div style={{marginTop: "30px"}}>
                <UsersList />
            </div>
            <div style={{marginTop: "30px"}}>
                <PostsList />
            </div>
        </div>
    );
}

export default App;
