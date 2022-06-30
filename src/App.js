import  CustomSwitch  from "./ToggleSwitch/CustomSwitch";
function App() {
  return (
    <div className="">
     <CustomSwitch id='subscribe'/>
     <CustomSwitch outline id='outline'/>
     <CustomSwitch dark id='darks'/>
     <CustomSwitch dark outline id='darko'/>
    </div>
  );
}

export default App;
