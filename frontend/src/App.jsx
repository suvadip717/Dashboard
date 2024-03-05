import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import AllData from "./scenes/alldata";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SideBar from "./scenes/global/Sidebar";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie"
import Line from "./scenes/line"
import Geography from "./scenes/geography"
import FilterData from "./scenes/filterdata";


function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
         <SideBar/>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/alldata" element={<AllData />} />
              <Route path="/filterdata" element={<FilterData />} />
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/geography" element={<Geography/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
