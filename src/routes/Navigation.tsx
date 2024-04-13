import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import { DynamicForm } from '../03-forms/pages/DynamicForm';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/formik-basic" element={<FormikBasicPage/>} />
          <Route path="/formik-yup" element={<FormikYupPage/>} />
          <Route path="/formik-components" element={<FormikComponents/>} />
          <Route path="/formik-abstraction" element={<FormikAbstraction/>} />
          <Route path="/formik-register" element={<RegisterFormikPage/>} />
          <Route path="/dynamic-form" element={<DynamicForm/>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}