import Header from "../components/text-components/Header";
import SimpleParagraph from "../components/text-components/SimpleParagraph";
import TodoList from "../components/toDos/ToDoList";

const ToDosPage = () => {
    return (
      <div className="to-dos-page">
        <Header title='To Dos'/>
        <SimpleParagraph text="A simple to dos page to practice some redux toolkit"/>
        <TodoList/>
      </div>
    );
  }
  
  export default ToDosPage;