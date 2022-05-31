
import Cash from "./components/Cash";
import UsersList from "./components/UsersList";
import TodosList from "./components/TodosList";

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
                <TodosList />
            </div>
        </div>
    );
}

export default App;
