import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, TestPage } from '../pages';
import { checkEnv } from '../utils';
import { AnimatePresence, motion } from 'framer-motion';

type RouteType = {
  name: string;
  path: string;
  element: JSX.Element;
};

const publicRoutes: RouteType[] = [
  { name: 'Home', path: '/', element: <HomePage /> },
];

const devRoutes: RouteType[] = [
  { name: 'Test', path: '/test', element: <TestPage /> },
];

export const routes: RouteType[] = checkEnv('development')
  ? publicRoutes.concat(...devRoutes)
  : publicRoutes;

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      {routes.map(({ path, element, name }) => (
        <Route
          key={name}
          path={path}
          element={
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.5 }}
            >
              {element}
            </motion.div>
          }
        />
      ))}
    </Routes>
  );
}
