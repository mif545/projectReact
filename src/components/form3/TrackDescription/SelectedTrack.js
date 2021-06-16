import { connect } from "react-redux";
import BlueTrack from "./BlueTrack";
import GreenTrack from "./GreenTrack";
import PurpleTrack from "./PurpleTrack";
import RedTrack from "./RedTrack";
import YellowTrack from "./YellowTrack";

const SelectedTrack = (props) => {
    
    return (props.theTrack==='מרתון 42.195 ק"מ'?<BlueTrack/>:
     props.theTrack==='חצי מרתון 21.1 ק"מ'?<RedTrack/>:
    props.theTrack==='5 ק"מ'?<YellowTrack/>:
    props.theTrack==='מרוץ משפחות'?<PurpleTrack/>:<GreenTrack/>);
}
 const mapDispachToProps=(dispach)=>{
    return{
        theTrack:dispach.kindMaraton.length
    }
 }
export default connect(mapDispachToProps)(SelectedTrack);