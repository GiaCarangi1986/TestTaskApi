import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import GetDesigner from './pages'
import { PATHS, PAGE_NAME } from './const'

const App = () => (
  <Router>
    <Routes>
      <Route
        strict
        path={PATHS.getPage.path}
        exact={PATHS.getPage.exact}
        element={<GetDesigner pageName={PAGE_NAME.getPage} />}
      />
      <Route
        strict
        path={PATHS.postPage.path}
        exact={PATHS.postPage.exact}
        element={<GetDesigner pageName={PAGE_NAME.postPage} />}
      />
      <Route
        strict
        path={PATHS.deletePage.path}
        exact={PATHS.deletePage.exact}
        element={<GetDesigner pageName={PAGE_NAME.deletePage} />}
      />
      <Route
        strict
        path={PATHS.imagesPage.path}
        exact={PATHS.imagesPage.exact}
        element={<GetDesigner pageName={PAGE_NAME.imagesPage} />}
      />
    </Routes>
  </Router>
)

export default App
