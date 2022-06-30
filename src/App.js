import  CustomSwitch  from "./ToggleSwitch/CustomSwitch";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";
function App() {
  return (
    <div className="">
      <h2 style={{textAlign:'center'}}>Switch</h2>
     <CustomSwitch id='subscribe'/>
     <CustomSwitch outline id='outline'/>

     <CustomSwitch dark id='darks'/>

     <CustomSwitch dark outline id='darko'/>
     
     <h2 style={{textAlign:'center'}}>Checkbox</h2>
     <CustomCheckbox   id = 'check'/>
     
     <CustomCheckbox outline  id = 'check'/>
     
     <CustomCheckbox dark />
    </div>
  );
}

export default App;
