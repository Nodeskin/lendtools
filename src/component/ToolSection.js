import React from "react";
import Tool1 from "../asset/tool1.jpg"
import Tool2 from "../asset/tool2.jpg"
import UTMachine from "../asset/ultrasonic-testing.jpg"
import Wbarrow from "../asset/wheelbarrow.jpg"
import DrillMachine from "../asset/drilling-machine.jpg"
import Bulldozer from "../asset/bulldozer.jpg"
import LawnMower from "../asset/lawn-mower.jpg"
import Ladder from "../asset/ladder.jpg"
import Saw from "../asset/saw.jpg"
import Multimeter from "../asset/multimeter.jpg"

const ToolSection = () =>{
   
    return(
        <div>
            <section id="tools-archive">
          {/* CUTTER-1 */}
          <div className="available-tools">
            <img src={Tool1} alt="Cutter" />
            <span>Cutter</span>
            <div className="price">Price: £35/hr</div>
          </div>
          {/* CUTTER-2 */}
          <div className="available-tools">
            <img src={Tool2} alt="Cutter" />
            <span>Cutter</span>
            <div className="price">Price: £45/hr</div>
          </div>
            {/* UT-MACHINE */}
          <div className="available-tools">
            <img src={UTMachine} alt="UT Machine" />
            <span>UT Machine</span>
            <div className="price">Price: £45/hr</div>
          </div>
                {/* WHEEL-BARROW */}
          <div className="available-tools">
            <img src={Wbarrow} alt="Wheel Barrow" />
            <span>Wheel Barrow</span>
            <div className="price">Price: £45/hr</div>
          </div>
                {/* DRILLING MACHINE */}
          <div className="available-tools">
            <img src={DrillMachine} alt="Drilling Machine" />
            <span>Drilling Machine</span>
            <div className="price">Price: £25/hr</div>
          </div>
                    {/* BULLDOZER */}
          <div className="available-tools">
            <img src={Bulldozer} alt="Tonka Steel Bulldozer Vehicle" />
            <span>Tonka Steel Bulldozer Vehicle</span>
            <div className="price">Price: £85/hr</div>
          </div>
                    {/* LAWN_MOWER */}
          <div className="available-tools">
            <img src={LawnMower} alt="Lawn Mower" />
            <span>Lawn Mower</span>
            <div className="price">Price: £65/hr</div>
          </div>
                    {/* LADDER */}
          <div className="available-tools">
            <img src={Ladder} alt="Ladder" />
            <span>Ladder</span>
            <div className="price">Price: £45/hr</div>
          </div>
                    {/* SAW */}
          <div className="available-tools">
            <img src={Saw} alt="Saw" />
            <span>Saw</span>
            <div className="price">Price: £5/hr</div>
          </div>
                    {/* MULTIMETER */}
          <div className="available-tools">
            <img src={Multimeter} alt="Multimeter" />
            <span>Multimeter</span>
            <div className="price">Price: £25/hr</div>
          </div>
        </section>


        </div>
    )
}
export default ToolSection;