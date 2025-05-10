import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput(""); 
    }
  };
  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed; 
    setTodos(newTodos); 
  };
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); 
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen ml-3 flex items-center justify-center bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-100 transition-all duration-500 ease-in-out">
        <div className="w-full max-w-md p-6 rounded-xl shadow-xl bg-white/60 backdrop-blur-sm border border-white/10 sm:mx-4 md:mx-6 lg:mx-8">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">My Todo List</h1>
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
            <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Enter your task" className="flex-1 p-3 rounded-md border border-white/30 bg-white/20 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none"/>
            <button className="bg-gradient-to-br from-purple-400 to-pink-300 text-white px-4 py-2 rounded-md hover:from-purple-500 hover:to-pink-400 transition-all">Add</button>
        </form>
        <ul className="space-y-3 max-h-64 overflow-y-auto">
            {todos.map((todo, i) => (
            <li key={i} className="flex justify-between items-center p-4 rounded-lg bg-white/40 backdrop-blur-sm border border-white/20 transition-all duration-300 ease-in-out">
                <label className="flex items-center gap-2">
                <input type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleDone(i)}
                    className="h-5 w-5 rounded border-gray-300 text-purple-500 focus:ring-purple-500"/>
                <span className={todo.completed ? "line-through text-gray-400" : "text-gray-800"}>
                    {todo.text}
                </span>
                </label>
                <button onClick={() => removeTodo(i)} className="text-red-500 hover:text-red-700 transition-all">Delete</button>
            </li>
            ))}
        </ul>
        </div> 
    </div>
  
  );
}
