import  CustomSwitch  from "./ToggleSwitch/CustomSwitch";
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";
import CustomRadioBtn from "./CustomRadioBtn/CustomRadioBtn";
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
     <br/>
     <CustomRadioBtn  id={'id'}/>
     <CustomRadioBtn  id={'id'}/>
    </div>
  );
}

export default App;
