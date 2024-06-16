import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import NewStudent from "./pages/NewStudent";
import DefaultPage from "./components/DefaultPage";
import Students from "./pages/Students";
import Student from "./pages/Student";

const App = () => {
  // Declare a state that will contains the students' data
  const [students, setStudents] = useState([
    {
      id: "1",
      name: "Matheus Pombeiro",
      age: 55,
      profilePhoto: "https://media.licdn.com/dms/image/D4D03AQF7OC59nWxZWQ/profile-displayphoto-shrink_200_200/0/1709071293936?e=1723680000&v=beta&t=GiAbj2YT-CcQACxVVnWJYToIlT2UBXwKgsEBM9BRb-w",
      currentSubject: "Software",
      firstGrade: 96,
      secondGrade: 55
    },
    {
      id: "2",
      name: "b",
      age: 55,
      profilePhoto: "https://media.licdn.com/dms/image/D4D03AQF7OC59nWxZWQ/profile-displayphoto-shrink_200_200/0/1709071293936?e=1723680000&v=beta&t=GiAbj2YT-CcQACxVVnWJYToIlT2UBXwKgsEBM9BRb-w",
      currentSubject: "Software",
      firstGrade: 55,
      secondGrade: 55
    },
    {
      id: "3",
      name: "c",
      age: 55,
      profilePhoto: "https://media.licdn.com/dms/image/D4D03AQF7OC59nWxZWQ/profile-displayphoto-shrink_200_200/0/1709071293936?e=1723680000&v=beta&t=GiAbj2YT-CcQACxVVnWJYToIlT2UBXwKgsEBM9BRb-w",
      currentSubject: "Software",
      firstGrade: 55,
      secondGrade: 55
    },
    {
      id: "4",
      name: "d",
      age: 55,
      profilePhoto: "https://media.licdn.com/dms/image/D4D03AQF7OC59nWxZWQ/profile-displayphoto-shrink_200_200/0/1709071293936?e=1723680000&v=beta&t=GiAbj2YT-CcQACxVVnWJYToIlT2UBXwKgsEBM9BRb-w",
      currentSubject: "Software",
      firstGrade: 55,
      secondGrade: 55
    },

  ]);

  // Declare a function that delete a student
  const toDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Declare a function that sort the students by crescent alphabetical order
  const handleSortCrescent = () => {
    const sorted = [...students].sort((a, b) => a.name < b.name ? -1 : 0);
    setStudents(sorted);
  };
  
  // Declare a function that sort the students by decrescent alphabetical order
  const handleSortDecrescent = () => {
    const sorted = [...students].sort((a, b) => a.name < b.name ? -1 : 0);
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

        <Route path="*" element={<h1>Not Found Page</h1>} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;