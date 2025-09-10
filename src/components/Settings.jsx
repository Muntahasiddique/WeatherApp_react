import { useContext, useState } from 'react'
import '../styles/components/Settings.scss'
import { measurement_systems } from '../constants'
import ThemeContext from '../context/theme.context'

function Settings() {
const [opensettings,setopensettings] = useState(false)

  const {dark ,setdark ,saveThemetoLocalStorage} = useContext(ThemeContext)
  const ToggleTheme = ()=>{
setdark((prevDark)=> !prevDark)
saveThemetoLocalStorage(!dark)
  }
  return (
    <div className="Settings" >
      <div className="theme-toggler">
        <div className="theme-buttons" onClick={ToggleTheme} >
            <div className={`light-theme-btn ${dark ? '' : 'active'} ` }>
                <i className="bi bi-sun" ></i>
            </div>
              <div className={`dark-theme-btn ${dark ? 'active' : ''} ` }>
                <i className="bi bi-moon"></i>
            </div>
        </div>
      </div>
      <div className="settings-btn"  onClick={()=> setopensettings(prevVal => !prevVal)} >
        <i className="bi bi-gear" ></i>
      </div>
      <div className={`settings-menu ${opensettings ? "open" : ''}`}>
        <div className="measurement-systems">
          <h4>Measurements ssystems:</h4>
          <div className="systems">
{
  Object.values(measurement_systems).map(system => (
    <div className="system active " key={system}>
      {system}
    </div>
  ))
}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
