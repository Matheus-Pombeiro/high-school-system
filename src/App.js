import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import NewStudent from "./pages/NewStudent";
import DefaultPage from "./components/DefaultPage";
import Students from "./pages/Students";

const App = () => {
  // Declare a state that will contains the students' data
  const [students, setStudents] = useState([]);

  // Declare a function that allows the user delete a student
  const toDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route 
            path="new-student" 
            element={<NewStudent 
              toRegisterStudent={student => setStudents([...students, student])}
            />} 
          />
          <Route 
            path="students" 
            element={<Students 
              students={students}
              toDeleteStudent={toDeleteStudent}
            />} 
          />
        </Route>

        <Route path="*" element={<h1>Not Found Page</h1>} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;