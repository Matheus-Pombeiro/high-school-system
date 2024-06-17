import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import NewStudent from "./pages/NewStudent";
import DefaultPage from "./components/DefaultPage";
import Students from "./pages/Students";
import Student from "./pages/Student";
import NotFound from "./pages/NotFound";

const App = () => {
  // Declare a state that will contains the students' data
  const [students, setStudents] = useState([]);

  // Declare a function that delete a student
  const toDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Declare a function that sort the students by crescent alphabetical order
  const handleSortCrescent = () => {
    const sorted = [...students].sort((a, b) => a.name.localeCompare(b.name));
    setStudents(sorted);
  };
  
  // Declare a function that sort the students by decrescent alphabetical order
  const handleSortDecrescent = () => {
    const sorted = [...students].sort((a, b) => a.name.localeCompare(b.name));
    sorted.reverse();
    setStudents(sorted);
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
              handleSortCrescent={handleSortCrescent}
              handleSortDecrescent={handleSortDecrescent}
            />}
          />
          <Route 
            path="student/:id" 
            element={<Student 
              students={students}
            />} 
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;